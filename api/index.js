import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
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

app.listen(3000, ()=> {
    console.log("Server is running on PORT 3000!!!")
})

//req is request from client side, res is resend to client from server side
app.use('/api/user',userRouter);

app.use('/api/auth', authRouter);