const cors = require('cors');

const listUrl = () => {
  const { NODE_ENV } = process.env;
  let list = [];
  if (!NODE_ENV) {
    list = [
      'https://localhost:3000',
      'https://localhost:3001',
    ];
  } else {
    list = [
      'https://msprod.nomoredomains.xyz',
      'http://msprod.nomoredomains.xyz',
    ];
  }
  return list;
};

const allowedCors = {
  origin: listUrl(),
  // credentials: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
};

module.exports = cors(allowedCors);
