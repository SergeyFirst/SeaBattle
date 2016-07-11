package app;

import java.util.ArrayList;

/**
 * Created by Сергей on 09.07.2016.
 */
public class Game {

    private static ArrayList<Player> Players = new ArrayList<>();

    public Player registerNewPlayer() {
        Player newPlayer = new Player();
        Game.Players.add(newPlayer);
        return newPlayer;
    }

    public int getPlayerCount() {
        return Players.size();
    }



}
