const cors = require('cors');

const allowedCors = {
  origin: [
    'https://msprod.nomoredomains.xyz/',
    'http://msprod.nomoredomains.xyz/',
  ],
  credentials: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
};

module.exports = cors(allowedCors);
