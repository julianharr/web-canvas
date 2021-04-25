const canvas = document.querySelector('#draw');

const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

let isDrawing = false;
let lastX = 0;
let lastY = 0
let hue = 0;


function draw(event) {
  if (!isDrawing) return; // stop func from running when mouse is not clicked
  console.log(event);
  ctx.beginPath();
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
  // Start from   
  ctx.moveTo(lastX, lastY);
  // Go to
  ctx.lineTo(event.offsetX, event.offsetY);
  ctx.stroke();
  [lastX, lastY] = [event.offsetX, event.offsetY];
  hue++
}

// Listen for mousedown event and only draw when mouse is clicked
canvas.addEventListener('mousedown', (event) => {
  isDrawing = true;
  [lastX, lastY] = [event.offsetX, event.offsetY];
});
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);


// Change background on button press
const bgButton = document.querySelector('#bg-change');

bgButton.addEventListener('click', () => {
  if (canvas.style.backgroundColor === 'black') {
    canvas.style.backgroundColor = "white";
  } else {
    canvas.style.backgroundColor = 'black';
  }
})