const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { port } = require('./config.js');

const app = express();

// Middleware to parse JSON
app.use(express.json());

// // Include mongoose
// require('./db/mongoose');

// Example API route
app.use('/api/example', (req, res) => {
    res.json({ message: 'This is a simple API response' });
});

// Serve static files from the React app build
app.use(express.static(path.join(__dirname, '../public')));

// Catch-all route dla aplikacji React
app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../public', 'index.html'));
});


// Middleware z 404
app.use((req, res, next) => {
    if (req.path.startsWith('/api') || req.path.startsWith('/static')) {
        return res.status(404).send({ error: 'Nie znaleziono' });
    }
    next();
});


// Uruchamiaj serwer tylko, jeśli plik jest uruchamiany bezpośrednio
if (require.main === module) {
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
}

module.exports = app; // Eksport aplikacji