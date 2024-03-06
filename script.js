let katana=document.getElementById("katana")
let cursorX=0
let cursorY=0
document.onmousemove=(event)=>{
    cursorX=event.offsetX
    cursorY=event.offsetY
}
function animation() {
    // console.log(cursorX)
    katana.style.left=cursorX+"px"
    katana.style.top=cursorY+"px"
    window.requestAnimationFrame(animation);
}
window.requestAnimationFrame(animation);
document.onclick=()=>{
    katana.style.transform= "translate(-76%,5%) rotate(-90deg)"
    setTimeout(function(){
        katana.style.transform= "translate(-63%,-95%) rotate(30deg)"
    },150)
}
setInterval(() => {
    let fruit=document.createElement("img")
    fruit.src="apelsin.png"
    document.body.appendChild(fruit)
    fruit.classList.add("fruit")
    fruit.style.pointerEvents="none"
    fruit.style.bottom=0
    fruit.setAttribute("data-gravity",0.05)
}, 1000);
function move(){
    console.log(3);
    let fruits=document.getElementsByClassName("fruit")
    for(let f of fruits){
        let fY=parseInt(window.getComputedStyle(f, null).getPropertyValue("bottom"))+3
        f.style.bottom=fY+f.getAttribute("data-gravity")+"px"
        f.setAttribute("data-gravity",f.getAttribute("data-gravity")-0.01)

    }
    requestAnimationFrame(move);
}
  
requestAnimationFrame(move);