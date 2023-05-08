
const crear = document.querySelector(".crear");
const form = document.querySelector(".form");


crear.addEventListener("click", (e)=>{
    e.preventDefault()
    form.style.display = "block"
    console.log(form);
})
console.log(form);

/* todos los datos  */

const mostrar = document.querySelector(".mostrar");


mostrar.addEventListener("click",(e)=>{
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