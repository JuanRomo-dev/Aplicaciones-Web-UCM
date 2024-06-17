const express = require('express');
const router = express.Router();

let usuarios = [];

function validarEmail(req, res, next) {
    const { email } = req.body;
    if (!email || !email.endsWith('@ucm.es')) {
        return res.status(400).json({ msg: 'El correo electrónico debe ser de dominio ucm.es' });
    }
    next();
}

router.get('/', (req, res) => {
    res.render('registro', {title: 'Ejercicio 3'});
})

router.post('/', validarEmail, (req, res) => {
    const { nombre, apellidos, email, contraseña, foto } = req.body;

    if (!nombre || !apellidos || !email || !contraseña) {
        res.status(400).json({msg: 'Faltan datos'});
    }

    const nuevoUsuario = { 
        id: usuarios.length + 1,
        nombre: nombre,
        apellidos: apellidos,
        email: email,
        contraseña: contraseña,
        foto: foto || 'noUser.png'
    }

    console.log('sdffsfs', nuevoUsuario);

    usuarios.push(nuevoUsuario);

    res.status(200).json({msg: 'Usuario registrado satisfactoriamente'})
});

module.exports = router;