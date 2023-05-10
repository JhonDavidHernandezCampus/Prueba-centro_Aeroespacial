import data from '../api/reclutas.js';
let wsEli ={

    async eliminar(e){
        return data.deleteRecluta(e);
    }
}

self.addEventListener("message",async (e)=>{
    console.log(e.data.module);
    postMessage(await wsEli[`${e.data.module}`](e.data.data))
})