function SmallCircleGroup(locX, locY) {

  CircleGroup.call(this, locX, locY);
  var d = 25;
  var c = color(random(80), 0, 0, 100);

  this.create = function() {
    //  fill(random(80), 0, 0);
    fill(c);
    ellipse(this.x, this.y, d, d);
  }

  this.shrink = function() {

    if (keyIsPressed) {

      if (key == 'q') {
        d -= 2;

        if (d < 0) {
          d = 0;
        }
      c = color(random(80), 0, 0, 100);

      }

      if (key == 'w') {
          d += 2;
          if (d > 25){
            d = 25;
            c = color(0, 0, random(100));
          }
      }
    
    }

  }


}