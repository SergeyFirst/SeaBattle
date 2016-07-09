package servlets;

import app.Game;
import app.Player;

import java.io.IOException;
import java.util.ArrayList;
import java.util.UUID;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Created by Сергей on 09.07.2016.
 */
public class Index extends HttpServlet {

    private void process(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        HttpSession session = request.getSession();
        if (session.getAttribute("ID") == null) {
            Player newPlayer = new Player();
            Game.Players.add(newPlayer);
            session.setAttribute("ID", newPlayer.getID());
        }

        getServletContext().getRequestDispatcher("/Main.jsp").forward(request, response);

    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        process(request, response);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        process(request, response);
    }
}
