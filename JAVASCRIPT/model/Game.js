/**
 * A game .
 * It make move the paddle and the ball .
 */
class Game {

    /**
     * Constructs a game .
     * @constructor
     */
    constructor(){
        this._player = new Player ();
        this._paddle = new Paddle("paddle",new Position( sceneWidth/2,(sceneHeight - paddleHeight)), new Dimension(paddleWidth, paddleHeight));
        let x =  Math.random() * (sceneWidth - ballWidth) ;
        let y = sceneHeight - paddleHeight - ballHeight ;
        this._ball = new Ball("ball",new Position(x,y) , new Dimension(ballWidth,ballHeight),new Movement(this.randomDirection(),-2)) ;
        this._wall = this.constructWall();
        this._level = 1 ;
    }

    /** 
     * A simple getter .
     * @returns {Player} the player .
     */
    get player(){
        return this._player;
    }

    /**
     * A simple getter .
     * @returns {Paddle} the paddle .
     */
    get paddle(){
        return this._paddle ;
    }

    /**
     * A simple getter .
     * @returns {Ball} the ball .
     */
    get ball(){
        return this._ball ;
    }

    /**A simple getter 
     * @returns {Brick} the wall .
     */
    get wall(){
        return this._wall ;
    }

    /**
     * A simple getter.
     * @returns {Integer} the level .
     */
    get level(){
        return this._level ;
    }

    /**
     * A simple setter .
     */
    set wall (newWall){
        this._wall = newWall ;
    }

    /**
     * Increments the level and number of lign with bricks .
     */
    nextLevel(){
        this.accelerationBall();
        this._level +=1 ;
        if(nbLignWall<8){
            nbLignWall += 1 ;
        }
    }

    /**
     * Acceleratess the the movement of the ball
     */
    accelerationBall(){
        this._ball.movement.deltaY -= 1 ;
        if (this._ball.movement.deltaX < 0){
            this._ball.movement.deltaX -=1 ;
        }else{
            this._ball.movement.deltaX += 1;
        }
    }

    /**
     * Returns a randomn direction for ball .
     * @returns {Integer} a randomn direction for ball .
     */
    randomDirection(){
        return Math.round(Math.random()) * 2 - 1 ;
    }

    /**
     * Updates/resets the position of ball .
     */
    updateBallPosition(){
        this._ball.topLeft.y = sceneHeight - paddleHeight - ballHeight;
        this._ball.topLeft.x = Math.random() * (sceneWidth - ballWidth);
    }

    /**
     * Constructs the wall of bricks and returns them .
     * @returns {Brick} the bricks array .
     */
    constructWall(){
        let wall = [];
        let x = 0 ;
        let y = 120 ;
        let nbBricks = 15 * nbLignWall ;
        for (let i = 1; i <= nbBricks; i++) {
            wall[i-1] = new Brick(i,new Position(x,y),new Dimension(brickWidth,brickHeight)) 
            x+=brickWidth ;
            if (i % 15 == 0) {
                y += brickHeight;
                x = 0;
            }
        }
        return wall ;
    }

    /**
     * Moves the paddle to position of parameter .
     * @param {Integer} centerX an integer .
     */
    paddleMove(centerX){
        this._paddle.moveTo(centerX);
    }

    /**
     * Moves the ball .
     * @returns {Array} the id of removed bricks . 
     */
    ballMove(){
        if(this._paddle.isInCollision(this._ball)){
            this._ball.movement.deltaY = this._ball.movement.reverseY();
        }
        let bricksToRemove = this.collisionBallWithWall();
        this._player.addToScore(bricksToRemove.length *10);
        this._ball.move();
        return bricksToRemove;
    }

    /**
     * Checks if the ball is in collision with bricks and removes them .
     * @returns {Array} the id of removed bricks . 
     */
    collisionBallWithWall(){
        let idBricks = [];
        for (let i = 0; i < this._wall.length; i++) {
            if (this._ball.isInCollision(this._wall[i])) {
                if (i + 1 < this._wall.length && this._ball.isInCollision(this._wall[i + 1])) {
                    idBricks.unshift(this._wall[i+1].id);
                    this._wall.splice(i+1,1);
                }
                    idBricks.unshift(this._wall[i].id);
                    this._wall.splice(i,1);
                    this._ball.movement.deltaY = this._ball.movement.reverseY();
            }
        }
        return idBricks ;
    }
    
    /**
     * Returns true if the ball is touched the ground ,false otherwise .
     * @returns {Boolean} Returns true if the ball is touched the ground ,false otherwise .
     */
    isOver(){
        if (this._ball.topLeft.y + this._ball.dimension.height > sceneHeight ) {
            return true ;
        }else{
            return false ;
        }
    }

    /**
     * Returns true if all the brick are destroyed ,false otherwise .
     * @returns {Boolean} Returns true if all the brick are destroyed ,false otherwise .
     */
    isWon(){
        if(this._wall.length == 0 ){
            return true ;
        }else {
            return false ;
        }
    }
} 