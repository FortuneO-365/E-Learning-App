import { Router } from "express";
import jwt from 'jsonwebtoken';
import {User} from '../models/User.mjs';
import mongoose from "mongoose";
import dotenv from 'dotenv';
import bcrypt from "bcryptjs";

dotenv.config();

const { SECRET } = process.env;

const router = Router();

var token;

router.post('/api/register', async (req, res) => {
    const {
        fullname,
        email,
        password,
        role,
        phone,
        address,
        studentId,
        instructorId
    } = req.body;

    try {
        if(fullname == '' || email == '' || password == '' || role == '') return res.status(400).json({ message: 'Required fields missing' });

        const validRoles = ['student', 'admin', 'instructor'];
        if (!validRoles.includes(role)) return res.status(401).json({ message: 'Invalid role' });

        if (role === 'student') {
            if (studentId === '') return res.status(400).json({ message: 'Student ID is required for student role' });
        }

        if (role === 'instructor') {
            if (instructorId === '') return res.status(400).json({ message: 'Instructor ID is required for instructor role' });
        }

        const user = new User({
            fullName: fullname,
            email: email,
            password: password,
            role: role,
            phone: phone,
            address: address,
            studentId: role === 'student' ? studentId : '',
            instructorId: role === 'instructor' ? instructorId : ''
        });

        // Check if user already exists
        
        const savedUser = await user.save();

        res.status(201).json({ 
            message: 'User registered successfully',
            savedUser
        });

    } catch (error) {
        console.error('Error registering user:', error);
        if (error instanceof mongoose.Error.ValidationError) {
            return res.status(400).json({ message: error.message });
        }
        res.status(500).json({ message: 'Internal server error' });   
    }

});

router.post('/api/login', async (req, res) => {
    const {email, password} = req.body;

    if (email == '' || password == '') return res.status(400).json({ message: 'Required fields missing' });

    try {

        const user = await User.findOne({email: email});

        if (!user) return res.status(404).json({ message: 'User not found' });

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) return res.status(401).json({ message: 'Invalid Credentials' })

        const payload = {
            userId: user._id,
            email: user.email,
            role: user.role,
            fullName: user.fullName,
            password: user.password,
            phone: user.phone,
            address: user.address,
            studentId: user.studentId,
            instructorId: user.instructorId,
        };

        token = jwt.sign(payload, SECRET, {expiresIn: '3h'})

        res.status(201).json({
            message: 'Logged in successfully',
            token,
            user: payload,
        })

    } catch (error) {
        console.error('Error logging in user:', error);
        res.status(500).json({ message: 'Internal server error' });   
    }

});

router.get('/api/profile', (req, res) => {

    const authHeader = req.headers['authorization']; 
    if (!authHeader || !authHeader.startsWith('Bearer ')) return res.status(400).json({message: 'Authorization header missing or improperly formatted'});

    const token = authHeader.split(' ')[1]; 
    try {
        if (!token) return res.status(400).json({message: 'No token found'});

        jwt.verify(token, SECRET, (error, decoded) => {
            if (error) return res.status(401).json({ message: 'Invalid Token' });

            res.status(201).json({
                message: 'Details retrieved successfully',
                decoded  
            })
        })

    } catch (error) {
        console.error('Error retrieving user details:', error);
        if (error.name === 'TokenExpiredError') {
            return res.status(403).json({ message: 'Token has expired' });
        }
        res.status(500).json({ message: 'Internal server error' });   
    }
});

export default router