const express = require("express");
const app = express();

// Use PORT from environment or fallback to 3000
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World from a dockerized app");
});

app.listen(PORT, () => {
  console.log(`Example app is listening on port ${PORT}`);
});
