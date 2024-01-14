require("dotenv").config();
const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 3000;

const app = express();

app.use("/public", express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(PORT, _ => {
  console.log(`Application listening at http://127.0.0.1:${PORT}`);
})