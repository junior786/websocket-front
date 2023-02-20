const web = new WebSocket('ws://localhost:8080/chat');

const message = document.querySelector('#message');
const botao = document.querySelector('#enviar');
const ul = document.querySelector('#lista-messages');

botao.addEventListener('click', () => {
    console.log(message.value);
    web.send(message.value);
})

web.onmessage = function(event) {
    console.log('aaaa');
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(event?.data));
    ul.appendChild(li);
}

web.onmessage();