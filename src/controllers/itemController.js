const Item = require('../models/itemModel');
const { faker } = require('@faker-js/faker');

// @desc    Create a new item
// @route   POST /api/items
// @access  Public
const createItem = async (req, res) => {
    try {
        const { name, quantity, price } = req.body;
        if (!name || !price) {
            return res.status(400).json({ message: 'Name and price are required' });
        }
        const item = new Item({ name, quantity, price });
        const savedItem = await item.save();
        res.status(201).json(savedItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get all items
// @route   GET /api/items
// @access  Public
const getItems = async (req, res) => {
    try {
        const items = await Item.find();
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Update an item
// @route   PUT /api/items/:id
// @access  Public
const updateItem = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, quantity, price } = req.body;
        const item = await Item.findById(id);
        if (!item) {
            return res.status(404).json({ message: 'Item not found' });
        }
        item.name = name || item.name;
        item.quantity = quantity || item.quantity;
        item.price = price || item.price;
        const updatedItem = await item.save();
        res.status(200).json(updatedItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Delete an item
// @route   DELETE /api/items/:id
// @access  Public
const deleteItem = async (req, res) => {
    try {
        const { id } = req.params;
        const item = await Item.findById(id);
        if (!item) {
            return res.status(404).json({ message: 'Item not found' });
        }
        await item.remove();
        res.status(200).json({ message: 'Item removed' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Function to populate the database with 50 mock items
const populateItems = async (req, res) => {
    try {
        const items = [];

        for (let i = 0; i < 50; i++) {
            items.push({
                name: faker.commerce.productName(),
                quantity: faker.datatype.number({ min: 1, max: 100 }),
                price: faker.commerce.price(1, 1000, 2),
            });
        }

        await Item.insertMany(items);

        res.status(201).json({ message: '50 mock items added to the database' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createItem,
    getItems,
    updateItem,
    deleteItem,
    populateItems
};
