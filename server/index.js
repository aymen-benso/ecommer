const express = require("express");
const cors = require("cors");
const path = require("path");

const PORT = process.env.PORT || 4000;

const app = express();

// Enable CORS for all routes
app.use(cors());

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

app.get("/api/category", (req, res) => {
  res.json(
    {
  "categories": [
    {
      "id": 1,
      "icon": "https://example.com/icons/category1.png",
      "name": "Category 1"
    },
    {
      "id": 2,
      "icon": "https://example.com/icons/category2.png",
      "name": "Category 2"
    },
    {
      "id": 3,
      "icon": "https://example.com/icons/category3.png",
      "name": "Category 3"
    },
    {
      "id": 4,
      "icon": "https://example.com/icons/category4.png",
      "name": "Category 4"
    },
    {
      "id": 5,
      "icon": "https://example.com/icons/category5.png",
      "name": "Category 5"
    }
  ]
});
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});