const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');

let startX, startY;
let isDrawing = false;
let shape='rectangle'

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', drawShape);
canvas.addEventListener('mouseup', endDrawing);

function startDrawing(e) {
    startX = e.offsetX;
    startY = e.offsetY;
    isDrawing = true;
}


function drawShape(e) {
    if (!isDrawing) return;

   
    const currentX = e.offsetX;
    const currentY = e.offsetY;

   
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    switch(shape){
        case 'rectangle':
            drawRectangle(startX, startY, currentX - startX, currentY - startY);
            break;
        case 'circle':
            const radius = Math.sqrt(Math.pow(currentX - startX, 2) + Math.pow(currentY - startY, 2))
            drawCircle(startX,startY,radius);
            break;
        case 'line':
            drawLine(startX,startY,currentX,currentY);
            break;
        default:
            break;

    }
   
}


function endDrawing() {
    isDrawing = false;
}


function drawRectangle(x, y, width, height) {
    ctx.beginPath();
    ctx.rect(x, y, width, height);
    ctx.stroke();
}


function drawCircle(x, y, radius) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();
   
}


function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

function setShape(newShape) {
    shape = newShape;
}

document.getElementById('rectangleBtn').addEventListener('click', () => setShape('rectangle'));
document.getElementById('circleBtn').addEventListener('click', () => setShape('circle'));
document.getElementById('lineBtn').addEventListener('click', () => setShape('line'));