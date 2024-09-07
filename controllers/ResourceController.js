//Done for the tutor only
//Add a Resource
const addResource = async (resource) => {
    fetch('../resource/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(resource)
    })
        .then(response => response.json())
        .catch(error => {
            console.error('Error:', error);
        });
}

//Delete a Resource
const deleteResource = async (id) => {
    fetch(`../resource/${id}`, {
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

//Get all Resources
const getAllResources = async () => {
    fetch(`../resource/`, {
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

module.exports = {
    addResource,
    deleteResource,
    getAllResources
};