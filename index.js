const config = require('./config');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`Welcome to ${config.BOT_NAME} Bot Panel!`);
});

app.listen(3000, () => {
  console.log(`${config.BOT_NAME} is running on port 3000.`);
});
