function start(){
	initField(document.getElementById("firstField"),"first");
	initField(document.getElementById("secondField"),"second");
}

function initField(prField,prSyffix){

	//Добавление заголовка для колонок а, б, в, ...
	var div = document.createElement("div");
	div.id = prSyffix+"_header";
	div.className = "fieldLine";
	prField.appendChild(div);

	for (var i = 0; i < 10; i++) {
		var cubeDiv = document.createElement("div");
			cubeDiv.className = "headerCube";
			cubeDiv.textContent = i+1;
			cubeDiv.style = "left: "+(i*30)+"px";

		div.appendChild(cubeDiv);

	}

	for (var i = 0; i < 10; i++) {

		var div = document.createElement("div");
			div.id = prSyffix+"_div_"+i;
			div.className = "fieldLine";

		var cubeDiv = document.createElement("div");
			cubeDiv.className = "headerCube";
			cubeDiv.textContent = i+1;
			cubeDiv.style = "top: "+(i*30)+"px";

		div.appendChild(cubeDiv);

		prField.appendChild(div);

		//Добавление заголвка для строк 1, 2, 3, ...

		for (var j = 0; j < 10; j++) {

			var img = document.createElement("img");			
				img.id = prSyffix+"_img_"+i+"_"+j;
				img.src = "light_cube.png";
				img.width = 30;
				img.height = 30;
				img.className = "cube";
				img.onclick = onImgClick;

			prField.children[prSyffix+'_div_'+i].appendChild(img);
		}
	}
}

function onImgClick() {
	if(this.src!=null){
		if(this.src.indexOf("light_cube.png")!=-1){
			this.src = "dark_cube.png";
		} else {
			this.src = "light_cube.png";
		}
	}
}