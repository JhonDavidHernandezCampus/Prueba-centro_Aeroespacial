import datos from '../api/reclutas.js';

let wsAc ={
    async actualizar(e){
        console.log(e);
        let datoNuevos = {
            "nombre": "eddy",
            "edad": "1",
            "numero": "1",
            "email": "la",
            "direccion": "c",
            "f_nacimiento": "20",
            "num_id": "1",
            "id": 16
        }
        let data =await  datos.getRecluta(((Number(e.name))?Number(e.name):e.name),datoNuevos);
        console.log(data);
    }
}

self.addEventListener("message", async (e)=>{
    e.preventDefault();
    postMessage(await wsAc[`${e.data.module}`](e.data.data))
})