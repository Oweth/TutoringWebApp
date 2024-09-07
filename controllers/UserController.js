//Only the Tutor's side has been done here

// Get Tutor by Id
export const getUserByUserId = async (tutor) => {
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

//Update user details
export const updateUser = async (id, changes) => {
    fetch(`/${id}`, {
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