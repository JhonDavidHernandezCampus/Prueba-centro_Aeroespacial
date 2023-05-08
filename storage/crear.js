
import datos from '../api/reclutas.js';


const form = document.querySelector("form");
const crear = document.querySelector(".crear");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    console.log(new FormData(e.target));
    let data = Object.fromEntries(new FormData(e.target));
    
    datos.postRecluta(data);
    alert("Se agrego el recluta "+ data.nombre);
})

