const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv').config();

//const ExampleRoutes = require('./routes/Example')

app.use(cors())
app.use(bodyParser.json())

mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,

    })
    .then(() => console.log('MongoDB database Connected...'))
    .catch((err) => console.log(err))

app.get('/', (req, res) => {
    res.send("<h1>Server Running</h1>");
});

//app.use('/api/Example', ExampleRoutes)


app.listen(process.env.PORT, () => console.log(`App listening at http://localhost:${process.env.PORT}`))