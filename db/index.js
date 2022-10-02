const mongoose = require('mongoose');
const dotenv = require('dotenv');
mongoose.connect('mongodb+srv://admin:nnsEamng8RWM3O42@cluster0.eeramyt.mongodb.net/?retryWrites=true&w=majority').then(() => { 
    console.log('db is connected successfully')
}).catch((error) => {
    console.log('db connection failed',error)
 })