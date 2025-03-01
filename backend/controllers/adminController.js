import validator from "validator";
import bcrypt from "bcrypt";
import { v2 as cloudinary } from "cloudinary";
import tutorModel from "../models/tutorModel.js";
import jwt from "jsonwebtoken";
import appointmentModel from "../models/appointmentModel.js";
import userModel from "../models/userModel.js";

//API for adding tutor 
const addTutor = async (req, res) => {

   try{
      const { name, email, password, speciality, degree, experience, about, fees, address } = req.body
      const imageFile = req.file

      // checking for all data to add tutor
      if (!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address) {
         return res.json({ success: false, message: "Missing Details" })
     }

     // validating email format
     if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Please enter a valid email" })
   }

   // validating strong password
   if (password.length < 8) {
      return res.json({ success: false, message: "Please enter a strong password" })
  }

  // hashing user password
  const salt = await bcrypt.genSalt(10); // the more no. round the more time it will take
  const hashedPassword = await bcrypt.hash(password, salt)

  // upload image to cloudinary
  const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: "image" })
  const imageUrl = imageUpload.secure_url

  const tutorData = {
   name,
   email,
   image: imageUrl,
   password: hashedPassword,
   speciality,
   degree,
   experience,
   about,
   fees,
   address: JSON.parse(address),
   date: Date.now()
}

const newTutor = new tutorModel(tutorData)
await newTutor.save()

res.json({ success: true, message: 'Tutor Added' })
   }
   catch (error){
      console.log(error)
        res.json({ success: false, message: error.message })
   }
}


// API admin login 
const loginAdmin = async (req, res) => {
   try {
      const { email, password } = req.body

      if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
         const token = jwt.sign(email+password, process.env.JWT_SECRET)
         res.json({ success: true, token })
     } else {
         res.json({ success: false, message: "Invalid credentials" })
     }

   } catch (error) {
      console.log(error)
      res.json({ success: false, message: error.message })
   }
}

// API get all tutors
const allTutors = async (req, res) => {
   try {

       const tutors = await tutorModel.find({}).select('-password')
       res.json({ success: true, tutors })

   } catch (error) {
       console.log(error)
       res.json({ success: false, message: error.message })
   }
}

const appointmentsAdmin = async (req, res) => {
   try {

       const appointments = await appointmentModel.find({})
       res.json({ success: true, appointments })

   } catch (error) {
       console.log(error)
       res.json({ success: false, message: error.message })
   }

}

const appointmentCancel = async (req, res) => {
   try {

       const { appointmentId } = req.body
       await appointmentModel.findByIdAndUpdate(appointmentId, { cancelled: true })

       res.json({ success: true, message: 'Appointment Cancelled' })

   } catch (error) {
       console.log(error)
       res.json({ success: false, message: error.message })
   }

}


const adminDashboard = async (req, res) => {
   try {

       const tutors = await tutorModel.find({})
       const users = await userModel.find({})
       const appointments = await appointmentModel.find({})

       const dashData = {
           tutors: tutors.length,
           appointments: appointments.length,
           patients: users.length,
           latestAppointments: appointments.reverse()
       }

       res.json({ success: true, dashData })

   } catch (error) {
       console.log(error)
       res.json({ success: false, message: error.message })
   }
}

export {addTutor, loginAdmin, allTutors, appointmentsAdmin, appointmentCancel, adminDashboard}