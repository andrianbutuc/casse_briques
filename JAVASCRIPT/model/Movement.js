/**
 * A movement of ball .
 */
class Movement{
    /**
     * Constructs a movement .
     * @constructor
     * @param {Integer} deltaX an integer . 
     * @param {Integer} deltaY an integer .
     */
    constructor(deltaX,deltaY){
        this._deltaX = deltaX ;
        this._deltaY = deltaY ;
    }

    /**
     * A simple getter .
     * @returns the value of deltaX .
     */
    get deltaX() {
        return this._deltaX;
    }

    /**
     * A simple getter.
     *@returns the value of deltaY.
     */
    get deltaY() {
        return this._deltaY;
    }

    /**
     * A simple setter.*
     * @returns the new value of deltaX.
     */
    set deltaX(newDeltaX) {
        this._deltaX = newDeltaX;
    }

    /**
     * A simple setter.*
     * @returns the new value of deltaX.
     */
    set deltaY(newDeltaY) {
        this._deltaY = newDeltaY;
    }

    /**
     * Reverses the value of deltaX .
     * @returns {Integer} the reversed value of deltaX .
     */
    reverseX(){
        return (this._deltaX * (-1));
    }

    /**
     * Reverses the value of deltaY .
     * @returns {Integer} the reversed value of deltaY .
     */
    reverseY(){
        return (this._deltaY * (-1));
    }
}