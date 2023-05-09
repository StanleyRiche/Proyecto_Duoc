document.addEventListener("DOMContentLoaded",function(){

    eventListeners();
    
});


function eventListeners(){
    const mobileMenu =document.querySelector(".mobile-menu");

    mobileMenu.addEventListener("click" ,navegacionResponsive);

}

function navegacionResponsive(){
        const navegacion= document.querySelector(".navegacion");

        if(navegacion.classList.contains("mostrar")){
            navegacion.classList.remove("mostrar");
        }else{
            navegacion.classList.add("mostrar");
        }
        // O navegacion.classList.toggle("mostrar");
}


// Funcion de carrusel

if(document.querySelector('#container-slider')){
    setInterval('fntExecuteSlide("next")',5000);
 }
 //------------------------------ LIST SLIDER -------------------------
 if(document.querySelector('.listslider')){
    let link = document.querySelectorAll(".listslider li a");
    link.forEach(function(link) {
       link.addEventListener('click', function(e){
          e.preventDefault();
          let item = this.getAttribute('itlist');
          let arrItem = item.split("_");
          fntExecuteSlide(arrItem[1]);
          return false;
       });
     });
 }
 
 function fntExecuteSlide(side){
     let parentTarget = document.getElementById('slider');
     let elements = parentTarget.getElementsByTagName('li');
     let curElement, nextElement;
 
     for(var i=0; i<elements.length;i++){
 
         if(elements[i].style.opacity==1){
             curElement = i;
             break;
         }
     }
     if(side == 'prev' || side == 'next'){
 
         if(side=="prev"){
             nextElement = (curElement == 0)?elements.length -1:curElement -1;
         }else{
             nextElement = (curElement == elements.length -1)?0:curElement +1;
         }
     }else{
         nextElement = side;
         side = (curElement > nextElement)?'prev':'next';
 
     }
     //RESALTA LOS PUNTOS
     let elementSel = document.getElementsByClassName("listslider")[0].getElementsByTagName("a");
     elementSel[curElement].classList.remove("item-select-slid");
     elementSel[nextElement].classList.add("item-select-slid");
     elements[curElement].style.opacity=0;
     elements[curElement].style.zIndex =0;
     elements[nextElement].style.opacity=1;
     elements[nextElement].style.zIndex =1;
 }



 const form = document.getElementById('form');
 const nombre = document.getElementById('nombre');
 const telefono = document.getElementById('telefono');
 const email = document.getElementById('email');
 const mensaje = document.getElementById('mensaje');

 form.addEventListener('submit', e =>{
    e.preventDefault();

    validateInputs();
 });

 const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
 }

 const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
 };

 const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
 }


 const validateInputs = () => {
    const nameValue = nombre.value.trim();
    const telefonoValue = telefono.value.trim();
    const emailValue = email.value.trim();
    const mensajeValue = mensaje.value.trim();

    if (nameValue === ''){
        setError(nombre, 'Ingrese su nombre');
    } else {
        setSuccess(nombre);
    }

    if(telefonoValue === '') {
        setError(telefono, 'Ingrese su número');
    } else if (telefonoValue.length < 9 ) {
        setError(telefono, 'Su número debe contener al menos 9 dígitos')
    } else {
        setSuccess(telefono);
    }

    if(emailValue === '') {
        setError(email, 'Ingrese un email');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Ingrese un email válido');
    } else {
        setSuccess(email);
    }

    if (mensajeValue === ''){
        setError(mensaje, 'Ingrese su mensaje');
    } else if(mensajeValue.length < 25){
        setError(mensaje, 'Su mensaje debe contener al menos 25 caracteres')
    } else{    
        setSuccess(mensaje);
    }

 };

  
