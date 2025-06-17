import { hashPassword, comparePassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";


export const registerController = async(req, res, next) =>{
    try {

        const {name, email, password} = req.body;

        if(!name || !email || !password){
            return res.status(400).send({
                msg : "All fields are required",
                success : false
            })
        }
        
        const isExistingUser = await userModel.findOne({email});

        if(isExistingUser){
            return res.status(400).send({
                msg : "User already exists",
                success : false
            })
        }

        const hashedPassword = await hashPassword(password);
        
        const newUser = new userModel({
            name, 
            email,
            password : hashedPassword,
            totalBalance : 50, // Initial balance,
            gamePlayed : []
        }).save();

        return res.status(200).send({
            msg : "User registered successfully",
            success : true, 
            newUser
        })
        
    } catch (error) {
       next(error);
    }
}




export const loginController = async(req, res, next) =>{
    try {
        const {email, password} = req.body;

        if(!email || !password){
            return res.status(400).send({
                msg : "All fields are required",
                success : false, 
            })
        }
        
        const user = await userModel.findOne({email});


        if(!user){
            return res.status(400).send({
                msg : "User does not exist",
                success : false
            })
        }

        const isMatch = await comparePassword(password, user.password);


        if(!isMatch){
            return res.status(400).send({
                msg : "Invalid password",
                success : false
            })
        }

        const token = jwt.sign({ _id: user._id },  process.env.JWT_SECRET,  { expiresIn: "7d" } );

        return res.status(200).send({
            success : true,
            msg : "Login Successfully",
            user,
            token
        })
    
    } catch (error) {
       next(error);
    }
}