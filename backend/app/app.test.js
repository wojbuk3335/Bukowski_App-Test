const request = require('supertest');
const app = require('./app');

describe('App Routes', () => {
    it('should return a JSON response for /api/example', async () => {
        const response = await request(app).get('/api/example');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ message: 'This is a simple API response' });
    });

    it('should return "home" for /home route', async () => {
        const response = await request(app).get('/home');
        expect(response.status).toBe(200);
        expect(response.text).toBe('home');
    });

    it('should return 404 for unknown /api routes', async () => {
        const response = await request(app).get('/api/unknown');
        expect(response.status).toBe(404);
        expect(response.body).toEqual({ error: 'Nie znaleziono' });
    });

    it('should return 404 for unknown /static routes', async () => {
        const response = await request(app).get('/static/unknown');
        expect(response.status).toBe(404);
        expect(response.body).toEqual({ error: 'Nie znaleziono' });
    });

    it('should return "Nie ma takiej strony 404" for non-existent routes', async () => {
        const response = await request(app).get('/non-existent-route');
        expect(response.status).toBe(404);
        expect(response.text).toBe('Nie ma takiej strony 404');
    });

    it('should serve the React app for catch-all routes', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.text.toLowerCase()).toContain('<!doctype html>'); // Case-insensitive check
    });
});