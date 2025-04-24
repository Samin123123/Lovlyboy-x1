const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Welcome to Lovlyboy-x1 WhatsApp Bot Panel!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});