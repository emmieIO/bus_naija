import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import database from './config/database.js';
import { errorHandler } from './utils/errorHandler.js';
import authRoutes from "./routes/auth.routes.js"


dotenv.config();
database();
const app = express();

const PORT = process.env.PORT || 4200;

app.use(cors({ origin:["http://localhost:5173", "https://bus-naija.vercel.app/", "https://bus-naija.onrender.com"], credentials: true }))
app.use(express.json());
app.use(cookieParser());

// routes
app.use('/api/auth', authRoutes);


//404 Not Found
app.use((req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
});

// global error catcher
app.use(errorHandler);

// server listening
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
