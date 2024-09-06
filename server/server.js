import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv';
import database from './config/database.js';
import { errorHandler } from './utils/errorHandler.js';
import { apiError } from './utils/apiError.js';

dotenv.config();
database();
const app = express();

const PORT = process.env.PORT || 4200;

app.use(cors({ origin: "https://bus-naija.onrender.com/" }))
app.use(express.json());

app.get('/hello', async (req, res, next) => {
    next(apiError("this is how a 400 error would look", 400));
})

//404 Not Found
app.use((req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
});

// global error catcher
app.use(errorHandler);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
