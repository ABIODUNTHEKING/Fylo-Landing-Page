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
        secondError.style.display = "block"
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
        secondError.style.display = "block"
        secondInput.style.border = "1px solid red"    
    }
});


//SCROLL EFFECT
 let navBar = document.querySelector(".navbar")
 let secondSection = document.querySelector(".activities")
 let header = document.querySelector('.header')
 
 

 window.addEventListener("scroll", ()=>{
    if(window.scrollY > navBar.offsetHeight){
        header.classList.add('active')
    }
    else{
        header.classList.remove('active')
    }
 })

