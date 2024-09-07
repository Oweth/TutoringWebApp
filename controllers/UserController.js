//Only the Tutor's side has been done here

// Get Tutor by Id
const getUserByUserId = async (tutor) => {
    fetch(`../users/${tutor}`, {
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

//Update user details
const updateUser = async (id, changes) => {
    fetch(`../users/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(changes)
    })
        .then(response => response.json())
        .catch(error => {
            console.error('Error:', error);
        });
}

module.exports = {
    getUserByUserId,
    updateUser
}