const express = require('express');
const bodyParser = require('body-parser');
const debug = require('debug')('app');
const cors = require('cors');
const pokemonRouter = require('./src/routes/pokemonRouter')();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/pokemons', pokemonRouter);

app.listen(port, () => {
  debug(`Server is running on port ${(port)}`);
});
