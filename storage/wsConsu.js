import datos from '../api/reclutas.js';
let fecha = new Date();
let f_hadosmeses = new Date(fecha.setMonth(fecha.getMonth()-2));

let wsConsu = {
    async pintarConsulta(e){
        let ret="";
        let data = await datos.consultas(e);

        let meses = data.filter(e =>{
            return (new Date(e.f_ingreso) < f_hadosmeses)
        }) 
        let pintar = ((meses.length ==0)?data:meses)
        pintar.forEach(e => {
            ret += `
            <tr>
                <th>${e.nombre}</th>
                <th>${e.edad}</th>
                <th>${e.numero}</th>
                <th>${e.email}</th>
                <th>${e.direccion}</th>
                <th>${e.f_nacimiento}</th>
                <th>${e.num_id}</th>
                <th>${e.f_ingreso}</th>
                <th>${e.id}</th>
            </tr>`;
        }); 
        return ret;
    }
}

self.addEventListener("message",async (e)=>{
    postMessage(await wsConsu[`${e.data.module}`](e.data.data))
})