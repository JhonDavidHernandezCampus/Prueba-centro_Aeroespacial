
import datos from '../api/reclutas.js';


const form = document.querySelector("form");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    
    datos.postRecluta(data);
    alert("Se agrego el recluta "+ data.nombre);
})

