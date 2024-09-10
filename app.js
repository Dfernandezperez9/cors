const EXPRESS = require('express');
const APP = EXPRESS();
const AXIOS = require('axios');
const CORS = require('cors');

APP.use(CORS());

APP.get('/characters', async (req, res) => {
  const RESPONSE = await AXIOS.get('https://rickandmortyapi.com/api/character/');
  const DATA = RESPONSE.data;
  res.json(DATA);
});

APP.get('/characters/:name', async (req, res) => {
  const NOMBRE = req.params.name;
  const RESPONSE = await AXIOS.get(`https://rickandmortyapi.com/api/character/?name=${NOMBRE}`);
  const DATA = RESPONSE.data;
  res.json(DATA);
});

APP.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});