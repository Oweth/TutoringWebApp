const express = require('express');

//initialise express
const app = express();

//Post feedback
app.post('/submit', (request, context) => {
    const feedback = request.body;
    //Put feedback in database
    context.json({message: 'Feedback submitted successfully', feedback: 'string'});
});

//Get a specific tutor's rating
app.get('/rating/:id', (request, context) => {
    const id = request.params.id;
    //Get rating form database
    const rating = {"rating": 4};
    context.json(rating);
});

//Get feedback by id
app.get('/:tutorId', (request, context) => {
    const tutorId = request.params.tutorId;
    //Get feedback from database
    const feedback =[
        {
            "feedbackId": "string",
            "rating": "integer",
            "comments": "string",
            "timestamp": "datetime"
        },
        {
            "feedbackId": "string",
            "rating": "integer",
            "comments": "string",
            "timestamp": "datetime"
        }

    ];
    context.json(feedback);
});


//Get feedback of a session
app.get('/session/:session', (request, context) => {
    const session = request.params.session;
    //Get feedback from database
    const feedback =[
        {
            "feedbackId": "string",
            "rating": "integer",
            "comments": "string",
            "timestamp": "datetime"
        },
        {
            "feedbackId": "string",
            "rating": "integer",
            "comments": "string",
            "timestamp": "datetime"
        }

    ];
    context.json(feedback);
});

//Update specific feedback
app.put('/:feedbackId', (request, context) => {
    feedbackId = request.params.feedbackId;
    feedback = request.body;
    //Change feedback in the database
    context.json({message: 'Feedback updated successfully'});
});

//Delete specific feedback
app.delete('/:feedbackId', (request, context) => {
    feedbackId = request.params.feedbackId;
    //Delete feedback in the database
    context.json({message: 'Feedback deleted successfully'});
});

//Listen on port
app.listen(3001);