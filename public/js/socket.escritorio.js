//Comando para establecer la conexion
var socket = io();
var label = $('small');

socket.on('connect',()=>{
  console.log( 'Conectado al serviror')
});
socket.on('disconnect',()=>{
  console.log( 'Desconectado del servidor');
})

var searchParams = new URLSearchParams(window.location.search);
if(!searchParams.has('escritorio')){
  window.location = 'index.html';
  throw new Error('El escritorio es necesario');
}
var escritorio = searchParams.get('escritorio')
console.log(escritorio);
$('h1').text('Escritorio '+ escritorio);

$('button').on('click',function(){
  socket.emit('atenderTicket',{escritorio:escritorio},function(resp){
    if(resp==='No hay tickets'){
      alert('No hay tickets');
      label.text(resp);
    }
    label.text('Ticket ' +resp.numero);
    console.log(resp);
  });
});
