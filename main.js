const canvas = document.querySelector('#canvas')

const ctx = canvas.getContext('2d');

// Set width and height of drawing area
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Set style of 'brush'
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;

function draw(event) {
  if (!isDrawing) return;
  ctx.beginPath();
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(event.offsetX, event.offsetY);
  ctx.stroke();
  [lastX, lastY] = [event.lastX, event.lastY];
  hue++
}

canvas.addEventListener('mousedown', (event) => {
  isDrawing = true;
  [lastX, lastY] = [event.lastX, event.lastY];
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);