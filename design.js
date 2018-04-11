// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
const canvas = document.getElementById('pixel_canvas');
let theHeight = $("#input_height"),
theWidth = $("#input_width"),
color = $("#colorPicker");

function makeGrid() {
		canvas.innerHTML = '';
		let height = theHeight.val();
		let width = theWidth.val();

		function addEvent(td) {
			event.preventDefault();
				td.addEventListener('click', function() {
						td.style.backgroundColor = color.val();
						// td.classList.toggle('blanktd');
						});
						td.addEventListener('dblclick', function(){
							td.style.backgroundColor = "#dbdbdb";
						})


		}

		for (let i = 0; i < height; i++) {
				let tr = canvas.insertRow(i);
				for (let j = 0; j < width; j++) {
						let td = tr.insertCell(j);
						td.addEventListener('click', addEvent(td));
				}
		}
}

function openNav() {
		document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
		document.getElementById("mySidenav").style.width = "0";
}
