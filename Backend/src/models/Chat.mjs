import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
    roomId: {
        type: String,
        required: true
    },
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'users'
    },
    roomType: {
        type: String,
        required: true,
        enum: ['private', 'group'],
        default: 'private'
    },
    message: {
        type: String,
        required: true
    },
},{timestamps: true});

export const Chat = mongoose.model('chats', chatSchema, 'chats');