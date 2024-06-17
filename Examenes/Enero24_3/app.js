const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const routeIndex = require('./routes/index');
app.use('/', routeIndex);

const routeRegistro = require('./routes/registro');
app.use('/registro', routeRegistro);

const routeUsuarios = require('./routes/usuarios');
app.use('/usuarios', routeUsuarios);

app.use((req, res, next) => {
    res.status(404).send('404 - Not Found');
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('500 - Server Error');
});

app.listen(port, () => {
    console.log(`Server on ${port}`);
})