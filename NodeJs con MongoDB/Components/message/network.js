const express = require('express');
const response = require('../../network/response');
const controller = require('./controller')
const router = express.Router();


router.get('/', (req, res) => {
    console.log(req.headers);
    res.header({
        "custom-header": "Nuestro valor personalizado",
    });
    // res.send('Lista de alumnos y grupos');
    response.sucess(req, res, 'Lista de mensajes');
});

router.post('/', (req, res) => {
    
    controller.addMessage(req.body.user, req.body.message);


    if(req.query.error == "ok"){
        response.error(req, res, 'Error inesperado', 500, 'Es solo una simulación de los errores');    
    } else {
        response.sucess(req, res, 'Creado correctamente', 201);    
    }
    // res.status(201).send({error: '', body: 'Creado correctamentes'});
});


module.exports = router;