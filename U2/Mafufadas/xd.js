let xd=["a","b","c"];
let raiz=document.getElementById("si");
document.addEventListener("keydown", function(e){
    if (e.code==="ArrowLeft") {
        for (let index = 0; index < xd.length; index++) {
            raiz.innerHTML+=`<h1 class='lienzo'>${xd[index]}</h1>`;
        }
        
    }
});