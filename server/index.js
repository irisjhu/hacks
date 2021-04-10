import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import exampleRoutes from './routes/example.js';

const app = express();

// may want to change these limits; this is just from the tutorial
app.use(express.json({ limit: "30mb", extended: true }))
app.use(express.urlencoded({ limit: "30mb", extended: true }))
app.use(cors());

// routes
app.use('/example', exampleRoutes);

// will insert MongoDB connection url

const POST = process.env.PORT || 5000;

// mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => app.list(PORT, () => console.log(`Server running on port: ${PORT}`)).catch((err) => console.log(err)));

// mongoose.set('useFindAndModify', false);