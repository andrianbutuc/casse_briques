/**
 * A ball that moves in the scene automatically.
 */
class Ball extends Sprite {

    /**
     * Constructs a ball .
     * @constructor
     * @param {Integer} id a integer .
     * @param {Position} position a position .
     * @param {Dimension} dimension a dimension .
     * @param {Movement} movement a movement .
     */
    constructor(id,postion,dimension ,movement){
        super(id,"ball" ,postion,dimension);
        this._movement = movement ;
    }

    /**
     * A simple getter .
     * @returns {Movement} the value of movement .
     */
    get movement(){
        return this._movement ;
    }

    /**
     * Moves the ball in the scene .If the ball touchs the wall of scene the direction
     * of movement is reversed .
     */
    move(){
        if (this.ballEdgeEst() > sceneWidth ) {
           this._movement.deltaX = this._movement.reverseX();
        }else if(this._topLeft.y < 0 ){
            this._movement.deltaY = this._movement.reverseY();
        }else if (this._topLeft.x < 0 ){
            this._movement.deltaX = this._movement.reverseX();
        } else if (this.ballEdgeSouth() > sceneHeight) {
            this._movement.deltaY = this._movement.reverseY();
        }
        this.topLeft.x = this._topLeft.x + this._movement.deltaX;
        this.topLeft.y = this._topLeft.y + this._movement.deltaY;
    }
    
    /**
     * Calculates the value of east edge of ball.
     * @returns {Integer} the value of east edge of ball.
     */
    ballEdgeEst(){
        return this._topLeft.x + this._dimension.width ;
    }
    
    /**
     * Calculates the value of south edge of ball.
     * @returns {Integer} the value of south edge of ball.
     */
    ballEdgeSouth(){
        return this._topLeft.y + this._dimension.height ;
    }
}