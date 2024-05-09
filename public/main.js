var socket = io.connect('http://localhost:3002', {'forceNew': true});

/*El cliente manejara datos mediante mensajes, esto se llamara eventos y se mostraran por la consola en el navergador */
socket.on('messages', function(data){
    console.log(data);
    render(data);
});

function render(data){
    var html = `<div>
                    <strong>${data.autor}</strong>:
                    <em>${data.texto}</em>
                    </div>`;

                document.getElementById('messages').innerHTML = html;
}

function addMessage(e){
    var payload = {
        autor: document.getElementById(username).value,
        texto: document.getElementById(texto).value

    };
    socket.emit('new-message', payload);
    return false;
}