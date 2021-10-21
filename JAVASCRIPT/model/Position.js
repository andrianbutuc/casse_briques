/**
 * Position of the ball .
 */
class Position {
    
    /**
     * Constructs a postion .
     * @constructor
     * @param {Integer} x an integer .
     * @param {Integer} y an integer .
     */
    constructor(x,y){
        this._x = x ;
        this._y = y ;
    }

    /**
     * A simple getter .
     * @returns {Integer}the value of x .
     */
    get x(){
        return this._x;
    }

    /**
     * A simple getter.
     * *@returns {Integer} the value of y.
     */
    get y() {
        return this._y;
    }

    /**
     * A simple setter .
     * @returns {Integer} the new value of x .
     */
    set x(newX){
        this._x = newX ;
    }

    /**
     * A simple setter.
     * *@returns {Integer} the new value of y.
     */
    set y(newY) {
        this._y = newY;
    }
}