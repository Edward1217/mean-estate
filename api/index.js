import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import cookieParser from 'cookie-parser';
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.log(err);
  });


const app = express();
//use json as input of the server
app.use(express.json());

app.use(cookieParser());

app.listen(3000, ()=> {
    console.log("Server is running on PORT 3000!!!")
})

//req is request from client side, res is resend to client from server side
app.use('/api/user',userRouter);

app.use('/api/auth', authRouter);



//Error-Handling Middleware 
app.use((err,req,res,next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success:false,
    statusCode,
    message
  })
})