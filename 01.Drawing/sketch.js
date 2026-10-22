function setup() {
  createCanvas(640, 480);
}

function draw() {
  background(255,120,0);

  
  fill(255, 0, 0); 
  stroke(0);
  strokeWeight(3);
  circle(320, 240, 400); // x, y, diameter


  noFill();
  stroke(0);
  strokeWeight(5);
  arc(260, 210, 50, 30, PI, TWO_PI); // x, y, width, height, start angle, end angle
  arc(380, 210, 50, 30, PI, TWO_PI)

  
  fill(0);
  noStroke();
  ellipse(320, 310, 70, 90); 

  
  fill(255, 165, 0); 
  noStroke();
  rect(245, 230, 30, 150, 10); // x, y, width, height, corner radius
  rect(365, 230, 30, 150, 10); 
}