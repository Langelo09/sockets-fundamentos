var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

// On, son para escuchar información
socket.on('disconnect', function() {
    console.log('Se perdio conexión con el servidor');
});

// Emit, son para enviar información
socket.emit('enviarMensaje', {
    usuario: 'Angel Luna',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('Respuesta server: ', resp);
});

//Escuchar información
socket.on('enviarMensaje', function(mensaje) {

    console.log('Servidor: ', mensaje);

});