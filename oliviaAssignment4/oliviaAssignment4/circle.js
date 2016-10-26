function Circle(locX, locY) { //Circle class
  this.x = locX;
  this.y = locY;
  var diameter = 30;
  
  this.create = function() {
    //fill(160, 160, 160, 100); //gray                          
    ellipse(this.x, this.y, diameter, diameter);
  }
}