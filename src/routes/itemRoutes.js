const express = require('express');
const { createItem, getItems, updateItem, deleteItem, populateItems  } = require('../controllers/itemController');

const router = express.Router();


router.post('/', createItem);
router.get('/', getItems);
router.put('/:id', updateItem);
router.delete('/:id', deleteItem);

router.post('/populate', populateItems);

module.exports = router;
