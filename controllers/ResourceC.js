const Resource = require('../models/Resources.js');


const createResource = async (payload) => {
  try {
    const newResource = new Resource(payload);
    const savedResource = await newResource.save();
    return savedResource;
  } catch (error) {
    throw new Error(`Error creating resource: ${error.message}`);
  }
};


const getAllResources = async () => {
  try {
    const resources = await Resource.find();
    return resources;
  } catch (error) {
    throw new Error(`Error fetching resources: ${error.message}`);
  }
};


const getResourceById = async (id) => {
  try {
    const resource = await Resource.findById(id);
    if (!resource) {
      throw new Error('Resource not found');
    }
    return resource;
  } catch (error) {
    throw new Error(`Error fetching resource: ${error.message}`);
  }
};


const modifyResource = async (id, payload) => {
  try {
    const resource = await Resource.findById(id);
    if (!resource) {
      throw new Error('Resource not found');
    }

    Object.keys(payload).forEach((key) => {
      resource[key] = payload[key];
    });

    const updatedResource = await resource.save();
    return updatedResource;
  } catch (error) {
    throw new Error(`Error updating resource: ${error.message}`);
  }
};


const deleteResourceById = async (id) => {
  try {
    const result = await Resource.findByIdAndDelete(id);
    if (!result) {
      throw new Error('Resource not found');
    }
    return result;
  } catch (error) {
    throw new Error(`Error deleting resource: ${error.message}`);
  }
};

module.exports = {
  createResource,
  getAllResources,
  getResourceById,
  modifyResource,
  deleteResourceById
};