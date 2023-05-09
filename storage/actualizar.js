import datos from '../api/reclutas.js';

let form = document.querySelector(".formActu")
let divActu = document.querySelector(".actualizado")
let actualizar = document.querySelector(".actualizar");



actualizar.addEventListener("click", (e)=>{
    e.preventDefault();
    divActu.style.display = "block";
    form.addEventListener("submit", (e)=>{
        //e.preventDefault();
        let data = Object.fromEntries(new FormData(e.target))
        let ws = new Worker("./storage/wsAc.js", {type:"module"});
        ws.postMessage({module:"actualizar", data:data})
        

    })


})