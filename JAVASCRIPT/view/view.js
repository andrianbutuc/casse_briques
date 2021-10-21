/**
 * Changes the view of jeu .
 */
class View{
  /**
   * Prints a scene .
   * @param {Integer} sceneWidth an integer.
   * @param {Integer} sceneHeight an integer
   */
  scene(sceneWidth,sceneHeight){
    $("#scene").css({
      "height": sceneHeight,
      "width": sceneWidth
    })
  }
  /**
   * 
   * @param {Integer} sceneWidth an integer .
   * @param {Integer} score an integer .
   * @param {String} nbLives a string .
   * @param {Integer} level an integer .
   */
  updateInfo(sceneWidth,score,nbLives,level){
    $(".info").css("width",sceneWidth);
    this.updateScore(score);
    this.showLife(nbLives);
    this.printsLevel(level);
  }

  /**
   * Updates the view of score .
   * @param {Integer} score an integer.
   */
  updateScore(score){
    $("#score").text("Score : " + score).css("right", 0);
  }

  /**
   * Prints the lifes .
   * @param {Integer} nbLives an integer .
   */
  showLife(nbLives){
    let lifes = function(){
      let i = 0 ;
      let string = "";
      while(i < nbLives){
        string += "❤" ;
        i++;
      }
      return string;
    }
    $("#life").text(lifes).css("left", 0);
  }

  /**
   * Prints the current level .
   * @param {Integer} level an integer .
   */
  printsLevel(level){
    $("#level").text("Level : " + level).css("left",sceneWidth/2);
  }

  /**
   * Prints the wall of bricks .
   * @param {Brick} sprites an bricks array .
   */
  addAll(sprites){
    sprites.forEach(sprite => {
      this.add(sprite);
    });
  }

  /**
   * Adds the sprite (ball or paddle) on scene.
   * @param {Sprite} sprite a sprite .
   */
    add(sprite){
      $("#scene").append(
        $("<span>").addClass(sprite.type).attr("id",sprite.id).css({
          "height": sprite.dimension.height,
          "width": sprite.dimension.width,
          "left": sprite.topLeft.x,
          "top": sprite.topLeft.y
      }));
    }

    /**
     * Update the position of sprite on scene .
     * @param {Sprite} sprite a sprite .
     */
    update(sprite){
      if(sprite.id === "ball"){
        this.displayBall(sprite);
      } else {
        this.displayPaddle(sprite);
      }
    }

    /**
     * Removes the brick of scene  using an id .
     * @param {Integer} bricks an integer array .   
     */
    removeBrick(bricks){
      bricks.forEach(brick =>{
        $("#" + brick).remove();
      });
    }

    /**
     * Prints the paddle . 
     * @param {Paddle} paddle : the paddle
     */
    displayPaddle(paddle){
        $("#paddle").css("left", paddle.topLeft.x);
    }

    /**
     * Prints the ball .
     * @param {Ball} ball the ball .
     */
    displayBall(ball){
      let posBall = ball.topLeft;
      $("#ball").css({"left" : posBall.x ,"top" : posBall.y});
    }

    /**
     * Shows the message .
     * @param {String} message a string 
     */
    showMessage(message){
      $("#message").show().text(message);
    }

    /**
     * Hides the message .
     */
    hideMessage(){
      $("#message").hide();
    }

    /**
     * Calculetes the distance between the start of window and scene .
     * @returns {Integer} the distance between the start of window and scene .
     */
    sceneLeft(){
      return $("#scene").offset().left ;
    }
}