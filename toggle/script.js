

let btn = document.querySelector("button");
const text = document.querySelector(".text");
/* version boolean
let isVisible = false;


btn.addEventListener("click", function(){
    isVisible = !isVisible;
    isVisible ? text.classList.add("visible") : text.classList.remove("visible");
});
*/

/* version toggle*/
btn.addEventListener("click", () =>{
    text.classList.toggle("visible")
});
