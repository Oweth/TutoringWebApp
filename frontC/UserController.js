//Only the Tutor's side has been done here

// Get Tutor by Id
const getUserByUserId = async (tutor) => {
    fetch(`/users/${tutor}`, {
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
    fetch(`/users/${id}`, {
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

document.getElementById("update").addEventListener('submit', event => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const cellnumber = document.getElementById('cellnumber').value;
    const email = document.getElementById('email').value;
    const qualification = document.getElementById('qualification').value;
    const courses = document.getElementById('courses').value;
    const password = document.getElementById('password').value;
    // create the user object
    const userUpdates = {
        name: name,
        cellnumber: cellnumber,
        email: email,
        qualification: qualification,
        courses: courses,
        password: password
    };
    //GET USER ID
    updateUser(0, userUpdates);
    document.getElementById("update").reset();
});