document.addEventListener("DOMContentLoaded", ()=>{
    document.getElementById("email").onchange = function(){
        const email = document.getElementById("email").value; 
        const test = document.getElementById("email"); 
        console.log(test.parentElement.childNodes[3, 5]);
        if(!email == ""){
            document.getElementById("email-text").classList.add("filled");
            document.getElementById("email-line").classList.add("filled");
        }
        else if(email == ""){
            document.getElementById("email-text").classList.remove("filled");
            document.getElementById("email-line").classList.remove("filled");
        }
    }
}); 