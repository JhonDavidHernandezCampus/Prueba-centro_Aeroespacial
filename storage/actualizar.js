import datos from '../api/reclutas.js';

const dlete = document.querySelector(".eliminado");

let crear = document.querySelector(".form");
let form = document.querySelector(".formActu")
let divActu = document.querySelector(".actualizado")
let actualizar = document.querySelector(".actualizar");
const tabla = document.querySelector(".tabla");


actualizar.addEventListener("click", (e)=>{
    crear.style.display = "none";
    dlete.style.display="none";
    tabla.style.display = "none"
    e.preventDefault();
    divActu.style.display = "block";
    form.addEventListener("submit", (e)=>{
        e.preventDefault();
        let data = Object.fromEntries(new FormData(e.target))
        let ws = new Worker("./storage/wsAc.js", {type:"module"});
        ws.postMessage({module:"actualizar", data:data})

    })
})