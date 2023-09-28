const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 4000;

const app = express();

// Serve static files from the client folder
app.use(express.static(path.join(__dirname, "../client/build/")));

// Serve index.html when the root URL is requested
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/", "index.html"));
});

app.get("/api", (req, res) => {
  res.json({users: [
    {name: "John Doe"},
    {name: "Jane Doe"},
    {name: "Joe Doe"},
  ]});
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});