// server.js

import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import connectDB from "./DB/databaseConfigs.js";
import researchRoutes from "./routes/research.routes.js"; // Remove curly braces for default import
import productRoutes from "./routes/product.routes.js"
import projectRoutes from "./routes/project.routes.js"
import eventRoutes from "./routes/event.routes.js"
import machineRoutes from "./routes/machine.routes.js"
import ideaRoutes from "./routes/idea.routes.js"
import orderRoutes from "./routes/order.routes.js"
const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use('/api/research', researchRoutes);
app.use('/api/product', productRoutes);
app.use('/api/project', projectRoutes);
app.use('/api/event', eventRoutes);
app.use('/api/machine', machineRoutes);
app.use('/api/idea', ideaRoutes);
app.use('/api/order', orderRoutes);
app.get("/", (req, res) => {
  res.send("Server Running");
});

app.listen(PORT, () => {
  connectDB();
  console.log(`Server Running on port ${PORT}`);
});
