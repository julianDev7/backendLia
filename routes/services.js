'use strict'

var express = require('express');

var serviceController = require("../controllers/services");

var routes = express.Router();


routes.post("/api/backend", serviceController.createService);

module.exports = routes;