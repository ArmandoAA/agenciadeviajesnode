//const express = require('express');
import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';



//console.log(process.env.DATABASE);

const app = express();

//Conectar la base de datos
db.authenticate()
    .then(()=> console.log('Base de datos conectada'))
    .catch(e => console.log(e));

//DEfinir puerto
const port = process.env.PORT || 3000;


//Habilitar pug
app.set('view engine', 'pug');

//Obtener el años ACtual
app.use( (req, res, next) => {
    //res.locals.unaVariable = 'Una Nueva Variable';
    const year = new Date();

    res.locals.actualYear = year.getFullYear();

   // console.log(res.locals);
    //console.log(res);
    return next();

});

//Agregar body parse para leer los datos del formulario

app.use(express.urlencoded({extended: true}));

app.locals.year = new Date().getFullYear();
app.locals.nombreSitio = "Agencia De Viajes";

//Definir la carpeta public
app.use(express.static('public'));

//Agregar router
app.use('/', router);


app.listen(port, ()=>{
    console.log(`El servidor esta funcionando en el puerto ${port}`);
})