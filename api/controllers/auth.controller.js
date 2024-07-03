import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs'; // encrypt the password 

export const signup = async(req,res) => {
    const {username, password, email} = req.body;
    const hashPasswrod = bcryptjs.hashSync(password,10);
    const newUser = new User({username, password:hashPasswrod, email});
    
    try {
        await newUser.save();
        res.status(201).json("User created sucessfully");
    } catch (error) {
        res.status(500).json(error.message)
    }
    
} 