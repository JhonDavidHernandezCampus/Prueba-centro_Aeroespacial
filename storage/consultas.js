
const op = document.querySelector("select");
const datos = document.querySelector(".datos");
const tabla = document.querySelector(".tabla");
op.addEventListener("change",(e)=>{
    tabla.style.display="block";
    const ws = new Worker('./storage/wsConsu.js', {type:"module"})
    ws.postMessage({module:"pintarConsulta" ,data:url()})
    
    ws.addEventListener("message", (e)=>{
        datos.innerHTML= e.data;

    })

})

function url(){
    switch(Number(op.value)){
        case 1:
            return `http://localhost:3000/reclutas/`; 
        case 2:
            let valor = document.querySelector("#valor");
            valor.style.display= "block"
            console.log(valor);
            return `http://localhost:3000/reclutas?nombre=eddy`; 
        case 3:
            return `http://localhost:3000/reclutas/`; 
        case 4:
            return `http://localhost:3000/reclutas/`;
        case 5:
            return `http://localhost:3000/reclutas/`;
        case 6:
            return `http://localhost:3000/reclutas/`;
    }
}