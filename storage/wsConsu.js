import datos from '../api/reclutas.js';
let fecha = new Date('')

let wsConsu = {
    async pintarConsulta(e){
        let data = await datos.consultas(e);
        
        console.log(data);
        console.log(fecha);
        data.forEach(e => {

        });
    }
}

self.addEventListener("message",async (e)=>{
    postMessage(await wsConsu[`${e.data.module}`](e.data.data))
})