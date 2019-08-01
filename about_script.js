function show_menu(){ 
	document.body.scrollTop = 0;
	var x = document.getElementById("menu");
	var y = document.getElementById("particles-js");
	var z = document.getElementById("top");
	z.classList.toggle("change");
	if (x.style.display == "block") {
    x.style.display = "none";
	y.style.transform ="scale(1) translateY(0px)";
	z.style.overflowY = "auto";
    } 
    else {
    x.style.display = "block";
	y.style.transform ="scale(.9) translateY(200px)";
	z.style.overflowY = "hidden";	
    }   	
}