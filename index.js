const express = require('express');
const app = express();

app.get('/', function(req, res) {
  res.send('<h1>Olá, professor!</h1>');
});

app.get('/rota2', function(req, res) {
  res.send('<h1>Sejá bem-vindo</h1>');
});

app.get('/rota3', function(req, res) {
  res.send('<h1>Ao trabalho do George</h1>');
});

app.listen(3000, function() {
  console.log('Servidor iniciado na porta 3000!!!');
});
