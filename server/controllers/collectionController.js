const Collection = require('../models/collectionModel');
const mongoose = require('mongoose');

//GET all collections
const getCollections = async (req, res) => {
  const collections = await Collection.find({}).sort({ createdAt: -1 });

  res.status(200).json(collections);
};

//GET single collection
const getCollection = async (req, res) => {
  const { id } = req.params;

  //check if id is valid mongoose type
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such collection' });
  }
  const collection = await Collection.findById(id);

  if (!collection) {
    return res.status(404).json({ error: 'No collection found' });
  }

  res.status(200).json(collection);
};

//CREATE new collection
const createCollection = async (req, res) => {
  const { title, quantity, price } = req.body;

  //add doc to DB
  try {
    const collection = await Collection.create({ title, quantity, price });
    res.status(200).json(collection);
  } catch (error) {
    res.status(400).json({ err: error.message });
  }
};

//DELETE collection
const deleteCollection = async (req, res) => {
  const { id } = req.params;

  //check if id is valid mongoose type
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such collection' });
  }

  const collection = await Collection.findOneAndDelete({ _id: id });

  if (!collection) {
    return res.status(400).json({ error: 'No collection found' });
  }

  res.status(200).json(collection);
};

//UPDATE collection
const updateCollection = async (req, res) => {
  const { id } = req.params;

  //check if id is valid mongoose type
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such collection' });
  }

  const collection = await Collection.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!collection) {
    return res.status(400).json({ error: 'No collection found' });
  }

  res.status(200).json(collection);
};

module.exports = {
  getCollections,
  getCollection,
  createCollection,
  deleteCollection,
  updateCollection,
};
