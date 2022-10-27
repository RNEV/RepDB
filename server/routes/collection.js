const express = require('express');
const {
  getCollections,
  getCollection,
  createCollection,
  deleteCollection,
  updateCollection,
} = require('../controllers/collectionController');

const router = express.Router();

//GET all collections
router.get('/', getCollections);

//GET single collection
router.get('/:id', getCollection);

//POST new collection
router.post('/', createCollection);

//DELETE collection
router.delete('/:id', deleteCollection);

//UPDATE collection
router.patch('/:id', updateCollection);

module.exports = router;
