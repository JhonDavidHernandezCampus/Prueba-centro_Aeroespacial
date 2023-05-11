import datos from '../api/reclutas.js';
let fecha = new Date();
let f_hadosmeses = new Date(fecha.setDate(fecha.getDate()-60));


let wsConsu = {
    async pintarConsulta(e){
        let data = await datos.consultas(e);
        
        console.log(data);
        console.log(f_hadosmeses);
        console.log();
        
        data.forEach(e => {
            if (new Date(e.f_ingreso) < f_hadosmeses ) {
                
            }


            console.log(new Date(e.f_ingreso), "fecha del recluta  "+ e.nombre);
            console.log(f_hadosmeses,"fecha hace dos meses");

        });
    }
}

self.addEventListener("message",async (e)=>{
    postMessage(await wsConsu[`${e.data.module}`](e.data.data))
})