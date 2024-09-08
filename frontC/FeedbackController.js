//ALL EVENT LISTENERS MUST BE PLACED IN SCRIPT AND IMPORT FUNCTIONS
//Add the feedback
const addFeedback = async (feedback) => {
    fetch('/feedback/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(feedback)
    })
        .then(response => response.json())
        .catch(error => {
            console.error('Error:', error);
        });
}

//When feedback form is submitted
// feedbackForm.addEventListener('submit', event => {
//     event.preventDefault();
//     const sessionId = document.getElementById('sessionId').value;
//     const rating = document.getElementById('rating').value;
//     const comment = document.getElementById('comment').value;
//     // create the feedback object
//     addFeedback(feedback);
//     feedbackForm.reset();
// });

//Update the feedback
const updateFeedback = async (feedback) => {
    const session = feedback.session
    fetch(`/feedback/${session}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(feedback)
    })
        .then(response => response.json())
        .catch(error => {
            console.error('Error:', error);
        });
}

//When update feedback form is submitted
// updateFeedbackForm.addEventListener('submit', event => {
//     event.preventDefault();
//     const sessionId = document.getElementById('sessionId').value;
//     const rating = document.getElementById('rating').value;
//     const comment = document.getElementById('comment').value;
//     // create the feedback object
//     updateFeedback(feedback);
//     feedbackForm.reset();
// });


//When delete button is pressed
const deleteFeedback = async (id) => {
    fetch(`/feedback/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .catch(error => {
            console.error('Error:', error);
        });
}

// Get Feedback by session
const getFeedbackBySession = async (session) => {
    fetch(`/feedback/session/${session}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(response => response.json())
        .catch(error => {
            console.error('Error:', error);
        });
}

document.getElementById("viewFeedback").addEventListener('click', event => {
    event.preventDefault();
    const sessionId = document.getElementById("sesisonId").value;
    getAllFeedbackByTutor(sessionId);
});

// Get All Feedback of a tutor
const getAllFeedbackByTutor = async (tutor) => {
    fetch(`/feedback/${tutor}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(response => response.json())
        .catch(error => {
            console.error('Error:', error);
        });
}

document.getElementById("reviews").addEventListener('click', event => {
    event.preventDefault();
    //GET USER ID
    getAllFeedbackByTutor(0);
});