// Middleware for 404 on /api and /static routes
const apiAndStaticNotFound = (req, res, next) => {
    if (req.path.startsWith('/api') || req.path.startsWith('/static')) {
        return res.status(404).send({ error: 'Nie znaleziono' });
    }
    next();
};

// Middleware for all other non-existent routes
const generalNotFound = (req, res, next) => {
    if (!req.path.startsWith('/api') && !req.path.startsWith('/static')) {
        return res.status(404).send('Nie ma takiej strony 404');
    }
    next();
};

module.exports = { apiAndStaticNotFound, generalNotFound };