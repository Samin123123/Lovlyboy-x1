const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send("✅ Lovlyboy-X1 Bot is running!");
});

app.listen(port, () => {
  console.log(`Lovlyboy-X1 Bot listening at http://localhost:${port}`);
});
