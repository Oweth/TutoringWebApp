const express = require('express');
const {
  createResource,
  getAllResources,
  getResourceById,
  modifyResource,
  deleteResourceById,
} = require('../controllers/ResourceC.js');

const router = express.Router();

const resourcesStub = [
  {
    "title": "title",
    "description": "description",
    "fileUrl": "fileUrl",
    "UploadedBy": "Upl...",
  },
  {
    "title": "title1",
    "description": "description1",
    "fileUrl": "fileUrl1",
    "UploadedBy": "Upl...1",
  }
]


router.get('/resource/', async (req, res) => {
  try {
    //const resources = await getAllResources();
    const resources = resourcesStub;
    res.status(200).json(resources); 
  } catch (error) {
    res.status(500).json({ message: 'Error fetching resources', error: error.message });
  }
});


router.get('/resource/:id', async (req, res) => {
  const { id } = req.params;
  try {
    //const resource = await getResourceById(id);
    const resource = resourcesStub[id]; 
    if (resource) {
      res.status(200).json(resource); 
    } else {
      res.status(404).json({ message: 'Resource not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching resource', error: error.message });
  }
});


router.post('/resource/', async (req, res) => {
  const newResource = req.body;
  try {
    //const resource = await createResource(newResource);
    console.log( newResource);
    res.status(201).json(resource); 
  } catch (error) {
    res.status(500).json({ message: 'Error creating resource', error: error.message });
  }
});

router.put('/resource/:id', async (req, res) => {
  const { id } = req.params;
  const payload = req.body;
  try {
    //const resource = await modifyResource(id, payload);
    const resource = resourcesStub[id];
    if (resource) {
      res.status(200).json(resource); 
    } else {
      res.status(404).json({ message: 'Resource not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating resource', error: error.message });
  }
});


router.delete('/resource/:id', async (req, res) => {
  const { id } = req.params;
  try {
    //const result = await deleteResourceById(id);
    const result = resourcesStub[id];
    if (result) {
      res.status(200).json({ message: 'Resource deleted successfully' }); 
    } else {
      res.status(404).json({ message: 'Resource not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting resource', error: error.message });
  }
});

module.exports = router;
