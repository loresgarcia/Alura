/*Código com FOR */

function tocaSom(idElementoAudio){

    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador< listaDeTeclas.length; contador++) {
    
    const tecla=listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
    console.log(idAudio); 

    tecla.onclick = function (){
        tocaSom(idAudio);
    }
    
}



function tocaSom(idElementoAudio){

    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');
let  contador = 0;

while (contador< listaDeTeclas.length) {

    const tecla=listaDeTeclas[contador];
  
    const instrumento = tecla.classList[1];
   
    const idAudio = `#som_${instrumento}`;
 
    console.log(idAudio); 

    tecla.onclick = function (){
        tocaSom(idAudio);
    }
    contador = contador +1;

    
}
*/

/*
document.querySelector('.tecla_pom').onclick = tocaSomPom; 
*/
