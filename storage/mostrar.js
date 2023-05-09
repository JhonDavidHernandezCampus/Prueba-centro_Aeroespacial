

let divActu = document.querySelector(".actualizado")
const crear = document.querySelector(".crear");
const form = document.querySelector(".form");


crear.addEventListener("click", (e)=>{
    e.preventDefault()
    form.style.display = "block"
})

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

const op = document.querySelector("select");

op.addEventListener("change",(e)=>{
    console.log(op.value);
})