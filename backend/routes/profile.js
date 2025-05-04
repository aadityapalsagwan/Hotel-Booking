const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const { getUserProfile } = require('../controllers/profileController'); // Make sure this is correct

router.get('/', authMiddleware, getUserProfile); // All must be functions

module.exports = router;
