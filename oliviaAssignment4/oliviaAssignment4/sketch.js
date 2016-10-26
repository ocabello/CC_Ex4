var x = 0;          //global variables that will be used to control coordinates of main circle
var y = 0;


var ellipses = [];   //array of circles
var smallcirc = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (var i = 0; i < 50; i++) {                                      //initialize array of circles by storing circleGroup
    ellipses.push(new CircleGroup(random(width), random(height)));    //object (defined below)
    smallcirc.push(new SmallCircleGroup(random(width), random(height)));
  }
  
  grayCircle = new Circle(mouseX, mouseY);
  grayCircle.create();

  noCursor();                                                        //hides mouse
}

function draw() {
  background(102, 0, 204); //purple
  
  grayCircle = new Circle(mouseX, mouseY);

  noStroke();
  fill(160, 160, 160, 100); //gray  
  grayCircle.create();


  for (var i = 0; i < ellipses.length; i++) {  //retreives all circleGroup objects from the array to call different functions on them
    fill(0, 0, random(100)); //change to different shades of blue

    ellipses[i].create();  
    ellipses[i].repel(grayCircle.x, grayCircle.y);

   // println(ellipses[i].x);
   // println(ellipses[i].y);
   
    ellipses[i].move();
    
    smallcirc[i].create();
    smallcirc[i].repel(grayCircle.x, grayCircle.y);
    smallcirc[i].shrink();
    

  }


}




