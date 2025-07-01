import mongoose from "mongoose";

const enrollmentSchema = new mongoose.Schema({
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'users'
    },
    courseId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'courses'
    },
    enrollmentDate: {
        type: Date,
        default: Date.now
    }
});

export const Enrollment = mongoose.model('enrollments', enrollmentSchema, 'enrollments');