const getAvailabilityByUserId = async (tutor) => {
    fetch(`/availability/${tutor}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
    .catch(error => {
        console.error('Error:', error);
    });
}

const changeUserAvailability = async (id, changes) => {
    fetch(`/availability/${id}`, {
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