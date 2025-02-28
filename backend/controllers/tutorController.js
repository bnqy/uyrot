import tutorModel from "../models/tutorModel.js"


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


export {changeAvailablity }
