/**
 * Game Controller .
 * Proposes the methodes for play and stop the game .
 */
class GameCtrl{

    /**
     * Constructs a game controller .
     * @constructor
     * @param {Game} game a game 
     * @param {View} view a view 
     */
    constructor(game,view){
        this._game = game ;
        this._view = view ;
        this._paddleCtrl = new PaddleCtrl(game,view);
        this._ballCtrl = new BallCtrl(game,view);
        view.scene(sceneWidth,sceneHeight);
        view.addAll(game.wall);
    }

    /**
     * Starts the game .
     */
    play(){
        this.ballStartWait();
        this._view.add(this._game.paddle);
        this._view.add(this._game.ball);
        this._view.updateInfo(sceneWidth,this._game.player.score,this._game.player.life,this._game.level);
    }

    /**
     * Makes the ball wait until the player click on scene.
     */
    ballStartWait() {
        this._view.showMessage("Click to start");
        $(document).mouseup(() => this.ballStart());
    }
    
    /**
     * Hides the message and starts the ball .
     */
    ballStart() {
         this._ballCtrl.ballStart();
    }
    /**
     * Stops the game .
     */
    stop(){
        this._ballCtrl.stop();
    }
}