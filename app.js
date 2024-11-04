let canvas = document.getElementById("canvas");
let increase = document.getElementById("increase");
let decrease = document.getElementById("decrease");
let clear = document.getElementById("clear");
let size = document.getElementById("size");
let color = document.getElementById("color");
// const ctx= canvas.getContext('2d')
let sizeElement = 0
color.value = "black";
let colorElement = color.value;
let x;
let y;
let isPressed = false;
color.value = "black"

canvas.addEventListener('mousedown', (e) => {
    isPressed = true
    x = e.offsetX;
    y = e.offsetY
});
canvas.addEventListener('mouseup', (e) => {
    isPressed = false
    x = undefined
    y = undefined
})
//icreament and decreament in size 
function updatesize(){
    size.innerHTML=sizeElement
    }
    //increasing
increase.addEventListener('click', () => {
    sizeElement += 2
    if (sizeElement > 30) {
        sizeElement = 30
    }
    updatesize()
})
//decreasing
decrease.addEventListener('click',()=>{
    sizeElement -= 2
    if(sizeElement<1){
        sizeElement=1
    }
    updatesize()
})

