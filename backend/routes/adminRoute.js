import express from 'express';
import { addTutor, allTutors, loginAdmin } from '../controllers/adminController.js';
import upload from '../middlewares/multer.js';
import authAdmin from '../middlewares/authAdmin.js';
import { changeAvailablity } from '../controllers/tutorController.js';

const adminRouter = express.Router();

adminRouter.post("/login",loginAdmin)
adminRouter.post("/add-tutor",authAdmin,upload.single('image'), addTutor);
adminRouter.get("/all-tutors", authAdmin, allTutors)
adminRouter.post("/change-availability", authAdmin, changeAvailablity)

export default adminRouter;