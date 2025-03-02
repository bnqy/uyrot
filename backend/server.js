import express from "express"
import cors from 'cors'
import 'dotenv/config'
import connectDB from "./config/mongodb.js"
import connectCloudinary from "./config/cloudinary.js"
import adminRouter from "./routes/adminRoute.js"
import tutorRouter from "./routes/tutorRoute.js"
import userRouter from "./routes/userRoute.js"
import OpenAI from "openai";
import fetch from "node-fetch"


const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

// middlews
app.use(express.json())
app.use(cors())





// ends
app.use("/api/admin", adminRouter)
app.use("/api/tutor", tutorRouter)
app.use("/api/user", userRouter)



// 
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;


app.post("/api/chat", async (req, res) => {
  try {
    const { userMessage } = req.body;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-pro-002:generateContent?key=${GOOGLE_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: userMessage }] }],
        }),
      }
    );

    const data = await response.json();
    console.log("🔹 Google API Full Response:", JSON.stringify(data, null, 2));

    // ✅ Extract AI response correctly
    const aiReply = data?.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't generate a response.";

    res.json({ reply: aiReply });
  } catch (error) {
    console.error("Google API Error:", error);
    res.status(500).json({ error: "AI API call failed" });
  }
});





app.get("/", (req, res) => {
   res.send ("API Working")
 });
 
 app.listen(port, () => console.log(`Server started on PORT:${port}`))