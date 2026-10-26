import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./utils/db.js";

import articleRouter from "./routes/article.route.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);
// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//routes
app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "FootballVerse API is running ",
  });
});

app.use("/api/articles", articleRouter);

const PORT = process.env.PORT || 5002;

//global error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    return res.status(500).json({
        success: false,
        message: "Something went wrong :("
    })
})

const startServer = async() =>{
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
      
    });
  } catch (error) {
    console.error("Server startup failed.");
    process.exit(1);
  }
};

startServer();