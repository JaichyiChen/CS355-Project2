const express = require("express");
const path = require("path");
const app = express();
const fs = require("fs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// setup static and middleware
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./main.html"));
});
app.get("/main", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./main.html"));
});
app.get("/about", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./about.html"));
});
app.get("/services", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./services.html"));
});
app.get("/contact", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./contact.html"));
});
// post request for writing into the file
app.post("/contact", (req, res) => {
  fs.writeFile("output.txt", req.body.text, (err) => {
    if (err) {
      console.error(err);
    }
  });
  res.sendFile(path.resolve(__dirname, "./contact.html"));
});
app.all("*", (req, res) => {
  res.status(404).send("resource not found");
});

app.listen(5000, () => {
  console.log("server is listening on port 5000....");
});
