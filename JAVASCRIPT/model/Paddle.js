/**
 * Creates a paddle .
 * Proposes a methode to move the paddle .
 */
class Paddle extends Sprite{
    
    /**
     * Construct the object paddle .
     * @constructor
     * @param {Integer} id an integer .
     * @param {Position} left a position .
     * @param {Dimension} dimension a dimension .
     */
    constructor(id,left,dimension){
        super(id, "paddle",left,dimension)
    }
    
    /**
     * Moves the postion of paddle .
     * @param {Integer} mousePos an integer .
     */
    moveTo(mousePos){
        if (this.positionBordDroit(mousePos) > (sceneWidth - (this._dimension.width/2))){
            this.topLeft.x = sceneWidth - this._dimension.width ;
        }else if(mousePos < 0 ){
            this.topLeft.x = 0;
        } else {
           this.topLeft.x = mousePos;

        }
    }
    /**
    * Returns the right edge position of paddle.
    * @param {Integer} mousePos an integer.
    * @returns {Integer} the right edge of position of paddle .
    */
    positionBordDroit(mousePos) {
        return mousePos + (this._dimension.width / 2);
    }
}
