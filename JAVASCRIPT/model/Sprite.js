/**
 * The sprite can be a ball , a paddle or a brick.
 */
class Sprite{
    /**
     * Constructs a sprite .
     * @constructor
     * @param {Integer} id a integer .
     * @param {String} type a string .
     * @param {Position} topLeft a position .
     * @param {Dimension} dimension a dimension .
     */
    constructor(id,type,topLeft,dimension){
        this._id = id ;
        this._type = type ;
        this._topLeft = topLeft ;
        this._dimension = dimension ;
    }

    /**
     * A simple getter.
     * @returns {Position} the top left position .
     */
    get topLeft(){
        return this._topLeft ;
    }

    /**
     * A simple getter.
     * @returns {Dimension} the dimension .
     */
    get dimension(){
        return this._dimension ;
    }

    /**A simple getter.
     * @returns {Integer} the id .
     */
    get id(){
        return this._id;
    }

    /**A simple getter. 
     * @returns {String} the type .
    */
    get type(){
        return this._type ;
    }

    /**
     * Checks for a collision with a sprite . 
     * @param {Sprite} sprite a sprite .
     * @returns {Boolean} true if there is a collision witth a sprite ,false otherwise .
     */
    isInCollision(sprite){
        let spritebottomLeft = new Position(sprite.topLeft.x , sprite.topLeft.y + sprite.dimension.height);
        let spritebottomRight = new Position(sprite.topLeft.x + sprite.dimension.width, sprite.topLeft.y + sprite.dimension.height);
        if(this._topLeft.y < spritebottomLeft.y && this._topLeft.y + this._dimension.height > sprite.topLeft.y){
            let thisSpriteTopRightPositionX = this._topLeft.x + this._dimension.width ;
            if(spritebottomLeft.x >= thisSpriteTopRightPositionX || spritebottomRight.x <= this._topLeft.x){
                return false ;
            }else{
                return true ;
            }
        }
        return false ;
    }
   
}