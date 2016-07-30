package servlets;

import app.Player;
import org.json.JSONObject;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;

/**
 * Created by Сергей on 23.07.2016.
 */
public class GetFire extends HttpServlet {

    protected void process(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("");
        System.out.println("1. GetFire");

        response.setCharacterEncoding("UTF-8");
        response.setContentType("json");

        HttpSession session = request.getSession();
        Player player = (Player) session.getAttribute("Player");
        PrintWriter writer = null;

        if (player != null) {
            System.out.println("2. Player - true");

            System.out.println("3. Do");

            writer = response.getWriter();
            writer.println(player.getEnemy().getLastShoot());
            writer.close();
            System.out.println("4. Writer - true");
            //player.setLastShoot("");
            writer.close();
        }

    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        process(request, response);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        process(request, response);
    }
}
