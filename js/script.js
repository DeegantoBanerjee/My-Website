function disappear(){
	var x = document.getElementById("contact-form");
	var y = document.getElementById("quote-form");
	y.style.display = "none";
	x.style.display = "none";
}
function show_menu(){ 
	document.body.scrollTop = 0;
	var a = document.getElementById("logo-text-1");
	var c = document.getElementById("logo-text-2");
	var x = document.getElementById("menu");
	var y = document.getElementById("particles-js");
	var z = document.getElementById("top");
	z.classList.toggle("change");
	if (x.style.display == "block") {
    x.style.display = "none";
	y.style.transform ="scale(1) translateY(0px)";
	z.style.overflowY = "auto";
	a.style.color="#5a5aa0";
	c.style.color="#5a5aa0";
    } 
    else {
    x.style.display = "block";
	y.style.transform ="scale(.9) translateY(200px)";
	z.style.overflowY = "hidden";	
	a.style.color="#ffffff";
	c.style.color="#ffffff";
    }   	
}