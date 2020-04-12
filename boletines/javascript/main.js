//obtener elementos
let links = document.querySelectorAll(".close");
//recorrer
links.forEach(function(link){
  //agregar evento click
  link.addEventListener("click",function(ev){
    ev.preventDefault();
    let content =document.querySelector('.contenido'); //se obtiene, solo un elemento
    //quitarle la animacion que ya tiene
    content.classList.remove("fadeInDown"); //se le quita
    content.classList.remove("animated");
    //Agregarle clase para la salida de animacion fadeOutUp
    content.classList.add("fadeOutUp"); //se le quita
    content.classList.add("animated");
    //tiempo de la animacion
    setTimeout(function(){ //despues de cierto tiempo una vez
      location.href ="/";
    },500)
    //setInterval //despues de cierto tiempo contsantemente

    return false;
  });
});
