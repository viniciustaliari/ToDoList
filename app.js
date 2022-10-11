const express = require('express');
const app = express();
const path = require('path');

//view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Configurando archivos estaticos
app.use(express.static(path.join(__dirname, 'public/css')));

//Configuracion para guardar los datos
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Conectamos el enrutador
app.use('/', require('./router'));

app.listen(8080, ()=>{
    console.log('Aplicacion renderizando en el puerto 8080');
})

