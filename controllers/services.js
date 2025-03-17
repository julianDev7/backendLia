'use strict'

var service = require("../models/services");

function createService(req, resp){
    var serviceReqBody = req.body;

    var newService = new service();
    newService.name  = serviceReqBody.name;
    newService.duration = serviceReqBody.duration;
    newService.price = serviceReqBody.price;

    if(newService.name === null || newService.name.trim() ===''
        || newService.duration === null || newService.duration <= 0
        || newService.price === null || newService.price <= 0){
            resp.status(400).send({"message": "One or more required variables were not sent" })
        } //2 question
        
    
    newService.save().then(
        (savedService) => {
            resp.status(200).send({"message": "Service was created succesfully", 'service': savedService})
        },
        err => {
            resp.status(500).send({"message": "An error ocurred while creating the course", "error": err})
        }
    );
}

module.exports = {
    createService
}
