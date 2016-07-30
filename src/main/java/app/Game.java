package app;

import java.util.ArrayList;

/**
 * Created by Сергей on 09.07.2016.
 */
public class Game {

    private static ArrayList<Enemy> players = new ArrayList<>();

    public static Player registerNewPlayer() {
        Player newPlayer = new Player();
        players.add(newPlayer);
        return newPlayer;
    }

    public static int getPlayerCount() {
        return players.size();
    }

    public static Enemy findNewEnemy(Enemy me) {
        for (Enemy player : players) {
            if (player != me && player.getEnemy()==null && player.isReadyToFight()) {
                return player;
            }
        }
        //Если свободный игрок не найден, то вернём Бота
        return new Bot();
    }



}
