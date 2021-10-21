/**
 * Controller of ball .
 * Proposes  methodes for start/stop the ball and make it move .
 */
 class BallCtrl {

    /**
     * Constucts a ball controller .
     * @constructor
     * @param {Game} game - the game .
     * @param {View} view - the view .
     */
    constructor(game, view) {
        this._game = game;
        this._view = view;
        view.update(this._game.ball);
    }

    /** Starts the movement of ball */
    start() {
        this._moveListener = setInterval(() => this.move(), 10);
    }
        
    /** Moves the ball with one step (defined by its movement ) and update the view . */
    move() {
        let bricks = this._game.ballMove();
        if (this._game.isOver() && this._game.player.isLiving()) {
            this._game.player.loseLife();
            this._view.showLife(this._game.player.life);
            this.stop();
            this._game.updateBallPosition();
            this.updateBall("Click pour continuer ");
        }
        if (this._game.isOver() && !this._game.player.isLiving()){
            this._view.showMessage("Game over ")
            this.stop();
            console.log("zs");
            $("#message").append(
                $("<button>").text("Click to restart the game").click(function () {
                    location.reload();
                }));
        }
        if (this._game.isWon() && this._game.player.isLiving()) {
            this.stop();
            this._game.nextLevel();
            this._game.wall = this._game.constructWall() ;
            this._view.addAll(this._game.wall);
            this._view.printsLevel(this._game.level);
            this._game.player.addLife();
            this._view.showLife(this._game.player.life);
            this.updateBall("Felicitation ! Cliquez pour commencer un nouveau niveau");
        }
        this._view.updateScore(this._game.player.score);
        this._view.removeBrick(bricks);
        this._view.update(this._game.ball);
    }
   
    /**
    * Update ball position ,revere the movement and prints the message .
    * @param {String} message a string .
    */
    updateBall(message) {
        this._view.showMessage(message);
        this._game.updateBallPosition();
        this._game.ball.movement.deltaY = this._game.ball.movement.reverseY();
        $(document).mouseup(() => this.ballStart());
    }

    /**
    * 
    */
    ballStart() {
        $(document).off("mouseup");
        this._view.hideMessage();
        this.start();
    }

    /** Stop the ball . */
    stop() {
        clearInterval(this._moveListener);
    }
        
}