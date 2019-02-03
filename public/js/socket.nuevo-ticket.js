

//Comando para establecer la conexion
var socket = io();
var label = $('#lblNuevoTicket');

socket.on('connect',()=>{
  console.log( 'Conectado al serviror')
});
socket.on('disconnect',()=>{
  console.log( 'Desconectado del servidor');
})
socket.on('estadoActual',(data)=>{
  label.text(data.actual);
})
$('button').on('click',function(){

  //emit para enviar informacion
   socket.emit('siguienteTicket',null,function(siguienteTicket){
     label.text(siguienteTicket);
   });
})
