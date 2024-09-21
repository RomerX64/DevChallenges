const express = require('express');
const morgan = require("morgan");
const cors = require("cors");
const autenticacion = require('./middelweres/autenticacion');

const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use(require("./routes/indexrouter"));
app.use ((err,req,res,next) => {res.status(err.statusCode || 500).json({error: err.message})})
module.exports = app;