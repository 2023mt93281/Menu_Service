const express = require('express');
const router = express.Router();
const {
  getAllMenuItems,
  createMenuItem,
  updateMenuItem,
  deleteMenuItem,
  updateMenuItemByName,
  deleteMenuItemByName
} = require('../controllers/menuController');

router.get('/', getAllMenuItems);
router.post('/', createMenuItem);
router.put('/:id', updateMenuItem);
router.delete('/:id', deleteMenuItem);
router.put('/by-name/:name', updateMenuItemByName);
router.delete('/by-name/:name', deleteMenuItemByName);

module.exports = router;

