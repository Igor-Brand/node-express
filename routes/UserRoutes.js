const express = require('express');
const router = express.Router();

// Aqui você importa a classe
const UserController = require('../controllers/UserController');

// E usa o método estático corretamente
router.post('/register', UserController.register);

module.exports = router;
