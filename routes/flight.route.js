const express = require('express');
const { FlightModel } = require('../models/flight.model');
const flightRouter = express.Router();



// get all flight data
flightRouter.get('/',async (req,res)=>   {
    try {
        let allflightData = await FlightModel.find();
        console.log(allflightData.length);
        res.status(200).send(allflightData)
    } catch (error) {
        res.status(400).send({error:error.message})
        
    }
})
// get flight by id 
flightRouter.get('/:id',async (req,res)=>   {
    let id  = req.params.id;
    console.log(id);
    try {
        let data = await FlightModel.findById(id);
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send({error:error.message})
        
    }
})


// add flights to system
flightRouter.post('/',async (req,res)=>   {
    let data = req.body;
    try {
        let flight = new FlightModel(data);
        await flight.save();
        res.status(201).send("flight data saved successfully")
    } catch (error) {
        res.status(400).send({error:error.message})
        
    }
})

// update flights to system
flightRouter.patch('/:id',async (req,res)=>   {
    let id = req.params.id;
    let data = req.body;
    try {
        await FlightModel.findByIdAndUpdate(id, data);
        res.status(204).send("flight data updated successfully")
    } catch (error) {
        res.status(400).send({error:error.message})
        
    }
})
// update flights to system
flightRouter.delete('/:id',async (req,res)=>   {
    let id = req.params.id;
    try {
        await FlightModel.findByIdAndDelete(id);
        res.status(202).send("flight deleted successfully")
    } catch (error) {
        res.status(400).send({error:error.message})
        
    }
})


module.exports = {flightRouter}