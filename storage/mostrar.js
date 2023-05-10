

let divActu = document.querySelector(".actualizado")
const form = document.querySelector(".form");




/* todos los datos  */

const mostrar = document.querySelector(".mostrar");


mostrar.addEventListener("click",(e)=>{
    divActu.style.display = "none";
    form.style.display = "none"
    const tabla = document.querySelector(".tabla");
    tabla.style.display = "block"
    console.log(tabla);
    e.preventDefault();

    const ws = new Worker("./storage/ws.js",{type:"module"});
    ws.postMessage({module: "mostarTodo"})
    const tabladatos = document.querySelector(".datos");
    ws.addEventListener("message",(e)=>{
        tabladatos.innerHTML= e.data;
        ws.terminate();
    })
})

