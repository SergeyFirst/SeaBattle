/*--------------------- MODEL - BEGIN ---------------------------------------------------------*/
var model = {
    i: 0,
    enemyID: "",
    leftField: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],

    rightField: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
    /**
     * Убираем все корабли с поля
     * @param {array} prField - очищаемое поле
     */
    clearField: function (prField) {
        for (var i = 0; i < 10; i++) {
            for (var j = 0; j < 10; j++) {
                prField[i][j] = 0;
            }
        }
    },
    /**
     * Заполняет поле кораблями в случайном порядке
     *
     * @param {array} prField поле для заполнения
     */
    fillField: function (prField) {

        var bots = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];

        for (var i = 0; i < 10; i++) {
            var x = Math.floor(Math.random() * 10);
            var y = Math.floor(Math.random() * 10);
            var r = Math.round(Math.random());

            while (!this.checkShip(x, y, r, bots[i], prField)) {
                var x = Math.floor(Math.random() * 10);
                var y = Math.floor(Math.random() * 10);
                var r = Math.round(Math.random());
            }
            this.locateShip(x, y, r, bots[i], prField)
        }
    },

    /**
     * Размещает корабль на поле
     *
     * @param {number} x координата х корабля
     * @param {number} y координата y корабля
     * @param {number} r признак того, как расположен корабль - 0 горизонтально, 1 вертикально
     * @param {number} length длина корабля
     * @param {array} prField поле для заполнения
     */
    locateShip: function (x, y, r, length, prField) {

        //Если всё ОК, то установим корабль на поле
        if (r == 0) {
            for (var i = x; i < x + length; i++) {
                prField[i][y] = 1;
            }
        } else {
            for (var i = y; i < y + length; i++) {
                prField[x][i] = 1;
            }
        }
    },

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
    checkShip: function (x, y, r, length, prField) {

        //Проверим, что карабль влезает на поле
        if ((r == 0) && (x + length > 10)) return false;
        if ((r == 1) && (y + length > 10)) return false;

        //Проверим, что корабль не пересекается и не касается других кораблей
        var checkCube = [[{x: -1, y: 1}, {x: 0, y: 1}, {x: 1, y: 1}],
            [{x: -1, y: 0}, {x: 0, y: 0}, {x: 1, y: 0}],
            [{x: -1, y: -1}, {x: 0, y: -1}, {x: 1, y: -1}]];
        if (r == 0) {
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
            for (var i = y; i < y + length; i++) {
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
}
/*--------------------- MODEL - END -----------------------------------------------------------*/

/*--------------------- VIEW - BEGIN ----------------------------------------------------------*/
var view = {
    /**
     * Заполняем поле кароблями в соответствии с моделью
     * @param syffix
     */
    initArea: function (syffix) {
        for (var i = 0; i < 10; i++) {
            for (var j = 0; j < 10; j++) {
                if (model.leftField[i][j] == 1) {
                    this.showShip("" + syffix + i + j, true);
                } else {
                    this.showShip("" + syffix + i + j, false);
                }
            }
        }
    },

    /**
     * Заполняем одну ячейку поля
     * @param id - адрес ячейки
     * @param isItTrue - true - заполняем, false - очищаем
     */
    showShip: function (id, isItTrue) {
        var cube = document.getElementById(id);
        cube.setAttribute("class", isItTrue ? "ship" : "");
    },

    startGame: function () {
        document.getElementById("left_buttons_area").style.display = 'none';
        document.getElementById("right_buttons_area").style.display = 'none';
        view.showMessage("");
    },
    /**
     * Отображаем сообщение в шапке страницы
     * @param message
     */
    showMessage: function (message) {
        document.getElementById("messages_arrea").textContent = message;
    },
    redrawField: function (field, prefix) {
        for (i = 0; i < 10; i++) {
            for (j = 0; j < 10; j++) {
                if (field[i][j] == 0) {
                    document.getElementById(prefix + i + j).className = "";
                } else if (field[i][j] == 1) {
                    document.getElementById(prefix + i + j).className = "ship";
                } else if (field[i][j] == 2) {
                    document.getElementById(prefix + i + j).className = "fire";
                } else if (field[i][j] == 3) {
                    document.getElementById(prefix + i + j).className = "past";
                }

            }
        }
    }


};
/*--------------------- VIEW - END ------------------------------------------------------------*/

/*--------------------- CONTROLLER - BEGIN ----------------------------------------------------*/

var controller = {

    leftFieldClick: function () {
        console.log("left");
    },
    /**
     * Обработчик события при клике по правому полю
     */
    rightFieldClick: function () {

        //Разберём id ячейки
        var x = +this.id.substr(1, 1);
        var y = +this.id.substr(2, 1);
        var request = {
            x: x,
            y: y,
            enemyID: model.enemyID
        };
        var xhrShoot = new XMLHttpRequest();
        xhrShoot.open('POST', '/shoot?request=' + JSON.stringify(request), true);
        xhrShoot.setRequestHeader('Content-Type', 'application/json');
        xhrShoot.send();

        xhrShoot.onreadystatechange = function () {
            if (xhrShoot.readyState != 4) return;

            if (xhrShoot.status != 200) {
                alert(xhrShoot.status + ': ' + xhrShoot.statusText);
            } else {
                //Обработаем выстрел по вражескому полю
                var hit = JSON.parse(xhrShoot.responseText).hit;
                if (hit) {
                    model.rightField[x][y] = 2; //Попал
                } else {
                    model.rightField[x][y] = 3; //Мимо
                }
                view.redrawField(model.rightField, "r");
            }
        }

        var xhrGetFire = new XMLHttpRequest();
        xhrGetFire.open('POST', '/getFire?id=' + JSON.stringify(request), true);
        xhrGetFire.setRequestHeader('Content-Type', 'application/json');
        xhrGetFire.send();

        xhrGetFire.onreadystatechange = function () {
            if (xhrGetFire.readyState != 4) return;

            if (xhrGetFire.status != 200) {
                //alert(xhrGetFire.status + ': ' + xhrGetFire.statusText);
                xhrGetFire.open('POST', '/getFire?id=' + JSON.stringify(request), true);
                xhrGetFire.setRequestHeader('Content-Type', 'application/json');
                xhrGetFire.send();
            } else {

                //Обработаем выстрел по нашему полю
                var jsonData = JSON.parse(xhrGetFire.responseText);
                model.i++;
                view.showMessage("" + model.i + ":" + xhrGetFire.responseText);
                var x = jsonData.x;
                var y = jsonData.y;
                var hit = jsonData.hit;
                if (hit) {
                    model.leftField[x][y] = 2; //Попал
                } else {
                    model.leftField[x][y] = 3; //Мимо
                }
                view.redrawField(model.leftField, "");
            }


        }
    },
    /**
     * Обработчик события при начале игры
     */
    startClick: function () {

        if (event.target != this) return;

        request = {
          playField: model.leftField
        };

        var xhr = new XMLHttpRequest();
        xhr.open('POST', '/start?request=' + JSON.stringify(request), true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send();

        xhr.onreadystatechange = function () {
            if (xhr.readyState != 4) return;

            if (xhr.status != 200) {
                alert(xhr.status + ': ' + xhr.statusText);
            } else {
                model.enemyID = JSON.parse(xhr.responseText).enemyID;
                view.startGame();
            }

        }

    },
    placeShipsClick: function () {
        model.clearField(model.leftField);
        model.fillField(model.leftField);
        view.initArea("");
    },
    /**
     eventSource: new EventSource("/getFire"),
     onMessage: function (event) {

        //Обработаем выстрел по нашему полю
        var jsonData = JSON.parse(event.data);
        model.i++;
        view.showMessage("" + model.i + ":" + event.data);
        var x = jsonData.x;
        var y = jsonData.y;
        var hit = jsonData.hit;
        if (hit) {
            model.leftField[x][y] = 2; //Попал
        } else {
            model.leftField[x][y] = 3; //Мимо
        }
        view.redrawField(model.leftField, "");
        //eventSource.close();

    }
     */

};

/*--------------------- CONTROLLER - END ------------------------------------------------------*/

/*--------------------- anonymous function -----------------------------------------------------*/

(function () {

    var app = {
        init: function () {
            model.fillField(model.leftField);
            view.initArea("");
            //controller.eventSource.addEventListener('message',controller.onMessage,false);
            //view.fillField(document.getElementById("leftField"), model.leftField,"left");
            //view.fillField(document.getElementById("rightField"),model.rightField,"right");
        },

        main: function () {

        },

        /*
         Назначение обработчиков событий
         */
        event: function () {
            for (var i = 0; i < 10; i++) {
                for (var j = 0; j < 10; j++) {
                    document.getElementById("" + i + j).onclick = controller.leftFieldClick;
                    document.getElementById("r" + i + j).onclick = controller.rightFieldClick;
                }
            }
            document.getElementById("start_button").onclick = controller.startClick;
            document.getElementById("place_ships").onclick = controller.placeShipsClick;
        }

    }

    app.init();
    app.event();
    app.main();

}());

