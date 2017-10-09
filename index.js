
var focusedPanel;

function OnInit(){
	OnClickPannel("Home");
}

function HideAllPanel(){
	var panels = document.getElementsByClassName("panel");
	for(var i =0; i < panels.length; i++){
		panels[i].style.display = "none";
	}
}

function OnClickPannel(option){
	 window.scrollTo(0, 0);


	HideAllPanel();

	focusedPanel = option;

	if(option == "cat"){

		document.getElementById("forCats").style.display = "block";

	}else if(option == "dog"){
		document.getElementById("forDogs").style.display = "block";
	}
	else if(option == "Home"){
		document.getElementById("landing").style.display = "block";
	}
	else if(option == "Details"){
		document.getElementById("details").style.display = "block";

	}
	else if (option =="store"){
		document.getElementById("store").style.display = "block";
	}
}

