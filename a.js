let A = document.querySelectorAll(".a1 p");
console.log(A);
let B=document.querySelector(".a2");
if(window.localStorage.getItem("color")){
    B.style.backgroundColor = localStorage.getItem("color");
    A.forEach(function(element){
        element.classList.remove("active");
    })
    document.querySelector(`[data-color="${localStorage.getItem("color")}"]`).classList.add("active");

}
A.forEach(element => {
    element.addEventListener("click",function(){
        A.forEach(function(element){
            element.classList.remove("active");
        })
        element.classList.add("active");
        window.localStorage.setItem("color",element.dataset.color);
        B.style.backgroundColor = element.dataset.color;
    })
});
