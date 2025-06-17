import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./configs/db.js";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";
import gameRoutes from "./routes/gameRoutes.js";
import authRoutes from "./routes/authRoutes.js";    

const app = express();
const PORT = process.env.PORT || 8000;

dotenv.config();
connectDB();
app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
    res.send("Hello, World!");
})

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/game", gameRoutes);


app.use(errorMiddleware);


app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
})