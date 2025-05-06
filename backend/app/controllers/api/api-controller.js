const fs = require('fs');

class ApiController {
  async example(req, res) {
    res.json({ message: 'This is a simple API response' });
  }
}

module.exports = new ApiController();
