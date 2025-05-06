const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { port } = require('./config.js');
const { lstat } = require('fs');
const { apiAndStaticNotFound, generalNotFound } = require('./middleware/middleware.js');

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Example API route
app.use('/api', require('./routes/api.js'));

// Add a route for /home
app.get('/home', (req, res) => {
    res.send('home');
});

// Middleware for 404 on /api and /static routes
app.use(apiAndStaticNotFound);

// Serve static files from the React app build
app.use(express.static(path.join(__dirname, '../public')));

// Middleware for all other non-existent routes
app.use(generalNotFound);

// Catch-all route for the React app
app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../public', 'index.html'));
});


// Uruchamiaj serwer tylko, jeśli plik jest uruchamiany bezpośrednio
if (require.main === module) {
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
}

module.exports = app; // Eksport aplikacji