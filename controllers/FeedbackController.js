//ALL EVENT LISTENERS MUST BE PLACED IN SCRIPT AND IMPORT FUNCTIONS
//Add the feedback
export const addFeedback = async (feedback) => {
    fetch('/submit', {
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
feedbackForm.addEventListener('submit', event => {
    event.preventDefault();
    const sessionId = document.getElementById('sessionId').value;
    const rating = document.getElementById('rating').value;
    const comment = document.getElementById('comment').value;
    // create the feedback object
    addFeedback(feedback);
    feedbackForm.reset();
});

//Update the feedback
export const updateFeedback = async (feedback) => {
    const session = feedback.session
    fetch(`/${session}`, {
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
updateFeedbackForm.addEventListener('submit', event => {
    event.preventDefault();
    const sessionId = document.getElementById('sessionId').value;
    const rating = document.getElementById('rating').value;
    const comment = document.getElementById('comment').value;
    // create the feedback object
    updateFeedbackFeedback(feedback);
    feedbackForm.reset();
});


//When delete button is pressed
export const deleteFeedback = async (id) => {
    fetch(`/${id}`, {
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
export const getFeedbackBySession = async (session) => {
    fetch(`/session/${session}`, {
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

// Get All Feedback of a tutor
export const getAllFeedbackByTutor = async (tutor) => {
    fetch(`/${tutor}`, {
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