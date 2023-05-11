
const op = document.querySelector("select");

op.addEventListener("change",(e)=>{
    const ws = new Worker('./storage/wsConsu.js', {type:"module"})
    ws.postMessage({module:"pintarConsulta" ,data:url()})
    

})

function url(){
    switch(Number(op.value)){
        case 1:
            return `http://localhost:3000/reclutas/`; 
        case 2:
            return `http://localhost:3000/reclutas/`; 
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