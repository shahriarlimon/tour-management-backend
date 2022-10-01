const mongoose = require('mongoose');
const dotenv = require('dotenv');
mongoose.connect('mongodb://localhost:27017/tour_management').then(() => { 
    console.log('db is connected successfully')
}).catch((error) => {
    console.log('db connection failed',error)
 })