//Done for the tutor only
//Add a Resource
const addResource = async (resource) => {
    fetch('/resource/', {
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

document.getElementById("uploadForm").addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('image', document.getElementById('resource-file').files[0]);

    const resource = {
        name: document.getElementById("resource-name").value,
        file: document.getElementById("resource-file").value,
    };
    addResource(resource);
});

//Delete a Resource
const deleteResource = async (id) => {
    fetch(`/resource/${id}`, {
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
// document.getElementById("deleteResource").addEventListener('click', event => {
//     event.preventDefault();
//     const id = document.getElementById("resourceID").value;
//     //GET USER ID
//     //Implement restrictions on cource resources
//     deleteResource(id);
// });

//Get all Resources
const getAllResources = async () => {
    fetch(`/resource/`, {
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

// document.getElementById("listResources").addEventListener('click', event => {
//     event.preventDefault();
//     //GET USER ID
//     //Implement restrictions on cource resources
//     getAllResources();
// });