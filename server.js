const express = require("express");
const listings = require("./data");

const app = express();
const port = 5000;

// Test endpoints
app.get("/", (req, res) => {
  res.json({ message: "Hello World from node app!", data: listings });
});

app.listen(port, () => {
  console.log(`Test server running on port ${port}`);
});
