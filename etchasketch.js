
//thanks to adeneo on stack overflow
function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

function etchasketch(){

let container = document.getElementById("container");

container.innerHTML = "";
//this gets rid of previous divs

let boxes = prompt("Gimme a number of boxes yo");

for(i = 0; i < (boxes*boxes); i++){
	let div = document.createElement('div');
	container.appendChild(div);
	div.style.backgroundColor = "gray";
	div.setAttribute("class", "grid-item"); 
}

container.style.gridTemplateColumns = "repeat(" + boxes + ", auto)";


 document.body.addEventListener("mouseover", event => {
    if (event.target.className == "grid-item"){
    	let color = random_rgba();
    	event.target.style.backgroundColor = color ;

    }
});

}

