const express = require('express');
const cors = require('cors');
const app = express()
const port = 5000;
const colors = require('colors');
require("./db/index.js")
const tourRouter = require('./routes/tour.js')

app.use(cors());
app.use(express.json())

app.use("/api/v1", tourRouter)

app.listen(port, () => {
    console.log(`app is listening on port`.bold.red)
})