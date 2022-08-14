var express= require('express');
var empModel= require('../models/employee');

var router= express.Router();

const Joi= require('@hapi/joi');

const schema ={
    id: Joi.number().required(),
    name: Joi.string().min(6).required()
}

router.get('/', async function(req,res,next){
    let employees = await empModel.find();
    res.send(employees);
    next();
})

router.post('/', async function(req,res,next){

    //validate
    const validation=  Joi.valid(req.body, schema);
    console.log(validation);
    let employees = new empModel(req.body);
    try{
    await employees.save();
    res.send("Success");
    } catch(err){res.status(400).send(err)}
    next();
})
module.exports= router;