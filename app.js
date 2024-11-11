let canvas = document.getElementById("canvas");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight
let increase = document.getElementById("increase");
let decrease = document.getElementById("decrease");
let clear = document.getElementById("clear");
let size = document.getElementById("size");
let color = document.getElementById("color");

const ctx = canvas.getContext('2d');

let sizeElement = 5
let isPressed = false;
// color.value = "black";

let x;
let y;

color.value = "#000"
let colorElement = color.value;
canvas.addEventListener('mousedown', (e) => {
    isPressed = true
    x = e.offsetX;
    y = e.offsetY;
});
canvas.addEventListener('touchstart',()=>{
    isPressed = true
    x = e.offsetX;
    y = e.offsetY;
})
canvas.addEventListener('touchend',()=>{
    isPressed = false
    x = undefined
    y = undefined
})
canvas.addEventListener('mouseup', (e) => {
    isPressed = false
    x = undefined
    y = undefined
})
canvas.addEventListener('touchmove',()=>{
    if (isPressed) {
        const x2 = e.offsetX
        const y2 = e.offsetY
        drowCircle(x2, y2);
        drawLine(x, y, x2, y2)
        x = x2;
        y = y2;
    }
})
canvas.addEventListener('mousemove', (e) => {
    if (isPressed) {
        const x2 = e.offsetX
        const y2 = e.offsetY
        drowCircle(x2, y2);
        drawLine(x, y, x2, y2)
        x = x2;
        y = y2;
    }
})
function drowCircle(x, y) {    
    ctx.beginPath();
    ctx.arc(x, y, sizeElement, 0, Math.PI*2)
    ctx.fillStyle = colorElement;
    ctx.fill()
}
function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = colorElement
    ctx.lineWidth = sizeElement * 2
    ctx.stroke()
}
//icreament and decreament in size 
function updatesize() {
    size.innerHTML = sizeElement
}
//increasing
increase.addEventListener('click', () => {
    sizeElement += 5
    if (sizeElement > 30) {
        sizeElement = 30
    }
    updatesize()
})
//decreasing
decrease.addEventListener('click', () => {
    sizeElement -= 5
    if (sizeElement < 5) {
        sizeElement = 1
    }
    updatesize()
})
color.addEventListener('change', (e) => colorElement = e.target.value);
clear.addEventListener('click', () => ctx.clearRect(0, 0, canvas.width, canvas.height));
