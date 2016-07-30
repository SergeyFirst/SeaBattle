package servlets;

import app.Player;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

import org.json.JSONException;
import org.json.JSONObject;


/**
 * Created by Сергей on 10.07.2016.
 */
public class Shoot extends HttpServlet {

    private void process(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        response.setCharacterEncoding("UTF-8");
        response.setContentType("json");

        HttpSession session = request.getSession();
        Player player = (Player) session.getAttribute("Player");
        if (player != null) {

            //Инициализация переменных
            int x = 0;
            int y = 0;
            String enemyID = null;

            //Распарсим входящие данные
            String jsonRequest = request.getParameter("request");
            try {
                JSONObject objRequest = new JSONObject(jsonRequest);
                x = objRequest.getInt("x");
                y = objRequest.getInt("y");
                enemyID = objRequest.getString("enemyID");
            } catch (JSONException e) {
                System.err.println("JSON Error in module \"Hit\":" + jsonRequest);
                e.printStackTrace();
            }

            //Проверим корректность выстрела
            if (player.getEnemy().getID().toString().equals(enemyID)) {
                JSONObject objResponse = new JSONObject();
                objResponse.put("hit",player.getEnemy().getMyPlayField()[x][y]);
                response.getWriter().println(objResponse.toString());

                objResponse.put("x",x);
                objResponse.put("y",y);
                player.setLastShoot(objResponse.toString());
            }

        }
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        process(request, response);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        process(request, response);
    }
}
