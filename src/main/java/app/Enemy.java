package app;

import java.util.Date;
import java.util.UUID;

/**
 * Created by Сергей on 12.07.2016.
 */
public class Enemy {

    private UUID ID;
    private boolean[][] myPlayField = new boolean[10][10];
    private Date beginDate;
    private Date lastActivityDate;
    private Enemy enemy;
    private boolean readyToFight;
    private String lastShoot;

    public Enemy() {
        ID = java.util.UUID.randomUUID();
        beginDate = new Date();
    }

    public UUID getID() {
        return ID;
    }

    public void setID(UUID ID) {
        this.ID = ID;
    }

    public boolean[][] getMyPlayField() {
        return myPlayField;
    }

    public void setMyPlayField(boolean[][] myField) {
        this.myPlayField = myField;
    }

    public boolean[][] getEnemyPlayField() {
        return enemy.getMyPlayField();
    }

    public Date getBeginDate() {
        return beginDate;
    }

    public Date getLastActivityDate() {
        return lastActivityDate;
    }

    public Enemy getEnemy() {
        return enemy;
    }

    public void setEnemy(Enemy enemy) {
        this.enemy = enemy;
    }

    public boolean isReadyToFight() {
        return readyToFight;
    }

    public void setReadyToFight(boolean readyToFight) {
        this.readyToFight = readyToFight;
    }

    public String getLastShoot() {
        return lastShoot;
    }

    public void setLastShoot(String lastShoot) {
        this.lastShoot = lastShoot;
    }
}
