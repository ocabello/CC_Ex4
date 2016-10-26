function SmallCircleGroup(locX, locY) {

  CircleGroup.call(this, locX, locY);  //inherits from both Circle and CircleGroup (since CircleGroup inherits from Circle)
  var d = 25;
  var c = color(random(80), 0, 0, 100);

//overrides create function
  this.create = function() {
    //  fill(random(80), 0, 0);
    fill(c);
    ellipse(this.x, this.y, d, d);
  }


  this.shrink = function() {

    if (keyIsPressed) {

      if (key == 'q') {    //shrinks this group of circles when q is pressed
        d -= 2;

        if (d < 0) {
          d = 0;
        }
      c = color(random(80), 0, 0, 100);

      }

      if (key == 'w') {     // restores group of circles to original size and makes them "blend in" with the other circle group
          d += 2;           // (adopts same color as CircleGroup objects)
          if (d > 25){
            d = 25;
            c = color(0, 0, random(100));
          }
      }
    
    }

  }


}