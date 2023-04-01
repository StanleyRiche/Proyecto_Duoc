document.addEventListener("DOMContentLoaded",function(){

    eventListeners();

    eventListenersuser();
 
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







function eventListenersuser(){
    const mobileMenu =document.querySelector(".usuario");
    
    mobileMenu.addEventListener("click" ,navegacionResponsiveuser);
    
}
    
function navegacionResponsiveuser(){
    const navegacionusuario= document.querySelector(".navegacionusuario");

    if(navegacionusuario.classList.contains("mostrar-usuario")){
        navegacionusuario.classList.remove("mostrar-usuario");
    }else{
        navegacionusuario.classList.add("mostrar-usuario");
    }
    // O navegacion.classList.toggle("mostrar");
}