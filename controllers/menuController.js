const MenuItem = require('../models/MenuItem');

exports.getAllMenuItems = async (req, res) => {
  try {
    const filter = {};

    if (req.query.available !== undefined) {
      filter.available = req.query.available === 'true';
    }

    if (req.query.minPrice || req.query.maxPrice) {
      filter.price = {};
      if (req.query.minPrice) {
        filter.price.$gte = parseFloat(req.query.minPrice);
      }
      if (req.query.maxPrice) {
        filter.price.$lte = parseFloat(req.query.maxPrice);
      }
    }

    const items = await MenuItem.find(filter);
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.createMenuItem = async (req, res) => {
  const item = new MenuItem(req.body);
  await item.save();
  res.status(201).json(item);
};

// Update a menu item by ID
exports.updateMenuItem = async (req, res) => {
  try {
    const updatedItem = await MenuItem.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedItem) return res.status(404).json({ message: 'Item not found' });
    res.json(updatedItem);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a menu item by ID
exports.deleteMenuItem = async (req, res) => {
  try {
    const deletedItem = await MenuItem.findByIdAndDelete(req.params.id);
    if (!deletedItem) return res.status(404).json({ message: 'Item not found' });
    res.json({ message: 'Item deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update menu item by name
exports.updateMenuItemByName = async (req, res) => {
  try {
    const updatedItem = await MenuItem.findOneAndUpdate(
      { name: req.params.name },
      req.body,
      { new: true }
    );
    if (!updatedItem) return res.status(404).json({ message: 'Item not found' });
    res.json(updatedItem);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete menu item by name
exports.deleteMenuItemByName = async (req, res) => {
  try {
    const deletedItem = await MenuItem.findOneAndDelete({ name: req.params.name });
    if (!deletedItem) return res.status(404).json({ message: 'Item not found' });
    res.json({ message: 'Item deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

