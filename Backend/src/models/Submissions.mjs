import mongoose from 'mongoose';

const submissionSchema = new mongoose.Schema({
    submittedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    assignmentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'assignments',
        required: true
    },
    fileUrl: {
        type: String,
        required: true
    },
    submissionDate: {
        type: Date,
        default: Date.now
    },
    grade: {
        type: Number,
        default: null
    },
});
