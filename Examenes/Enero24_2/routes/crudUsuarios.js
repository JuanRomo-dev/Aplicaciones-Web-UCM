const express = require('express');
const router = express.Router();

const usuarios = {
    "usuarios_externos": {
        "usuario": [
            {
                "id": "Felipe",
                "nombre": "Felipe Lotas",
                "telefonos": {
                    "casa": "952124567"
                }
            },
            {
                "id": "Alberto",
                "nombre": "Alberto Cadiscos",
                "telefonos": {
                    "casa": "912382722",
                    "movil": "678234567"
                }
            },
            {
                "id": "Borja",
                "nombre": "Borja Món de York",
                "telefonos": {
                    "movil": "678234567"
                }
            },
            {
                "id": "Aitor",
                "nombre": "Aitor Tilla",
                "telefonos": {
                    "casa": "912382722",
                    "movil": "678234567",
                    "oficina": "927121212"
            }
            },
            {
                "id": "Diego",
                "nombre": "Diego Norrea",
                "telefonos": {
                    "oficina": "927121213"
                }
            },
            {
                "id": "Jesús",
                "nombre": "Jesús Piros de España",
                "telefonos": {
                    "casa": "912382722",
                    "movil": "678234567"
                }
            },
            {
                "id": "Rubén",
                "nombre": "Rubén Tosidad",
                "telefonos": {
                    "casa": "952124567"
                }
            }
        ]
    }
};

// Obtener todos objetos -> Agenda en JSON
router.get('/', (req, res) => {
    res.json(usuarios);
});

// Obtener un objeto -> A partir de un índice
router.get('/:index', (req, res) => {
    const index = req.params.index;
    const usuario = usuarios.usuarios_externos.usuario[index];

    if (usuario) {
        res.json(usuario);
    } else {
        res.status(404).send('Usuario no encontrado');
    }
});

// Añadir un objeto -> En JSON
router.post('/', (req, res) => {
    const usuario = req.body;
    usuarios.usuarios_externos.usuario.push(usuario);

    res.status(200).json(usuario);
});

// Eliminar un objeto -> Usar cuerpo petición
router.delete('/', (req, res) => {
    const { id } = req.body;
    const index = usuarios.usuarios_externos.usuario.findIndex(u => u.id === id);

    if (index > -1) {
        const usuarioEliminado = usuarios.usuarios_externos.usuario.splice(index, 1);
        res.status(200).json(usuarioEliminado);
    }
    else {
        res.status(404).send('Usuario no encontrado');
    }
});

// Actualizar un objeto
router.put('/:index', (req, res) => {
    const index = req.params.index;
    const usuarioNuevo = req.body;

    if (usuarios.usuarios_externos.usuario[index]) {
        usuarios.usuarios_externos.usuario[index] = usuarioNuevo;
        res.status(200).json(usuarioNuevo);
    } else {
        res.status(404).send('Usuario no encontrado');
    }
});

module.exports = router;