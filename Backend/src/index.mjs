import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

import authRouter from './routes/authRoutes.mjs'

const app = express();
app.use(cors());
app.use(express.json());

const {
    DB,
    PORT
} = process.env;

mongoose.connect(DB)
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));


const port = PORT || 3003;

app.get('/', (req, res) => {
    res.send('Welcome to the Backend API');
})

app.use(authRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${port}`);
});