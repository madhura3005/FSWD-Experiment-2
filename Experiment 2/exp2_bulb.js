let b1=document.querySelector("#btnon");
let b2=document.querySelector("#btnoff");
let cont=document.querySelector(".container");
b1.addEventListener("click",()=>
    {
        cont.style.backgroundColor="yellow";
    });
b2.addEventListener("click",
    ()=>{
        cont.style.backgroundColor="white"
    }
)