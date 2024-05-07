var express = require('express');
var app = express();

/*Como trabajamos con socket, es recomendable usar el módulo HTTP
para pasarle la app a express y manejar bien http*/
var server = require('http').Server(app);
/* aquí estará toda la funcionalidad de los sockets
   se requiere la librería socket.io
   se pasa la variable Server que tiene la app express y HTTP */
var io = require('socket.io')(server);

app.get('/',function(req, res){
    res.status(200).send("Hola Mundo");
});

server.listen(3002, function(){
    console.log("El servidor está corriendo en http://localhost:3003");
});