/**
 * A dimension with a height and width .
 */
class Dimension{
    /**
     * Constucts a dimension .
     * @constructor
     * @param {Integer} width an integer .
     * @param {Integer} height an integer .
     */
    constructor(width,height){
        this._width = width ;
        this._height = height ;
    }

    /** 
     * A simple getter 
     * @returns {Integer} the width .
     */
    get width(){
        return this._width ;
    }

    /** 
     * A simple getter 
     * @returns {Integer} the height .
    */
    get height(){
        return this._height ;
    }
}