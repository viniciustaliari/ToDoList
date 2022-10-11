//llamamos la conexion de base de datos
const con = require('./bdd/bddConfig');

//Creamos el metodo que va guardar los datos del formulario
exports.save = (req, res)=>{
    const title = req.body.title;
    const task = req.body.task;
    con.query('INSERT INTO notes SET ?', {title: title, note: task}, (err, result)=>{
        if(err) throw err;
        res.redirect('/');
    });
}