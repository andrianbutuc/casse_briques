/**
 * A brick which is part of the wall .
 */
class Brick extends Sprite{
    /**
     * Constructs a brick .
     * @constructor
     * @param {Integer} id an integer .
     * @param {Position} topLeft a postion .
     * @param {Dimension} dimension a dimension
     */
    constructor(id,topLeft, dimension){
        super(id,"brick",topLeft,dimension);
    }
}