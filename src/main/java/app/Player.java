package app;

import java.util.Date;
import java.util.UUID;

/**
 * Created by Сергей on 09.07.2016.
 */

public class Player {
    private UUID ID;
    private boolean[][] myField = new boolean[10][10];
    private boolean[][] enemyField = new boolean[10][10];
    private Date data;

    public Player() {
        ID = java.util.UUID.randomUUID();
        data = new Date();
    }

    public UUID getID() {
        return ID;
    }

    public void setID(UUID ID) {
        this.ID = ID;
    }

    public boolean[][] getMyField() {
        return myField;
    }

    public void setMyField(boolean[][] myField) {
        this.myField = myField;
    }

    public boolean[][] getEnemyField() {
        return enemyField;
    }

    public void setEnemyField(boolean[][] enemyField) {
        this.enemyField = enemyField;
    }

    public Date getData() {
        return data;
    }

    public void setData(Date data) {
        this.data = data;
    }
}
