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

const getRecluta = async()=>{
    console.log("se ejecuta abtualizar");
}

export default{
    postRecluta,
    getRecluta
}
