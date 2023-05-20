const route = require('express').Router();
const morgan = require('morgan')


route.use(morgan('dev'))






module.exports = route