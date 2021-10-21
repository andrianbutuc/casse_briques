/**
 * 
 */
class Player{
    /**
     * Constructs the player .
     * @constructor
     */
    constructor(){
        this._life = 5 ;
        this._score = 0 ;
    }

    /** A simple getter
     * @returns {Integer} a number of lifes .
     */
    get life(){
        return this._life ;
    }

    /** A simple getter 
     * @returns {Integer} the score .
     */
    get score(){
        return this._score ;
    }
    /**
     * Decreases the number of lives with one .
     */
    loseLife(){
        this._life -= 1 ;
    }

    /**
     * Adds a life . 
     */
    addLife(){
        this._life += 1;
    }

    /**
     * Checks if player is living (have at least one life).
     * @returns {Boolean} true if player is living ,false otherwise .
     */
    isLiving(){
        if(this._life > 0){
            return true ;
        }else {
            return false ;
        }
    }

    /**
     * Adds to the current score points .
     * @param {Integer} points an integer .
     */
    addToScore(points){
        this._score += points ;
    }
}