require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const headerMiddleware = require('./middleware/headers');
const errorMiddleware = require('./middleware/errors');

const graphqlMiddleware = require('./middleware/graphql');

const app = express();

app.use(bodyParser.json());

app.use(headerMiddleware);

app.use(errorMiddleware);

app.use('/graphql', graphqlMiddleware);

mongoose
  .connect(process.env.MONGO_DB_URL)
  .then((result) => {
    app.listen(8080);
  })
  .catch((err) => console.log(err));
