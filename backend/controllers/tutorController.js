import tutorModel from "../models/tutorModel.js"
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import appointmentModel from "../models/appointmentModel.js";


const changeAvailablity = async (req, res) => {
   try {

       const { tutId } = req.body

       const tutData = await tutorModel.findById(tutId)
       await tutorModel.findByIdAndUpdate(tutId, { available: !tutData.available })
       res.json({ success: true, message: 'Өзгөртүлдү' })

   } catch (error) {
       console.log(error)
       res.json({ success: false, message: error.message })
   }
}

const tutorList = async (req, res) => {
    try {

        const tutors = await tutorModel.find({}).select(['-password', '-email'])
        res.json({ success: true, tutors })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }

}


const loginTutor = async (req, res) => {

    try {

        const { email, password } = req.body
        const user = await tutorModel.findOne({ email })

        if (!user) {
            return res.json({ success: false, message: "Invalid credentials" })
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (isMatch) {
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
            res.json({ success: true, token })
        } else {
            res.json({ success: false, message: "Invalid credentials" })
        }


    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}


const appointmentsTutor = async (req, res) => {
    try {

        const { tutId } = req.body
        const appointments = await appointmentModel.find({ tutId })

        res.json({ success: true, appointments })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

const appointmentComplete = async (req, res) => {
    try {

        const { tutId, appointmentId } = req.body

        const appointmentData = await appointmentModel.findById(appointmentId)
        if (appointmentData && appointmentData.tutId === tutId) {
            await appointmentModel.findByIdAndUpdate(appointmentId, { isCompleted: true })
            return res.json({ success: true, message: 'Appointment Completed' })
        }

        res.json({ success: false, message: 'Appointment Cancelled' })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }

}

const appointmentCancel = async (req, res) => {
    try {

        const { tutId, appointmentId } = req.body

        const appointmentData = await appointmentModel.findById(appointmentId)
        if (appointmentData && appointmentData.tutId === tutId) {
            await appointmentModel.findByIdAndUpdate(appointmentId, { cancelled: true })
            return res.json({ success: true, message: 'Appointment Cancelled' })
        }

        res.json({ success: false, message: 'Appointment Cancelled' })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }

}

const tutorDashboard = async (req, res) => {
    try {

        const { tutId } = req.body

        const appointments = await appointmentModel.find({ tutId })

        let earnings = 0

        appointments.map((item) => {
            if (item.isCompleted || item.payment) {
                earnings += item.amount
            }
        })

        let patients = []

        appointments.map((item) => {
            if (!patients.includes(item.userId)) {
                patients.push(item.userId)
            }
        })



        const dashData = {
            earnings,
            appointments: appointments.length,
            patients: patients.length,
            latestAppointments: appointments.reverse()
        }

        res.json({ success: true, dashData })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

const tutorProfile = async (req, res) => {
    try {

        const { tutId } = req.body
        const profileData = await tutorModel.findById(tutId).select('-password')

        res.json({ success: true, profileData })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// API to update doctor profile data from  Doctor Panel
const updateTutorProfile = async (req, res) => {
    try {

        const { tutId, fees, address, available } = req.body

        await tutorModel.findByIdAndUpdate(tutId, { fees, address, available })

        res.json({ success: true, message: 'Profile Updated' })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}


export {changeAvailablity, tutorList , loginTutor, appointmentsTutor, appointmentComplete, appointmentCancel, tutorDashboard,tutorProfile, updateTutorProfile}
