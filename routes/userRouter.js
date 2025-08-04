const express = require('express');
const { registerUser, loginUser, currentUser } = require('../controller/userController');
const validateTokenHandle = require('../middleware/validateTokenHandle');

const router = express.Router();

router.post('/register', registerUser);

router.post('/login', loginUser);

router.get('/current', validateTokenHandle ,currentUser);

module.exports = router;