package servlets;

import app.Game;
import app.Player;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;


/**
 * Created by Сергей on 09.07.2016.
 */
public class Start extends HttpServlet {

    private void process(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        response.setCharacterEncoding("UTF-8");
        response.setContentType("json");

        HttpSession session = request.getSession();
        Player player = (Player) session.getAttribute("Player");
        if (player != null) {

            //Получим параметры игры
            String jsonRequest = request.getParameter("request");
            JSONArray jsonPlayField = null;
            try {
                JSONObject objRequest = new JSONObject(jsonRequest);
                jsonPlayField = objRequest.getJSONArray("playField");
            } catch (JSONException e) {
                System.err.println("JSON Error in module \"Hit\":" + jsonRequest);
                e.printStackTrace();
            }
            boolean[][] playField = new boolean[10][10];
            for (int i = 0; i < 10; i++) {
                for (int j = 0; j < 10; j++) {
                    playField[i][j] = jsonPlayField.getJSONArray(i).getInt(j) == 1 ? true : false;
                }
            }
            player.setMyPlayField(playField);

            //Найдём и установим противника
            player.setReadyToFight(true);
            player.setEnemy(Game.findNewEnemy(player));
            player.getEnemy().setEnemy(player);

            //Сформируем и запишем ответ
            JSONObject jdata = new JSONObject();
            jdata.put("enemyID", player.getEnemy().getID().toString());
            response.getWriter().println(jdata.toString());
        }

    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        process(request, response);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        process(request, response);
    }
}
