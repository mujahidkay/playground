const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Basic test route
app.get('/api/test', (req, res) => {
    res.json({ message: 'Backend is working!' });
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});