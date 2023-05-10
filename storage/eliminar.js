
const create = document.querySelector(".form");
const show = document.querySelector(".tabla");
const update = document.querySelector(".actualizado");
const dlete = document.querySelector(".eliminado");

/* boton eliminar */
const eliminarbtn = document.querySelector(".eliminar");

eliminarbtn.addEventListener("click" , (e)=>{
    e.preventDefault();
    create.style.display = "none";
    show.style.display = "none";
    update.style.display = "none";
    dlete.style.display = "block";

    const formEliminado = document.querySelector(".formEliminado");
    formEliminado.addEventListener("submit" , (e)=>{
        e.preventDefault();
        let data = Object.fromEntries(new FormData(e.target));
        let ws = new Worker('./storage/wsEli.js', {type: "module"});
        ws.postMessage({module:"eliminar", data:data})
    })
    


})