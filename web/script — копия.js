
/*--------------------- MODEL - BEGIN ---------------------------------------------------------*/
var model = {
	leftField: [[0,0,0,0,0,0,0,0,0,0],
						[0,0,0,0,0,0,0,0,0,0],
						[0,0,0,0,0,0,0,0,0,0],
						[0,0,0,0,0,0,0,0,0,0],
						[0,0,0,0,0,0,0,0,0,0],
						[0,0,0,0,0,0,0,0,0,0],
						[0,0,0,0,0,0,0,0,0,0],
						[0,0,0,0,0,0,0,0,0,0],
						[0,0,0,0,0,0,0,0,0,0],
						[0,0,0,0,0,0,0,0,0,0]],

	rightField: [[0,0,0,0,0,0,0,0,0,0],
						[0,0,0,0,0,0,0,0,0,0],
						[0,0,0,0,0,0,0,0,0,0],
						[0,0,0,0,0,0,0,0,0,0],
						[0,0,0,0,0,0,0,0,0,0],
						[0,0,0,0,0,0,0,0,0,0],
						[0,0,0,0,0,0,0,0,0,0],
						[0,0,0,0,0,0,0,0,0,0],
						[0,0,0,0,0,0,0,0,0,0],
						[0,0,0,0,0,0,0,0,0,0]]



};
/*--------------------- MODEL - END -----------------------------------------------------------*/

/*--------------------- VIEW - BEGIN ----------------------------------------------------------*/
/*--------------------- VIEW - END ------------------------------------------------------------*/
/*--------------------- CONTROLLER - BEGIN ----------------------------------------------------*/
/*--------------------- CONTROLLER - END ------------------------------------------------------*/


var game = {};
game.leftField  =  [[0,0,0,0,0,0,0,0,0,0],
					[0,0,0,0,0,0,0,0,0,0],
					[0,0,0,0,0,0,0,0,0,0],
					[0,0,0,0,0,0,0,0,0,0],
					[0,0,0,0,0,0,0,0,0,0],
					[0,0,0,0,0,0,0,0,0,0],
					[0,0,0,0,0,0,0,0,0,0],
					[0,0,0,0,0,0,0,0,0,0],
					[0,0,0,0,0,0,0,0,0,0],
					[0,0,0,0,0,0,0,0,0,0]];

game.rightField =  [[0,0,0,0,0,0,0,0,0,0],
					[0,0,0,0,0,0,0,0,0,0],
					[0,0,0,0,0,0,0,0,0,0],
					[0,0,0,0,0,0,0,0,0,0],
					[0,0,0,0,0,0,0,0,0,0],
					[0,0,0,0,0,0,0,0,0,0],
					[0,0,0,0,0,0,0,0,0,0],
					[0,0,0,0,0,0,0,0,0,0],
					[0,0,0,0,0,0,0,0,0,0],
					[0,0,0,0,0,0,0,0,0,0]];

/**
 * Заполняет поле кораблями в случайном порядке
 *
 * @param {array} prField поле для заполнения
 */
