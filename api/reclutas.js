let headers = new Headers({"Content-Type": "application/json"});
let puerto = 3000;

const postRecluta = async(arg)=>{
    arg.id = (arg.id) ? arg.id : Date.now();
    let config = {
        method: "POST", 
        headers: headers, 
        body:JSON.stringify(arg)
    };
    return await ( await fetch(`http://localhost:${puerto}/reclutas`, config)).json();
}

const getRecluta = async(e)=>{
    console.log(e);
    let datos = {
        "nombre": "j",
        "edad": "1",
        "numero": "1",
        "email": "la",
        "direccion": "c",
        "f_nacimiento": "20",
        "num_id": "1",
        "id": 16
    }
    let config = {
        method: "PUT",
        headers:headers,
        body:JSON.stringify(datos)
    };
    return await (await fetch(`http://localhost:3000/reclutas?${(isNaN(e))?`${e}`:`${e}`}`, config)).json();
}

export default{
    postRecluta,
    getRecluta
}
