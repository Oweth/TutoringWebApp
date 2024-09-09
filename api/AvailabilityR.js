const express = require('express');

const {
    getAvailability,
    changeAvailability
} = require('../controllers/AvailabilityC.js');

avStub = [
    {
        monday: [
            {start: 1000, end: 2000},
            {start: 3000, end: 4000},
            {start: 5000, end: 6000},
        ]
    },
    {
        tuesday: [
            {start: 1000, end: 2000},
            {start: 3000, end: 4000},
            {start: 5000, end: 6000},
        ]
    },
    {
        friday: [
            {start: 1000, end: 2000},
            {start: 3000, end: 4000},
            {start: 5000, end: 6000},
        ]
    }
];

const router = express.Router();

//Get tutor availability
router.get('/availability/:tutor', (req, res) => {
    try{
        const tutor = req.params.tutor;
        //availability = await getAvailability
        const availability = avStub;
        res.json(availability);
    }
    catch(error){
        res.status(500).json({message: 'Error fetching availability', error: error.message});
    }
    
});

//Add tutor availability
router.put('/availability/:tutor', (req, res) => {
    try{
        const tutor = req.params.tutor;
        const payload = req.body;
        //availability = await changeAvailability(id, payload);
        res.status(201).json(avStub);
    }
    catch(error){
        res.status(500).json({message: 'Error adding availability', error: error.message});
    }
});

