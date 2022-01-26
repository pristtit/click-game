const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');

document.addEventListener('keydown', function(event) {
	jump();
})

function jump() {
	if(dino.classList != 'jump') {
		dino.classList.add('jump');
		setTimeout(function() {
			dino.classList.remove('jump');
		}, 400)
	}
}

 let live = setInterval (function () {
 	let dinoY = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
 	let cactusX = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));

	if(cactusX > 20 && cactusX < 120 && dinoY > 450) {
		alert('Game Over');
	}
},10)