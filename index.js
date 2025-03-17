'use sctrict'

var express = require("express");
var bodyParser = require ("body-parser");

var application = express();
var route = express.Router();

route.get ('/api/backendLia' , (req, resp) => {
    resp.status(200).send({
        "message":"Hello World"
    })
});

application.use(route);
application.listen(2411);

