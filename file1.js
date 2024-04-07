
let navbar = document.querySelector(".nav-bar");
let skipa = document.querySelector(".skipa");

skipa.addEventListener("click" , () => {

    console.log(" the skip button was clicked ");
   navbar.style.visibility = "hidden";
   

});
let skipDIV2 = document.querySelector(".skipDIV2");

let headingAdd = document.querySelector(".headingAdd");

skipDIV2.addEventListener("click", ()=> {

 
    headingAdd.style.visibility = "hidden";
    
} );


let onlineparent = document.querySelector(".anc1");
let offlineparent = document.querySelector(".anc2");

let online = document.querySelector("online");

onlineparent.addEventListener("click" ,()=> {


    online.style.css.("border", "2px solid black");
})