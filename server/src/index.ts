import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { profileRouter } from "./routes/profile";
import { planRouter } from "./routes/plan";

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(cors());
app.use(cookieParser());
app.use(express.json());


app.get("/", (req, res) => {
  res.send("API running 🚀");
});

//API Routes
app.use("/api/profile", profileRouter);
app.use("/api/plan", planRouter);

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port: ${PORT}`);
});