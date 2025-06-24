const express = require('express');
const router = express.Router();

// Aqui você importa a classe
const UserController = require('../controllers/UserController');

// E usa o método estático corretamente
router.post('/register', UserController.register);

// Define a rota para login
router.post('/login', UserController.login);
module.exports = router;
