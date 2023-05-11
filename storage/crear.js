
import datos from '../api/reclutas.js';

const divForm = document.querySelector(".form");
const crear = document.querySelector(".crear");
const form = document.querySelector("form");
const actualizar = document.querySelector(".actualizado");

crear.addEventListener("click", (e)=>{
    divForm.style.display = "block";
    actualizar.style.display = "none";
    e.preventDefault()
    form.addEventListener("submit", (e)=>{
        e.preventDefault();

        let fecha = new Date().toISOString().split("T")[0];
        let data = Object.fromEntries(new FormData(e.target));
        data.f_ingreso = fecha;
        datos.postRecluta(data);

        alert("Se agrego el recluta "+ data.nombre);
})
})


