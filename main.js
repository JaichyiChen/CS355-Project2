const express = require("express");
const path = require("path");

const app = express();

// setup static and middleware
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./main.html"));
});
app.get("/main.html", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./main.html"));
});
app.get("/about.html", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./about.html"));
});
app.get("/services.html", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./services.html"));
});
app.get("/contact.html", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./contact.html"));
});
app.all("*", (req, res) => {
  res.status(404).send("resource not found");
});

app.listen(5000, () => {
  console.log("server is listening on port 5000....");
});
