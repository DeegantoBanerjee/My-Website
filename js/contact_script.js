
function show_menu(){ 
	var x = document.getElementById("menu");
    var y = document.getElementById("particles-js");
    var b = document.getElementById("top");
    b.classList.toggle("change");
	if (x.style.display == "block") {
    x.style.display = "none";
	y.style.transform ="scale(1) translateY(0px)";
    } 
    else {
    x.style.display = "block";
	y.style.transform ="scale(.9) translateY(200px)";
    }   	
}