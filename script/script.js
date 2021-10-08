"use strict"

let userVal = document.querySelector(".userVal");
let userValText = document.querySelector(".userVal");

const callFun=()=>{
    let getVal = document.querySelector("textarea").value;
    let convertStr = getVal.trim().split(" ");

    let fetchText = convertStr.filter((val)=>{
        return val.length>7;
    })
    
    getval(fetchText,getVal);
}

function getval(e,textVal){
        e.forEach(val => {
            textVal = textVal.replace(val,`<span class="badge bg-secondary">${val}</span>`); 
        });

     userVal.innerHTML=textVal;
}







