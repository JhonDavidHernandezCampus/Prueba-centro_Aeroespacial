import reclutas from '../api/reclutas.js';

let ws = {
    async consulta(){
        let puerto = 3000;
        try{
            const data = await fetch(`http://localhost:${puerto}/reclutas`);
            const datap = await data.json();
            return datap;
        }catch(error){
            console.log(error);
        }
    },
    async mostarTodo(){
        let data = [];
        let databla = "";
        let fecha = new Date().toISOString().split("T")[0];
        data = await this.consulta();
        data.forEach(e => {
            databla += `
            <tr>
                <th>${e.nombre}</th>
                <th>${e.edad}</th>
                <th>${e.numero}</th>
                <th>${e.email}</th>
                <th>${e.direccion}</th>
                <th>${e.f_nacimiento}</th>
                <th>${e.num_id}</th>
                <th>${fecha}</th>
                <th>${e.id}</th>
            </tr>
            `;
        });
        return databla;
    }
    
}
self.addEventListener("message", async(e)=>{
    console.log(e.data.module);
    postMessage(await ws[`${e.data.module}`]())
})