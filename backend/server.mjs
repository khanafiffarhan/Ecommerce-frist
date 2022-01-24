// require("dotenv").config();
import dotenv from "dotenv";
import connectDB from "./config/db.mjs";
dotenv.config();

connectDB();

import express from "express";
const app = express();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Our server running on ${PORT}`));
