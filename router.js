const express = require('express');
const { threadId } = require('./bdd/bddConfig');
const router = express.Router();

//llamamos el archivo de la base de datos
const con = require('./bdd/bddConfig');

router.get('/', (req, res)=>{
    //Definimos como la renderizacion de las tasks guardadas en la base de datos
    con.query('SELECT * FROM notes', (err, results)=>{
        if(err) throw err;
        res.render('index', {resultados: results});
    });
});

//Llamamos el metodo save del CRUD
const crud = require('./crud');

//Definimos el metodo POST
router.post('/save', crud.save);

//Definimos el metodo para borrar
router.get('/borrar/:id', (req, res)=>{
    const id = req.params.id;
    con.query('DELETE FROM notes WHERE id = ?', [id], (err, result)=>{
        if(err) throw err;
        res.redirect('/');
    });
})

module.exports = router;