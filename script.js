let firstBtn = document.querySelector(".button1");
let secondBtn = document.querySelector(".button2");
let firstError = document.querySelector(".firstError");
let secondError = document.querySelector(".secondError");
let firstInput = document.querySelector(".input1");
let secondInput = document.querySelector(".input2");
let firstValue = document.querySelector(".input1").value;
let secondValue = document.querySelector(".input2").value;
let pattern =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
 
firstBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    if(firstValue.match(pattern)){
        firstInput.style.border = "1px solid green"
        console.log("DONE")
    }
    else{
        firstError.innerHTML = "Please check your email"
        firstInput.style.border = "1px solid red"
        
    }
});

secondBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    if(secondValue.match(pattern)){
        secondInput.style.border = "1px solid green"
        console.log("DONE")
    }
    else{
        secondError.innerHTML = "Please check your email"
        secondInput.style.border = "1px solid red"
        
    }
});

