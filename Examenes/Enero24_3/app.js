const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const indexRouter = require('./routes/index');
const registroRouter = require('./routes/registro');
const usuarioRouter = require('./routes/usuarios');

app.use('/', indexRouter);
app.use('/registro', registroRouter);
app.use('/usuarios', usuarioRouter);

app.use(function(req, res, next) {
    res.status(404).render('error', { message: 'Página no encontrada' });
});

app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).render('error', { message: 'Error!' });
});

app.listen(port, () => console.log(`Server en http://localhost:${port}`));