const express = require("express");
const bodyParser = require("body-parser");
const sql= require ("./DB/db.js");
const app = express();
const path = require("path");



// parse requests of content-type: application/json
 app.use(bodyParser.json());
// parse requests of content-type: application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: true }));

const publicDirectory = path.join(__dirname,'./public');
app.use(express.static(publicDirectory));


// simple route
app.get("/", (req, res) => {
res.sendFile(path.join(__dirname,"/views/CV2.html"));
});

// set port, listen for requests 
app.listen(3000, () => {
console.log("Server is running on port 3000." );
});