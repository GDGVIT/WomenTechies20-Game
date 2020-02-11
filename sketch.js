

// THE GAME=====================


    let paddleX = 100,
    paddleY = 100,
    no = 0;
  var ball=[];
  var ballX = [];
  var ballY = [];
  var yes = 0;
  var s = 0;
  var points = 0;
  var loseCheck = [];
  let girl;
  var timer = 2000;
  var speedball = 1;
  var deleter = 0;
function preload(){
    girl = loadImage('./girlpng.png');  
}
function setup() {
    if(screen.width > 780){
        winsWidth = screen.width/2;
    }else{
        winsWidth = screen.width - 50;
    }
  createCanvas(winsWidth, windowHeight);
  strokeWeight(20.0);
  stroke(255, 100);
  frameRate(60)
//   noCursor();
//   for(var i=0;i<100;i++){ //loop 5 times
//     //put an object in the array for each loop
//     var d=random(100,200);
    ballX[0] = random(width);
    loseCheck[0] == 0;
    ball[0] = new Ball(ballX[0], -30, 30); 
//   }
}

function draw() {
  background(0);

  paddleX = mouseX;
  paddleY = windowHeight - 50;
  
//   segment(x, y, angle1);
  drawPaddle(paddleX, paddleY);
//   setTimeout(function(){
//       console.log('et')
//     }, 1000); 
  for(var i=points;i<no;i=i+1){ //loop 5 times
    ball[i].display();
     //run the display function of the object
    ball[i].move(i);
    // loseCheck[i]=0;
    checkCollide(i);
  }
  textSize(16);
    text(points , 40,40);
}


function addBall(){
    no += 1;
    xxx = random(width);
    ball[no] = new Ball(xxx, 0, 30);
    ballX[no] = xxx;
    loseCheck[no] = 0;
    // console.log("this is hap")
}
setInterval(function(){ 
    speedball += 0.2;
    if(timer > 500){
        timer = timer - 200;
    }else{
        timer = 100;
    }
 }, 1500);
setInterval(function(){ 
    addBall();
    // console.log(speedball)
    // console.log(timer)
 }, 1000);


 function checkCollide(i){
     if(ballY[i] > (paddleY-45)){
        if(ballX[i] > (paddleX-30) && ballX[i] < (paddleX+30) && ballY[i] < (paddleY+45) ){
            points = i+1;
            loseCheck[i] = 1
            console.log("points = ", points)
        }
    }
    if(ballY[i] > (paddleY+45) && loseCheck[i] == 0){
        fill(255);
      text("GAME OVER!", width/2-50, height/2);
      text("you collected " + points + " opportunities!", width/2 - 100, height/2 + 50);
      text("redirecting to Home page in 10 seconds", width/2-140, height/2 + 100);
        noLoop();
        setTimeout("restartScreen()", 10000);
    }
 }


class Ball {
    //The constructor (note no variable declarations above the constructor)  
    constructor(x, y, d) { //pulser has 3 arguments 
    this.x = x; //this refers to the variables in the class. Need to use this in front of all variables.
    this.y = y;
    this.d = d;
  }
 
   //Functions 
  display() {
    fill(255, 255, 255);

    ellipse(this.x, this.y, 30); 
  }
 
 
  move(i) {
   this.y+=speedball; 
   ballY[i] = this.y;
//    console.log(ballY[i])
  }
}

function drawPaddle(dx, dy) {
    // console.log("this is being clled")
    stroke(100); // color of paddle border
    strokeWeight(4); // border thickness of 4px
    ellipse(dx, dy, 60);
  }


// GAME END

function restartScreen(){
    window.location.replace("./index.html"); 
}