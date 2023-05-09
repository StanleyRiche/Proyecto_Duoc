var email = document.getElementById('email');
var password = document.getElementById('password');
error.style.color='red';
var form = document.getElementById('formulario');
form.addEventListener('submit', function(evt){

evt.preventDefault();    
var mensajeError =[];

if(email.value === null ||email.value === '' ){
    mensajeError.push('Debe ingresa un Correo');
}
if(password.value === null ||password.value === '' ){
    mensajeError.push('Debe ingresa tu passord');
}
error.innerHTML = mensajeError.join(', ')    
})