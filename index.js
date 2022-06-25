const express = require("express");
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const cors = require('cors');

const userRoute = require('./routes/user')

dotenv.config();

const PORT = process.env.MAIN_PORT || 300;
const password = process.env.PASSWORD_DB
const userName = process.env.USER_NAME


const url = `mongodb+srv://${userName}:${password}@cluster0.mplyw.mongodb.net/lab-serverDB?retryWrites=true&w=majority`;
const app = express();


mongoose.connect(url)
.then(console.log(`Successfully connected to the LAB DB`))
.catch(err => console.error(err));

//to be able to send json post requests
app.use(express.json());

app.use(cors()); //to allow requests from local host
app.use('lab/users', userRoute);

app.listen(PORT, (req, res) => {console.log(`Running on port ${PORT}`)});