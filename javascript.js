//declaring canvas/button to access later
const canvas = document.getElementById('drawHere');
const ctx = canvas.getContext('2d');
const resetBtn = document.getElementById('clearButton');
let coord = { x: 0, y: 0};

//detecting mouse down, mouse up, resize
canvas.addEventListener('mousedown', start);
canvas.addEventListener('mouseup', stop);
window.addEventListener('resize', resize);

//function to size canvas inside of the etch a sketch
function resize() {
	ctx.canvas.width = (window.innerWidth * .52);
	ctx.canvas.height = (window.innerHeight * .5) ;
}
resize();

//invokes mousemove
function start(event) {
	canvas.addEventListener('mousemove', draw);
	reposition(event);
}
//keeps track of mouse pos
function reposition(event) {
	coord.x = event.clientX - canvas.offsetLeft;
  	coord.y = event.clientY - canvas.offsetTop;
}

//stops when mouse is lifted
function stop() {
	canvas.removeEventListener('mousemove', draw);
}
//actual draw function
function draw(event) {
	ctx.beginPath();
	ctx.lineWidth = 1;
	ctx.lineCap = 'round';
	ctx.strokeStyle = 'black';
	ctx.moveTo(coord.x, coord.y);
	reposition(event);
	ctx.lineTo(coord.x, coord.y);
	ctx.stroke();
}
//function to clear the canvas on button press.
function clearCanvas() {
	const context = canvas.getContext('2d');
	context.clearRect(0, 0, canvas.width, canvas.height);
}
//invoking the clear canvas function.
resetBtn.addEventListener('click', function() {
	clearCanvas();
});