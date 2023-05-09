import datos from '../api/reclutas.js';

let wsAc ={
    actualizar(e){
        console.log("actualizar en worker");
        console.log(e);
    }
}

self.addEventListener("message", (e)=>{
    postMessage(wsAc[`${e.data.module}`](e.data.data))
})