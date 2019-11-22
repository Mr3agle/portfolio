const mongoose = require('mongoose');
require('dotenv').config();

//Connect to db
mongoose.connect(process.env.DB_CONNECTION, {
   useNewUrlParser: true,
   useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', (error) => console.error(error)); //Connection error
db.once('open', () => console.log('connected to database')); //Connected 