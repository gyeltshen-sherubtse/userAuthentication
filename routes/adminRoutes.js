const express = require('express');
const router = express.Router();
const { isAdmin } = require('../middleware/authMiddleware');
const adminController = require('../controllers/adminController');

router.get('/dashboard', isAdmin, adminController.getDashboard);

module.exports = router;
