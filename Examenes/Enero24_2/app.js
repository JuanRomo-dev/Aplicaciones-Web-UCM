const express = require('express');
const path = require('path');

const app = express();
const bodyParser = require('body-parser');
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

const indexRouter = require('./routes/index');
app.use('/', indexRouter);

const crudUsua = require('./routes/crudUsuarios');
app.use('/contactos', crudUsua);

app.listen(port, () => {
    console.log(`Server on port ${port}`);
});