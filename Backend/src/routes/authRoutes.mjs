import { Router } from "express";
import jwt from 'jsonwebtoken';
import User from '../models/User.mjs';
import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const { SECRET } = process.env;

const router = Router();

var token;

router.post('/api/register', async (req, res) => {
    const {
        fullname,
        email,
        password,
        studentId,
        role,
        phone,
        address
    } = req.body;

    try {
        if(fullname == '' || email == '' || password == '' || role == '') return res.status(400).json({ message: 'Required fields missing' });

        const validRoles = ['student', 'admin', 'instructor'];
        if (!validRoles.includes(role)) return res.status(400).json({ message: 'Invalid role' });

        if(role === 'student'){
            if(studentId == '') return res.status(400).json({ message: 'Student ID missing' })
        }

        const user = new User({
            fullName: fullname,
            email: email,
            password: password,
            role: role,
            phone: phone,
            address: address
        });

        // Check if user already exists
        
        const savedUser = await user.save();

        const payload = {
            userId: savedUser._id,
            email: savedUser.email,
            role: savedUser.role,
            fullName: savedUser.fullName
        };

        token = jwt.sign(payload, SECRET, {expiresIn: '3h'});

        res.status(201).json({ 
            message: 'User registered successfully', 
            token, 
            user: payload 
        });

    } catch (error) {
        console.error('Error registering user:', error);
        if (error instanceof mongoose.Error.ValidationError) {
            return res.status(400).json({ message: error.message });
        }
        res.status(500).json({ message: 'Internal server error' });   
    }

});

router.post('/api/login', (req, res) => {});

router.get('/api/profile', (req, res) => {});