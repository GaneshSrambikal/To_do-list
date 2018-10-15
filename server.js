const express = require('express');//backend framwork
const mongoose = require('mongoose');//orm to interact to mongodb
const bodyParser = require('body-parser');//take request and response from the bo=ody


const app = express();

//bodyparser middleware
app.use(bodyParser.json());

//db config
const db = require('./config/keys').mongoURI;

//connect to mongo
mongoose
    .connect(db)
    .then(() => console.log('Mongodb Connected..'))
    .catch(err => consoloe.log(err));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

