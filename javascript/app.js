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




 

 function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var telefono = document.getElementById("telefono").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;
    if (nombre == "") {
        alert("Por favor, ingrese su nombre.");
        return false;
    }
    if (telefono == "") {
        alert("Por favor, ingrese su número de teléfono.");
        return false;
    }
    if (email == "") {
        alert("Por favor, ingrese su dirección de correo.");
        return false;
    }
    if (mensaje == "") {
        alert("Por favor, ingrese su mensaje.");
        return false;
    }
    return true;
}

  