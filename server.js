const express = require("express");

const app = express();
const port = 5000;

// Test endpoints
app.get("/", (req, res) => {
  res.json({ message: "Hello World from node app!" });
});

app.get("/api/test", (req, res) => {
  res.json({ message: "GET request successful", timestamp: new Date() });
});

app.post("/api/test", (req, res) => {
  res.json({
    message: "POST request successful",
    body: req.body,
    timestamp: new Date(),
  });
});

app.put("/api/test/:id", (req, res) => {
  res.json({
    message: "PUT request successful",
    id: req.params.id,
    body: req.body,
    timestamp: new Date(),
  });
});

app.delete("/api/test/:id", (req, res) => {
  res.json({
    message: "DELETE request successful",
    id: req.params.id,
    timestamp: new Date(),
  });
});

app.listen(port, () => {
  console.log(`Test server running on port ${port}`);
});
