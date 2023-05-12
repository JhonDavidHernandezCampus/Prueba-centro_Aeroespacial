import datos from '../api/reclutas.js';
let fecha = new Date();
let f_hadosmeses = new Date(fecha.setMonth(fecha.getMonth()-2));

let wsConsu = {
    async pintarConsulta(e){
        let data = await datos.consultas(e);
        let meses = data.filter(e =>{
            return (new Date(e.f_ingreso) < f_hadosmeses)
        }) 
        return this.pintarenTabla(meses);
    },

    async teams(e){
        let data = await datos.consultas(e);

        return this.pintarenTabla(data);
    },
    async modulosEspe(e){
        console.log("modulos");
        let data = await datos.consultas(e);
        
        return this.pintarenTabla(data);
    },
    async menEdad(e){
        let men = [];
        console.log("menores de edad");
        let data = await datos.consultas(e);
        for (let i=0;i<data.length;i++) {
            (Number(data[i].edad)<18)?men.push(data[i]):"";
        }
        return this.pintarenTabla(men);
    },
    async moduReclutas(e){
        console.log("modulos estudiados por un determinad recluta");
        let data = await datos.consultas(e);

        return this.pintarenTabla(data);
    },
    async reclutaPerdieron(e){
        console.log("reclutas que reprobaron un  determinado modulo");
        let data = await datos.consultas(e);

        return this.pintarenTabla(data);
    },
    pintarenTabla(data){
        let ret="";
        data.forEach(e => {
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