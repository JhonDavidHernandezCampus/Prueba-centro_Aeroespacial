import datos from '../api/reclutas.js';

let wsAc ={
    async actualizar(e){
        let data =await  datos.getRecluta((Number(e.name))?Number(e.name):e.name);
        console.log(data);
    }
}

self.addEventListener("message", async (e)=>{
    postMessage(await wsAc[`${e.data.module}`](e.data.data))
})