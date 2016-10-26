function Circle(locX, locY) { //Circle class
  this.x = locX;
  this.y = locY;
  var diameter = 30;
 
 //defines shape for all circles 
  this.create = function() {
    ellipse(this.x, this.y, diameter, diameter);
  }
}