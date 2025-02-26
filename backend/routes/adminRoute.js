import express from 'express';
import { addTutor, loginAdmin } from '../controllers/adminController.js';
import upload from '../middlewares/multer.js';
import authAdmin from '../middlewares/authAdmin.js';

const adminRouter = express.Router();

adminRouter.post("/login",loginAdmin)
adminRouter.post("/add-tutor",authAdmin,upload.single('image'), addTutor);

export default adminRouter;