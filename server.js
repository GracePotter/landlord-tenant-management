// Summer Exam Coding Assignment - Backend
// Need to npm install express, cors, mongoose
const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const port = 9000;

// DB connect string
const uri = "MONGO_URI=mongodb+srv://<username>:<password>@cluster0.8pnlvn4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const Customer = require('./models/tenant.model.js');
const GymClass = require('./models/landlord.model.js');
const CustGym = require('./models/contract.model.js');

const app = express(); 
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

// Connect to MongoDB
mongoose.connect(uri).then(() => { 
    console.log("Successfully connected to the MongoDB database.");
});

// Default page
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

// Routes
require("./routes/tenants.routes.js")(app);
require("./routes/landlords.routes.js")(app);
require("./routes/contracts.routes.js")(app);

// Set up the HTTP server and listen on port 9000
app.listen(port, () => {
    console.log("Server running on port: " + port + "\n");
});

/* 
    Database Design: 
    DB name: LandlordTenantDB.
    Collections: tenants, landlords, contracts, with primary key: _id
    For collecitons details, please refer to files in folder ./model
*/









