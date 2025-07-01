import mongoose from 'mongoose';

const virtualSessionSchema = new mongoose.Schema({
    courseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course', 
        required: true
    },
    instructorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description:{
        type: String,
        default: ''
    }, 
    startTime:{
        type: Date,
    },
    endTime: {
        type: Date,
    },
    meetingLink: {
        type: String,
        required: true
    },
    recordingLink: {
        type: String,
        default: ''
    },
    createdAt: {
        type: Date,
        default: Date.now
    }, 
});

export const virtualSession = mongoose.model('VirtualSession', virtualSessionSchema, 'VirtualSessions');