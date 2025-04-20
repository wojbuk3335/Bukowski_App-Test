const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// include mongoose

require('./db/mongoose')

//if not connected display error page
mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});
mongoose.connection.once('open', () => {
    console.log('MongoDB connected successfully!');}
);

// Serve static files from the React app build
app.use(express.static(path.join(__dirname, '../public')));

// Simple route
app.get('/', (req, res) => {
    res.send('Welcome to the Express App!');
});

// Another route
app.get('/about', (req, res) => {
    res.send('This is the About page.');
});

// Catch-all route to serve the React app for any other routes
app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../public', 'index.html'));
});
// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});