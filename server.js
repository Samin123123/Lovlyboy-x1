const express = require('express');
const app = express();
const config = require('./config');

app.use(express.json());
app.use('/', require('./routes/panelRoutes'));

app.listen(3000, () => {
  console.log(`${config.BOT_NAME} server started on port 3000`);
});
