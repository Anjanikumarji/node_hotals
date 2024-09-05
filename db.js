const mongoose = require('mongoose');
require('dotenv').config();

//Define the MongoDB connection URL
const mongoURL = process.env.MONGODB_URL; //Replace 'mydatabase' with your database name
// const mongoURL = process.env.MONGODB_URL; // online database

// Set up MongoDB connection
mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//Get the default connection
//Mongoose maintains a default connection object representing the MongoDB Connection.
const db = mongoose.connection;

// Define event listeners fro database connection
db.on('connected',() => {
    console.log('Connected to MongoDB Server');
});

db.on('error',(err) => {
    console.log('MongoDB connection error: ', err);
});

db.on('disconnected',() => {
    console.log('MongoDB disconnected');
});

//Export the database connection
module.exports = db;