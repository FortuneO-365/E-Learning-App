import mongoose from 'mongoose';
import bcrypt from 'bcryptjs'
 
const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['student', 'admin', 'instructor'],
        default: 'student',
    },
    studentId: {
        type: String,
        default: null,
    },
    phone: {
        type: String,
        default: '',
    },
    address: {
        type: String,
        default: ''
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

userSchema.pre('save', async function(next) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);

    if (this.role !== 'student') {
        this.studentId = null;
    }

    next();
})

export const User = mongoose.model('User', userSchema, 'users');