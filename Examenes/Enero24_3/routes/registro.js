const express = require('express');
const router = express.Router();
const multer = require('multer');
const usuarios = require('../data/usuariosData');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads/') 
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname) 
    }
});

const upload = multer({ storage: storage });

router.get('/', (req, res) => {
    res.render('registro', { title: 'Ejercicio 3' });
});

router.post('/', upload.single('pic'), (req, res) => {
    const { nombre, apellidos, email, pass } = req.body;
    const pic = req.file ? req.file.filename : 'noUser.png';

    if (!email.endsWith('@ucm.es')) {
        return res.status(400).send('El correo debe ser de dominio @ucm.es');
    }

    usuarios.push({ nombre, apellidos, email, pass, pic });

    res.redirect('/usuarios');
});

module.exports = router;
