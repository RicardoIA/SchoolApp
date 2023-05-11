const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();
const hostname = '127.0.0.1';
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});