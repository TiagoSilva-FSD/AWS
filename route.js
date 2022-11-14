const express = require('express');
const cors = require("cors");
const router = express.Router();
router.use(cors());


// Banco dados
const database = [];


// Rota raiz 
router.get('/', (req, res) => {
    res.send({
                "Module": "NodeJs, Express, AWS Amazon",
                "Author": "Tiago Silva",
                "Version": "0.8.0",
            });
})


// Cadastrar
router.post('/creat', (req, res) => {
    let secret = "djcccfRdyB34";
    let key = req.body.auth;
    if (key === secret && database.length < 20) {
        let dados = req.body;
        dados['auth'] = '';
        database.push(dados);
        res.sendStatus(201);
    } else {
        res.sendStatus(403);
    }
})


// Listar
router.post('/doc', (req, res) => {
    let secret = "djcccfRdyB34";
    let key = req.body.auth;
    if (key === secret) {
        let data = JSON.stringify(database);
        res.status(200).send(data);
    } else {
        res.status(403);
    }
})


// Deletar
router.post('/del', (req, res) => {
    let secret = "djcccfRdyB34";
    let key = req.body.auth;
    if (key === secret) {
        while(database.length > 0){
            database.pop();
        }
        res.sendStatus(204);
    } else {
        res.sendStatus(403);
    }
})


module.exports = router
