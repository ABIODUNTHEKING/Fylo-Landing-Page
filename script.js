let firstBtn = document.querySelector(".button1");
let secondBtn = document.querySelector(".button2");
let firstError = document.querySelector(".firstError");
let secondError = document.querySelector(".secondError");
let firstInput = document.querySelector(".input1");
let secondInput = document.querySelector(".input2");

let pattern =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
 
firstBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    if(firstInput.value.match(pattern)){
        firstInput.style.border = "1px solid green"
        firstError.style.display = "none"
        console.log("DONE")
    }
    else{
        firstError.innerHTML = "Please check your email"
        firstInput.style.border = "1px solid red"
        
    }
});

secondBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    if(secondInput.value.match(pattern)){
        secondInput.style.border = "1px solid green"
        secondError.style.display = "none"
        console.log("DONE")
    }
    else{
        secondError.innerHTML = "Please check your email"
        secondInput.style.border = "1px solid red"    
    }
});

