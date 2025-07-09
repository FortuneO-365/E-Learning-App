import { Router } from "express";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { Course } from "../models/Course.mjs"; 
import { Module } from "../models/Module.mjs"; 

dotenv.config();

const { SECRET } = process.env;

const router = Router();


router.get('/api/courses', (req, res) => {
    const authHeader = req.headers['authorization']; 
    if (!authHeader || !authHeader.startsWith('Bearer ')) return res.status(400).json({message: 'Authorization header missing or improperly formatted'});

    const token = authHeader.split(' ')[1]; 

    try {
        if (!token) return res.status(400).json({message: 'No token found'});

        jwt.verify(token, SECRET, async (error, decoded) => {
            if (error) return res.status(401).json({ message: 'Invalid Token' });

            const courses = await Course.find({}).sort({ createdAt: -1 }); // Fetch all courses sorted by creation date

            if (!courses || courses.length === 0) return res.status(404).json({ message: 'No courses found' });

            res.status(201).json({ 
                message: 'Courses fetched successfully',
                courses: courses.map(course => ({
                    id: course._id,
                    title: course.title,
                    name: course.name,
                    description: course.description,
                    instructorId: course.instructorId,
                    students: course.students,
                    status: course.status
                }))
            })
        })
            
    } catch (error) {
        console.error('Error retrieving courses:', error);
        res.status(500).json({ message: 'Internal server error' }); 
    }
}) //Get all courses

router.post('/api/courses', (req, res) => {

    const {
        title,
        name,
        description,
        instructorId,
        status
    } = req.body;

    const authHeader = req.headers['authorization']; 
    if (!authHeader || !authHeader.startsWith('Bearer ')) return res.status(400).json({message: 'Authorization header missing or improperly formatted'});

    const token = authHeader.split(' ')[1]; 

    try {

        if (!token) return res.status(400).json({message: 'No token found'})

        if (title == '' || name == '' || instructorId == '') return res.status(400).json({ message: 'Required fields missing' });

        jwt.verify(token, SECRET, async (error, decoded) => {
            if (error) return res.status(401).json({ message: 'Invalid Token' });

            if (decoded.role !== 'admin') return res.status(402).json({message: 'Unauthorized access'});

            const course = new Course({
                title: title,
                name: name,
                description: description,
                instructorId: instructorId,
                status: status,
                students: [],
            })

            const savedCourse = await course.save();

            res.status(201).json({
                message: 'Course added successfully',
                savedCourse,
            })
            
        })

    } catch (error) {
        console.error('Error creating course:', error);
        res.status(500).json({ message: 'Internal server error' }); 
    }

}) //Create a new course (admin only)

router.get('/api/courses/:id', (req, res) => {
    const {id} = req.params;

    const authHeader = req.headers['authorization']; 
    if (!authHeader || !authHeader.startsWith('Bearer ')) return res.status(400).json({message: 'Authorization header missing or improperly formatted'});

    const token = authHeader.split(' ')[1]; 

    try {
        if (!token) return res.status(400).json({message: 'No token found'});

        if (!id) return res.status(400).json({message: 'Required parameter missing'});

        
        jwt.verify(token, SECRET, async (error, decoded) => {
            if (error) return res.status(401).json({ message: 'Invalid Token' });

            const course = await Course.findById(id);
            if (!course) return res.status(400).json({message: 'Course not found'});

            res.status(201).json({
                message: 'Successfully retrieved course details',
                course
            })    
            
        })

    } catch (error) {
        console.error('Error retrieving course details:', error);
        res.status(500).json({ message: 'Internal server error' }); 
    }

}) //Get course details

router.put('/api/courses/:id', (req, res) => {
    
    const {id} = req.params;
    const {status} = req.body;

    const authHeader = req.headers['authorization']; 
    if (!authHeader || !authHeader.startsWith('Bearer ')) return res.status(400).json({message: 'Authorization header missing or improperly formatted'});

    const token = authHeader.split(' ')[1]; 
    try {
        if (!token) return res.status(400).json({message: 'No token found'});

        if (!id) return res.status(400).json({message: 'Required parameter missing'});

        if (!status || status == "") return res.status(400).json({message: 'Required fields missing'});

        
        jwt.verify(token, SECRET, async (error, decoded) => {
            if (error) return res.status(401).json({ message: 'Invalid Token' });

            if (decoded.role !== 'admin' || decoded.role !== 'instructor') return res.status(402).json({message: 'Unauthorized access'});

            const course = await Course.findById(id);
            if (!course) return res.status(400).json({message: 'Course not found'});

            course.status = status;

            const savedCourse = await course.save();

            res.status(201).json({
                message: 'Updated course successfully',
                savedCourse
            })
        })

    }catch(error){
        console.error('Error updating course:', error);
        res.status(500).json({ message: 'Internal server error' }); 
    }

}) //Update course details (admin only)

