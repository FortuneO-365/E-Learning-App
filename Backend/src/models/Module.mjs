import mongoose from "mongoose";

const moduleSchema = new mongoose.Schema({
    courseId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    contentType: {
        type: String,
        enum: ['video', 'document', 'quiz', 'assignment'],
        required: true
    },
    content: {
        type: String || URL,
        required: true,
        trim: true
    },
    order:{
        type: Number,
        required: true
    },   
});

export const Module = mongoose.model('Module', moduleSchema, 'modules');