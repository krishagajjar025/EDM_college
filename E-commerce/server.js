import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./confige/db.js";
import authRoutes from "./routes/authRoute.js";
import cors from "cors";

import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use(cors());

app.use(morgan("dev"));

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

app.get("/", (req, res) => {
  res.send("<h1>Welcome</h1>");
});

const PORT = process.env.PORT || 5030;

app.listen(PORT, () => {
  console.log(`Server Running in ${process.env.DEV_MODE} mode on port ${PORT}`);
});