router.delete('/api/courses/:id', (req, res) => {
    
    const {id} = req.params;

    const authHeader = req.headers['authorization']; 
    if (!authHeader || !authHeader.startsWith('Bearer ')) return res.status(400).json({message: 'Authorization header missing or improperly formatted'});

    const token = authHeader.split(' ')[1]; 
    try {
        if (!token) return res.status(400).json({message: 'No token found'});

        if (!id) return res.status(400).json({message: 'Required parameter missing'});

        jwt.verify(token, SECRET, async (error, decoded) => {
            if (error) return res.status(401).json({ message: 'Invalid Token' });

            if (decoded.role !== 'admin' || decoded.role !== 'instructor') return res.status(402).json({message: 'Unauthorized access'});

            const course = await Course.findById(id);
            if (!course) return res.status(400).json({message: 'Course not found'});

            await course.deleteOne();

            res.status(201).json({message: 'Course deleted successfully'})
        })

    }catch(error){
        console.error('Error deleting course:', error);
        res.status(500).json({ message: 'Internal server error' }); 
    }

}) //Delete a course (admin only)

//Module routes

router.post('/api/courses/:courseId/modules', (req, res) => {
    
    const {id} = req.params;
    const {
        title,
        contentType,
        content
    } = req.body;

    
    const authHeader = req.headers['authorization']; 
    if (!authHeader || !authHeader.startsWith('Bearer ')) return res.status(400).json({message: 'Authorization header missing or improperly formatted'});
    
    const token = authHeader.split(' ')[1]; 
    try {

        if (!token) return res.status(400).json({message: 'No token found'});

        if (!id) return res.status(400).json({message: 'Required parameter missing'});

        if (title == "" || contentType == "" || content == "") return res.status(400).json({message: 'Required fields missing'});

        
        jwt.verify(token, SECRET, async (error, decoded) => {
            if (error) return res.status(401).json({ message: 'Invalid Token' });

            if (decoded.role !== 'admin' || decoded.role !== 'instructor') return res.status(402).json({message: 'Unauthorized access'});

            var order;

            const modules = await Module.find({courseId: id});
            if (!modules || modules.length == 0 )  {
                order = 1;
            }
            
            order = modules.length + 1

            const newModule = new Module({
                courseId: id,
                title: title,
                contentType: contentType,
                content: content,
                order: order,
            })

            const savedModule = await newModule.save();

            res.status(201).json({
                message: 'Created Module Successfully',
                savedModule,
            })

        })

    } catch (error) {
        console.error('Error creating module:', error);
        res.status(500).json({ message: 'Internal server error' }); 
    }
}) //Create a new module for a course(admin/lecturer only)

router.get('/api/courses/:courseId/modules', (req, res) => {
        
    const {id} = req.params;

    
    const authHeader = req.headers['authorization']; 
    if (!authHeader || !authHeader.startsWith('Bearer ')) return res.status(400).json({message: 'Authorization header missing or improperly formatted'});
    
    const token = authHeader.split(' ')[1]; 
    try {

        if (!token) return res.status(400).json({message: 'No token found'});

        if (!id) return res.status(400).json({message: 'Required parameter missing'});
        
        jwt.verify(token, SECRET, async (error, decoded) => {
            if (error) return res.status(401).json({ message: 'Invalid Token' });

            const modules = await Module.find({courseId: id});
            
            if (!modules) modules = [];

            res.status(201).json({
                message: 'Modules fetched successfully',
                modules,
            })

        })

    } catch (error) {
        console.error('Error fetching module:', error);
        res.status(500).json({ message: 'Internal server error' });    
    }
}) //Get all modules for a course