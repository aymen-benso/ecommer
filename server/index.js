const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
    res.json({ products:["product 1","product 2","product 3"] });
  });
  
  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });