const express = require('express');
const router = express.Router();
const usuarios = require('../data/usuariosData');

router.get('/', (req, res) => {
    res.render('usuarios', { title: 'Ejercicio 3', usuarios: usuarios });
});

module.exports = router;