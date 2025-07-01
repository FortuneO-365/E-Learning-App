import { Router } from "express";

const router = Router();

router.post('/api/sessions', (req, res) => {}) //Schedule class (admin only)

router.get('/api/sessions/:courseId', (req,res) => {}) // Get all sessions for a course

router.get('/api/sessions/upcoming', (req,res) => {}) //Get all upcoming classes (student)

router.put('/api/sessions/:id', (req,res) => {}) //Update a session

router.delete('/api/sessions/:id', (req,res) => {}) //Delete a session