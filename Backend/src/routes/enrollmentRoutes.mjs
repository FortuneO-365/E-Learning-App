import { Router } from "express";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { Enrollment } from "../models/Enrollment.mjs";
import { User } from '../models/User.mjs'
import { Course } from "../models/Course.mjs"; 

dotenv.config();

const { SECRET } = process.env;

const router = Router();

router.get('/api/enroll/:courseId', (req, res) => {
    const {courseId} = req.params;
    
    const authHeader = req.headers['authorization']; 
    if (!authHeader || !authHeader.startsWith('Bearer ')) return res.status(400).json({message: 'Authorization header missing or improperly formatted'});
    
    const token = authHeader.split(' ')[1]; 
    try {

        if (!token) return res.status(400).json({message: 'No token found'});

        if (!courseId) return res.status(400).json({message: 'Required parameter missing'});
        
        jwt.verify(token, SECRET, async (error, decoded) => {
            if (error) return res.status(401).json({ message: 'Invalid Token' });

            const course = await Course.findById(courseId);
            if (!course) return res.status(404).json({message: 'No course found with this course ID'});

            const enrolledStudents = await Enrollment.find({courseId: courseId});

            if(!enrolledStudents) enrolledStudents = [];

            let fullResult = [];
            let individualResult = []

            enrolledStudents.forEach(async student => {
                const studentDetails = await User.find({studentId: student.studentId});

                studentDetails.map(detail => {
                    individualResult.push(detail.fullName);
                })

                fullResult.push(individualResult);
            })

            res.status(201).json({
                message: 'Enrolled Students Retrieved Successfully',
                students: fullResult,
            })

        })

    }catch(error){
        console.error('Error fetching enrolled students:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
        
}) // Get my enrollments

router.post('/api/enroll/:courseId', (req, res) => {
    const {courseId} = req.params;

    const {studentId} = req.body;
    
    const authHeader = req.headers['authorization']; 
    if (!authHeader || !authHeader.startsWith('Bearer ')) return res.status(400).json({message: 'Authorization header missing or improperly formatted'});
    
    const token = authHeader.split(' ')[1]; 
    try {

        if (!token) return res.status(400).json({message: 'No token found'});

        if (!courseId) return res.status(400).json({message: 'Required parameter missing'});

        if (!studentId) return res.status(400).json({message: 'Required fields missing'});
        
        jwt.verify(token, SECRET, async (error, decoded) => {
            if (error) return res.status(401).json({ message: 'Invalid Token' });

            const student = await User.findOne({studentId: studentId});
            if (!student) return res.status(404).json({message: 'No student found with this student ID'});

            const course = await Course.findById(courseId);
            if (!course) return res.status(404).json({message: 'No course found with this course ID'});

            const newStudent = new Enrollment({
                studentId: studentId,
                courseId: courseId,
            })

            const savedEnrollment = await newStudent.save();

            res.status(201).json({
                message: 'Student Enrolled Successfully',
                savedEnrollment,
            })

        })
    }catch(error){
        console.error('Error enrolling student:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
        
}) // Enroll in a course