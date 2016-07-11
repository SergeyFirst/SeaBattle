<%--
  Created by IntelliJ IDEA.
  User: Сергей
  Date: 09.07.2016
  Time: 13:35
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!doctype html>
<html lang="ru">
<head>
  <title>Sea Battle</title>
  <meta http-equiv="Content-type" content="text/html; charset=UTF-8">
  <link rel="icon" href="img/favicon.ico">
  <link rel="stylesheet" type="text/css" href="styles/style.css">
</head>
<body>


<h1>Морской бой</h1>

<div>${PlayersCount} игроков онлайн</div>
<div>
  <p id="messages_arrea">Разместите корабли</p>
</div>
<div id="areas">

  <div id="left_area_info">
    <div>
      <img src="img/small_ship.png">
      <img src="img/small_gap.png">
      <img src="img/small_ship.png">
      <img src="img/small_gap.png">
      <img src="img/small_ship.png">
      <img src="img/small_gap.png">
      <img src="img/small_ship.png">
    </div>
    <div>
      <img src="img/small_ship.png">
      <img src="img/small_ship.png">
      <img src="img/small_gap.png">
      <img src="img/small_ship.png">
      <img src="img/small_ship.png">
      <img src="img/small_gap.png">
      <img src="img/small_ship.png">
      <img src="img/small_ship.png">
    </div>

    <div>
      <img src="img/small_ship.png">
      <img src="img/small_ship.png">
      <img src="img/small_ship.png">
      <img src="img/small_gap.png">
      <img src="img/small_ship.png">
      <img src="img/small_ship.png">
      <img src="img/small_ship.png">
    </div>
    <div>
      <img src="img/small_ship.png">
      <img src="img/small_ship.png">
      <img src="img/small_ship.png">
      <img src="img/small_ship.png">
    </div>


  </div>


  <div id="left_area" class="area">
    <table id="left_area_table" border="0" cellspacing="0" cellpadding="0">
      <thead>
      <tr>
        <td></td>
        <td><p>А</p></td>
        <td><p>Б</p></td>
        <td><p>В</p></td>
        <td><p>Г</p></td>
        <td><p>Д</p></td>
        <td><p>Е</p></td>
        <td><p>Ё</p></td>
        <td><p>Ж</p></td>
        <td><p>З</p></td>
        <td><p>И</p></td>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td><p>1</p></td>
        <td id="00"></td>
        <td id="01"></td>
        <td id="02"></td>
        <td id="03"></td>
        <td id="04"></td>
        <td id="05"></td>
        <td id="06"></td>
        <td id="07"></td>
        <td id="08"></td>
        <td id="09"></td>
      </tr>
      <tr>
        <td><p>2</p></td>
        <td id="10"></td>
        <td id="11"></td>
        <td id="12"></td>
        <td id="13"></td>
        <td id="14"></td>
        <td id="15"></td>
        <td id="16"></td>
        <td id="17"></td>
        <td id="18"></td>
        <td id="19"></td>
      </tr>
      <tr>
        <td><p>3</p></td>
        <td id="20"></td>
        <td id="21"></td>
        <td id="22"></td>
        <td id="23"></td>
        <td id="24"></td>
        <td id="25"></td>
        <td id="26"></td>
        <td id="27"></td>
        <td id="28"></td>
        <td id="29"></td>
      </tr>
      <tr>
        <td><p>4</p></td>
        <td id="30"></td>
        <td id="31"></td>
        <td id="32"></td>
        <td id="33"></td>
        <td id="34"></td>
        <td id="35"></td>
        <td id="36"></td>
        <td id="37"></td>
        <td id="38"></td>
        <td id="39"></td>
      </tr>
      <tr>
        <td><p>5</p></td>
        <td id="40"></td>
        <td id="41"></td>
        <td id="42"></td>
        <td id="43"></td>
        <td id="44"></td>
        <td id="45"></td>
        <td id="46"></td>
        <td id="47"></td>
        <td id="48"></td>
        <td id="49"></td>
      </tr>
      <tr>
        <td><p>6</p></td>
        <td id="50"></td>
        <td id="51"></td>
        <td id="52"></td>
        <td id="53"></td>
        <td id="54"></td>
        <td id="55"></td>
        <td id="56"></td>
        <td id="57"></td>
        <td id="58"></td>
        <td id="59"></td>
      </tr>
      <tr>
        <td><p>7</p></td>
        <td id="60"></td>
        <td id="61"></td>
        <td id="62"></td>
        <td id="63"></td>
        <td id="64"></td>
        <td id="65"></td>
        <td id="66"></td>
        <td id="67"></td>
        <td id="68"></td>
        <td id="69"></td>
      </tr>
      <tr>
        <td><p>8</p></td>
        <td id="70"></td>
        <td id="71"></td>
        <td id="72"></td>
        <td id="73"></td>
        <td id="74"></td>
        <td id="75"></td>
        <td id="76"></td>
        <td id="77"></td>
        <td id="78"></td>
        <td id="79"></td>
      </tr>
      <tr>
        <td><p>9</p></td>
        <td id="80"></td>
        <td id="81"></td>
        <td id="82"></td>
        <td id="83"></td>
        <td id="84"></td>
        <td id="85"></td>
        <td id="86"></td>
        <td id="87"></td>
        <td id="88"></td>
        <td id="89"></td>
      </tr>
      <tr>
        <td><p>10</p></td>
        <td id="90"></td>
        <td id="91"></td>
        <td id="92"></td>
        <td id="93"></td>
        <td id="94"></td>
        <td id="95"></td>
        <td id="96"></td>
        <td id="97"></td>
        <td id="98"></td>
        <td id="99"></td>
      </tr>
      </tbody>
    </table>
    <div id="left_buttons_area">
      <button id="place_ships">Расставить корабли</button>
    </div>
  </div>

  <div id="right_area" class="area">
    <table id="right_area_table" border="0" cellspacing="0" cellpadding="0">
      <thead>
      <tr>
        <td></td>
        <td><p>А</p></td>
        <td><p>Б</p></td>
        <td><p>В</p></td>
        <td><p>Г</p></td>
        <td><p>Д</p></td>
        <td><p>Е</p></td>
        <td><p>Ё</p></td>
        <td><p>Ж</p></td>
        <td><p>З</p></td>
        <td><p>И</p></td>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td><p>1</p></td>
        <td id="r00"></td>
        <td id="r01"></td>
        <td id="r02"></td>
        <td id="r03"></td>
        <td id="r04"></td>
        <td id="r05"></td>
        <td id="r06"></td>
        <td id="r07"></td>
        <td id="r08"></td>
        <td id="r09"></td>
      </tr>
      <tr>
        <td><p>2</p></td>
        <td id="r10"></td>
        <td id="r11"></td>
        <td id="r12"></td>
        <td id="r13"></td>
        <td id="r14"></td>
        <td id="r15"></td>
        <td id="r16"></td>
        <td id="r17"></td>
        <td id="r18"></td>
        <td id="r19"></td>
      </tr>
      <tr>
        <td><p>3</p></td>
        <td id="r20"></td>
        <td id="r21"></td>
        <td id="r22"></td>
        <td id="r23"></td>
        <td id="r24"></td>
        <td id="r25"></td>
        <td id="r26"></td>
        <td id="r27"></td>
        <td id="r28"></td>
        <td id="r29"></td>
      </tr>
      <tr>
        <td><p>4</p></td>
        <td id="r30"></td>
        <td id="r31"></td>
        <td id="r32"></td>
        <td id="r33"></td>
        <td id="r34"></td>
        <td id="r35"></td>
        <td id="r36"></td>
        <td id="r37"></td>
        <td id="r38"></td>
        <td id="r39"></td>
      </tr>
      <tr>
        <td><p>5</p></td>
        <td id="r40"></td>
        <td id="r41"></td>
        <td id="r42"></td>
        <td id="r43"></td>
        <td id="r44"></td>
        <td id="r45"></td>
        <td id="r46"></td>
        <td id="r47"></td>
        <td id="r48"></td>
        <td id="r49"></td>
      </tr>
      <tr>
        <td><p>6</p></td>
        <td id="r50"></td>
        <td id="r51"></td>
        <td id="r52"></td>
        <td id="r53"></td>
        <td id="r54"></td>
        <td id="r55"></td>
        <td id="r56"></td>
        <td id="r57"></td>
        <td id="r58"></td>
        <td id="r59"></td>
      </tr>
      <tr>
        <td><p>7</p></td>
        <td id="r60"></td>
        <td id="r61"></td>
        <td id="r62"></td>
        <td id="r63"></td>
        <td id="r64"></td>
        <td id="r65"></td>
        <td id="r66"></td>
        <td id="r67"></td>
        <td id="r68"></td>
        <td id="r69"></td>
      </tr>
      <tr>
        <td><p>8</p></td>
        <td id="r70"></td>
        <td id="r71"></td>
        <td id="r72"></td>
        <td id="r73"></td>
        <td id="r74"></td>
        <td id="r75"></td>
        <td id="r76"></td>
        <td id="r77"></td>
        <td id="r78"></td>
        <td id="r79"></td>
      </tr>
      <tr>
        <td><p>9</p></td>
        <td id="r80"></td>
        <td id="r81"></td>
        <td id="r82"></td>
        <td id="r83"></td>
        <td id="r84"></td>
        <td id="r85"></td>
        <td id="r86"></td>
        <td id="r87"></td>
        <td id="r88"></td>
        <td id="r89"></td>
      </tr>
      <tr>
        <td><p>10</p></td>
        <td id="r90"></td>
        <td id="r91"></td>
        <td id="r92"></td>
        <td id="r93"></td>
        <td id="r94"></td>
        <td id="r95"></td>
        <td id="r96"></td>
        <td id="r97"></td>
        <td id="r98"></td>
        <td id="r99"></td>
      </tr>
      </tbody>
    </table>
    <div id="right_buttons_area">
      <p>Противник</p>
      <button id="start_button">Играть</button>
    </div>
  </div>

  <div id="right_area_info">
    <div>
      <img src="img/small_ship.png">
      <img src="img/small_gap.png">
      <img src="img/small_ship.png">
      <img src="img/small_gap.png">
      <img src="img/small_ship.png">
      <img src="img/small_gap.png">
      <img src="img/small_ship.png">
    </div>
    <div>
      <img src="img/small_ship.png">
      <img src="img/small_ship.png">
      <img src="img/small_gap.png">
      <img src="img/small_ship.png">
      <img src="img/small_ship.png">
      <img src="img/small_gap.png">
      <img src="img/small_ship.png">
      <img src="img/small_ship.png">
    </div>

    <div>
      <img src="img/small_ship.png">
      <img src="img/small_ship.png">
      <img src="img/small_ship.png">
      <img src="img/small_gap.png">
      <img src="img/small_ship.png">
      <img src="img/small_ship.png">
      <img src="img/small_ship.png">
    </div>
    <div>
      <img src="img/small_ship.png">
      <img src="img/small_ship.png">
      <img src="img/small_ship.png">
      <img src="img/small_ship.png">
    </div>

  </div>

  <script src='js/script.js'></script>

  </div>
</body>
</html>

