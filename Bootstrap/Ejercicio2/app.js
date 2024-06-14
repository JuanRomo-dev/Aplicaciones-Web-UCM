"use strict";

const path = require("path");
const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users')

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`El servidor está corriendo en http://localhost:${port}`);
  });