import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'

const mongoURI = process.env.MONGO

mongoose.connect(mongoURI).then(() => {
    console.log('mongodb is connected')
}).catch((err) => {
    console.log(err);
})

const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log('Server is running on port 3000!');
});

app.use('/api/user', userRoutes)
app.use('/api/auth', authRoutes)