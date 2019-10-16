// Database
const mongoose = require('mongoose');

const DB_URI = "mongodb+srv://";  // server link from mongodb

mongoose.connect(DB_URI, { useNewUrlParser: true })
        .then( () => console.log(" 🐌-Succesful connection to database-🐌 "))
        .catch( err => console.log(err) );