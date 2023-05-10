
const op = document.querySelector("select");

op.addEventListener("change",(e)=>{
    console.log(op.value);
    console.log(e);
    console.log(url());
    

})

function url(){
    switch(Number(op.value)){
        case 1:
            return `http://localhost:3000/reclutas/1`; 
        case 2:
            return `http://localhost:3000/reclutas/2`; 
        case 3:
            return `http://localhost:3000/reclutas/3`; 
        case 4:
            return `http://localhost:3000/reclutas/4`;
        case 5:
            return `http://localhost:3000/reclutas/5`;
        case 6:
            return `http://localhost:3000/reclutas/6`;
    }
}