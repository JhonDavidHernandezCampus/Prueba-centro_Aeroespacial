
const op = document.querySelector("select");
const datos = document.querySelector(".datos");
const tabla = document.querySelector(".tabla");
const consultas = document.querySelector(".consultas");

op.addEventListener("change",(e)=>{
    consultas.style.display="block";
    tabla.style.display="block";
    const ws = new Worker('./storage/wsConsu.js', {type:"module"})
    ws.postMessage({module:url()[1] ,data:url()[0]})
    
    ws.addEventListener("message", (e)=>{
        datos.innerHTML= e.data;

    })

})



function url(){
    switch(Number(op.value)){
        case 1:
            return [`http://localhost:3000/reclutas/`,"pintarConsulta"]; 
        case 2:
            let teamsId = "1";
            
            return [`http://localhost:3000/reclutas?teansId=${teamsId}`,"teams"]; 
            
        case 3:
            return [`http://localhost:3000/reclutas/`,"modulosEspe"]; 
        case 4:
            return [`http://localhost:3000/reclutas/`,"menEdad"];
        case 5:
            return [`http://localhost:3000/reclutas/`,"moduReclutas"];
        case 6:
            return [`http://localhost:3000/reclutas/`,"reclutaPerdieron"];
    }
}