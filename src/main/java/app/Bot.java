package app;

import org.json.JSONObject;


/**
 * Created by Сергей on 12.07.2016.
 */
public class Bot extends Enemy {

    public Bot() {
        setMyPlayField(getNewField());
    }

    private boolean[][] getNewField() {
        boolean[][] result = new boolean[10][10];
        int[] bots = {4, 3, 3, 2, 2, 2, 1, 1, 1, 1};

        for (int i = 0; i < 10; i++) {
            int x = (int)Math.round(Math.random() * 10);
            int y = (int)Math.floor(Math.random() * 10);
            int r = (int)Math.round(Math.random());

            while (!checkShip(x, y, r, bots[i], result)) {
                x = (int)Math.floor(Math.random() * 10);
                y = (int)Math.floor(Math.random() * 10);
                r = (int)Math.round(Math.random());
            }
            locateShip(x, y, r, bots[i], result);
        }

        return result;
    }

    private boolean checkShip(int x, int y, int r, int length, boolean[][] playField){

        //Проверим, что карабль влезает на поле
        if ((r == 0) && (x + length > 10)) return false;
        if ((r == 1) && (y + length > 10)) return false;

        //Проверим, что корабль не пересекается и не касается других кораблей
        Point[][] checkCube = {{new Point(-1,1),new Point(0,1),new Point(1,1)},
                               {new Point(-1,0),new Point(0,0),new Point(1,0)},
                               {new Point(-1,-1),new Point(0,-1),new Point(1,-1)}};

        if (r == 0) {
            for (int i = x; i < x + length; i++) {
                for (int checkX = 0; checkX < 3; checkX++) {
                    for (int checkY = 0; checkY < 3; checkY++) {
                        if ((i + checkCube[checkX][checkY].x < 0) || (i + checkCube[checkX][checkY].x >= 10)) continue;
                        if ((y + checkCube[checkX][checkY].y < 0) || (y + checkCube[checkX][checkY].y >= 10)) continue;
                        if (playField[i + checkCube[checkX][checkY].x][y + checkCube[checkX][checkY].y]) return false;
                    }
                }
            }
        } else {
            for (int i = y; i < y + length; i++) {
                for (int checkX = 0; checkX < 3; checkX++) {
                    for (int checkY = 0; checkY < 3; checkY++) {
                        if ((x + checkCube[checkX][checkY].x < 0) || (x + checkCube[checkX][checkY].x >= 10)) continue;
                        if ((i + checkCube[checkX][checkY].y < 0) || (i + checkCube[checkX][checkY].y >= 10)) continue;
                        if (playField[x + checkCube[checkX][checkY].x][i + checkCube[checkX][checkY].y]) return false;
                    }
                }
            }
        }

        return true;
    }

    private  void locateShip(int x, int y, int r, int length, boolean[][] playField){
        //Если всё ОК, то установим корабль на поле
        if (r == 0) {
            for (int i = x; i < x + length; i++) {
                playField[i][y] = true;
            }
        } else {
            for (int i = y; i < y + length; i++) {
                playField[x][i] = true;
            }
        }
    }

    @Override
    public String getLastShoot() {
        JSONObject result = new JSONObject();
        int x = (int) Math.round(Math.random() * 10);
        int y = (int) Math.round(Math.random() * 10);
        result.put("x", x);
        result.put("y", y);
        result.put("hit", getEnemyPlayField()[x][y]);
        return result.toString();
    }
    private class Point{
        int x;
        int y;

        public Point(int x, int y) {
            this.x = x;
            this.y = y;
        }
    }
}

