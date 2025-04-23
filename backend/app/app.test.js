const request = require('supertest');
const path = require('path');
const app = require('./app');

describe('Express App', () => {
    it('should return a JSON response for the /api/example route', async () => {
        const response = await request(app).get('/api/example');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ message: 'This is a simple API response' });
    });

    it('should serve the React app for non-API routes', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.header['content-type']).toContain('text/html');
    });

    // it shoud always render index.html for any route
    it('should serve index.html for any other route', async () => {
        const response = await request(app).get('/some/other/route');
        expect(response.status).toBe(200);
        expect(response.header['content-type']).toContain('text/html');
        expect(response.text).toContain('<div id="root"></div>');
    });

});
