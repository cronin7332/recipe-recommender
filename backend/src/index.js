import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import "dotenv/config"
import { userRouter } from "./routes/user.js";
import { recipesRouter } from "./routes/recipes.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);

mongoose.connect(process.env.MONGO_URL);

app.listen(3001, () => console.log("Server Started!"))