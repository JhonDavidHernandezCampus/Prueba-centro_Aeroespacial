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

const getRecluta = async(e,datos)=>{
    let config = {
        method: "PUT",
        headers:headers,
        body:JSON.stringify(datos)
    };
    return await (await fetch(`http://localhost:3000/reclutas/${e}`, config)).json();
}

const deleteRecluta = async (e)=>{
    let config ={
        method:"DELETE",
        headers:headers,
    };
    return await(await fetch(`http://localhost:3000/reclutas/${e.id}`,config)).json();
}

const consultas= async(e)=>{
    console.log(e);
    let config = {
        method: "GET",
    };
    return await (await fetch(`${e}`,config)).json();
}

export default{
    postRecluta,
    getRecluta,
    deleteRecluta,
    consultas
}
