import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import database from './config/database.js';
import { errorHandler } from './utils/errorHandler.js';
import authRoutes from "./routes/auth.routes.js";

dotenv.config();
database();

const app = express();
const PORT = process.env.PORT || 4200;

const corsOptions = {
  origin: 'https://bus-naija-1.onrender.com',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
};

app.disable('x-powered-by');

app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Cache-Control', 'max-age=3600');
  res.setHeader('Content-Security-Policy', "frame-ancestors 'self'");
  next();
});

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

// routes
app.use('/api/auth', authRoutes);

// 404 Not Found
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