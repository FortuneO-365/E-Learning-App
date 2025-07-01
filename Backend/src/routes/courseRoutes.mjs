import { Router } from "express";

const router = Router();

router.get('/api/courses', (req, res) => {}) //Get all courses

router.post('/api/courses', (req, res) => {}) //Create a new course (admin only)

router.get('/api/courses/:id', (req, res) => {}) //Get course details

router.put('/api/courses/:id', (req, res) => {}) //Update course details (admin only)

router.delete('/api/courses/:id', (req, res) => {}) //Delete a course (admin only)

//Module routes

router.post('/api/courses/:courseId/modules', (req, res) => {}) //Create a new module for a course(admin/lecturer only)

router.get('/api/courses/:courseId/modules', (req, res) => {}) //Get all modules for a course