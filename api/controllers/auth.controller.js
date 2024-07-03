import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs'; // encrypt the password 
import { errorHandler } from '../utils/error.js';

export const signup = async(req,res,next) => {
    const {username, password, email} = req.body;
    const hashPasswrod = bcryptjs.hashSync(password,10);
    const newUser = new User({username, password:hashPasswrod, email});
    
    try {
        await newUser.save();
        res.status(201).json("User created sucessfully");
    } catch (error) {
        next(error);
    }
    
} 