game.initField = function(prField){

	var bots = [4,3,3,2,2,2,1,1,1,1];

	for(var i = 0; i <= 9; i++){
		var x = Math.floor(Math.random() * 10);
		var y = Math.floor(Math.random() * 10);
		var r = Math.round(Math.random()); 

		while (!checkShip(x, y, r, bots[i], prField)){
			var x = Math.floor(Math.random() * 10);
			var y = Math.floor(Math.random() * 10);
			var r = Math.round(Math.random());
		}

		locateShip(x, y, r, bots[i], prField);
	}

	/**
 	* Проверяет, что корабль вмещается на поле и не пересекается с другими кораблями
 	*
 	* @param {number} x координата х корабля
 	* @param {number} y координата y корабля
 	* @param {number} r признак того, как расположен корабль - 0 горизонтально, 1 вертикально
 	* @param {number} length длина корабля
 	* @param {array} prField поле для заполнения
 	* @return {boolean} result признак того, что корабль можно разместить на поле
 	*/
	function checkShip(x, y, r, length, prField) {

		var result = true;

		//Проверим, что карабль влезает на поле
		if ((r == 0) && (x + length > 10)) return false;
		if ((r == 1) && (y + length > 10)) return false;

		//Проверим, что корабль не пересекается и не касается других кораблей
		var checkCube = [[{x: -1, y: 1},{x: 0, y: 1},{x: 1, y: 1}],
						 [{x: -1, y: 0},{x: 0, y: 0},{x: 1, y: 0}],
						 [{x: -1, y: -1},{x: 0, y: -1},{x: 1, y: -1}]];
		if (r == 0){
			for (var i = x; i < x + length; i++) {
				for (var checkX = 0; checkX < 3; checkX++) {
					for (var checkY = 0; checkY < 3; checkY++) {
						if ((i + checkCube[checkX][checkY].x < 0) || (i + checkCube[checkX][checkY].x >= 10)) continue;
						if ((y + checkCube[checkX][checkY].y < 0) || (y + checkCube[checkX][checkY].y >= 10)) continue;
						if (prField[i + checkCube[checkX][checkY].x][y + checkCube[checkX][checkY].y] == 1) return false;
					}
				}
			}
		} else {
			for (var i = y; i < y + length; i++){
				for (var checkX = 0; checkX < 3; checkX++) {
					for (var checkY = 0; checkY < 3; checkY++) {
						if ((x + checkCube[checkX][checkY].x < 0) || (x + checkCube[checkX][checkY].x >= 10)) continue;
						if ((i + checkCube[checkX][checkY].y < 0) || (i + checkCube[checkX][checkY].y >= 10)) continue;
						if (prField[x + checkCube[checkX][checkY].x][i + checkCube[checkX][checkY].y] == 1) return false;
					}
				}
			}
		}

		return true;
	}
	
	/**
 	* Размещает корабль на поле
 	*
 	* @param {number} x координата х корабля
 	* @param {number} y координата y корабля
 	* @param {number} r признак того, как расположен корабль - 0 горизонтально, 1 вертикально
 	* @param {number} length длина корабля
 	* @param {array} prField поле для заполнения
 	*/
	function locateShip(x, y, r, length, prField) {

		//Если всё ОК, то установим корабль на поле
		if (r == 0){
			for (var i = x; i < x + length; i++) {
				prField[i][y] = 1;
			}
		} else {
			for (var i = y; i < y + length; i++) {
				prField[x][i] = 1;
			}
		}
	}

};					

/**
 * Обработчик события onLoad
 */
function onLoad(){
	game.initField(game.leftField);
	initField(document.getElementById("firstField"),game.leftField,"first");
	initField(document.getElementById("secondField"),game.rightField,"second");
}

/**
 * Заполняет html документ в соответствии с первоначальными настройками
 */
function initField(prField,prGameField,prSyffix){

	//Добавление заголовка для колонок а, б, в, ...
	var div = document.createElement("div");
	div.id = prSyffix+"_header";
	div.className = "fieldLine";
	prField.appendChild(div);

	var headerString = "АБВГДЕЁЖЗИ";
	for (var i = 0; i < 10; i++) {
		var cubeDiv = document.createElement("div");
			cubeDiv.className = "headerCube";
			cubeDiv.textContent = headerString.charAt(i);
			cubeDiv.style = "left: "+(i*30+5)+"px";

		div.appendChild(cubeDiv);

	}

	for (var i = 0; i < 10; i++) {

		

		var div = document.createElement("div");
			div.id = prSyffix+"_div_"+i;
			div.className = "fieldLine";

		//Добавление заголовка для строк 1, 2, 3, ...
		var cubeDiv = document.createElement("div");
			cubeDiv.className = "headerCube";

			cubeDiv.textContent = i+1;
			cubeDiv.style = "top: "+((i+1)*30+5)+"px; left: -30px";

		div.appendChild(cubeDiv);

		prField.appendChild(div);

		

		for (var j = 0; j < 10; j++) {

			var img = document.createElement("img");			
				img.id = prSyffix+"_img_"+i+"_"+j;
				img.src = (prGameField[i][j]==0) ? "light_cube.png" : "dark_cube.png";
				img.width = 30;
				img.height = 30;
				img.className = "cube";
				img.onclick = onImgClick;

			prField.children[prSyffix+'_div_'+i].appendChild(img);
		}
	}
}

/**
 * Обработчик события onClick рисунка
 */
function onImgClick() {
	if(this.src!=null){
		if(this.src.indexOf("light_cube.png")!=-1){
			this.src = "dark_cube.png";
		} else {
			this.src = "light_cube.png";
		}
	}
}

(function(){
	//alert("asdf");
}());

