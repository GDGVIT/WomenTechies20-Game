

// THE GAME=====================
  let paddleX = 100,
    paddleY = 100,
    no = 0;
  var ball=[];
  var ballX = [];
  var ballY = [];
  var points = 0;
  var loseCheck = [];
  let player,
      bg;
function preload(){
    player = loadImage('./assets/player.png');  
    bg = loadImage('./assets/bg.png');
    bulb = loadImage('./assets/bulb.png')
}
function setup() {
    if(screen.width > 780){
        winsWidth = screen.width/2;
    }else{
        winsWidth = screen.width - 50;
    }
  createCanvas(winsWidth, windowHeight);
  // strokeWeight(20.0);
  // stroke(255, 100);
  image(bg, 0, 0);
  frameRate(60)
//   noCursor();
//   for(var i=0;i<100;i++){ //loop 5 times
//     //put an object in the array for each loop
//     var d=random(100,200);
    ballX[0] = random(25, width-25);
    loseCheck[0] == 0;
    ball[0] = new Ball(ballX[0], -30, 30); 
//   }
}
  function draw() {
    background(bg, 0, 0);
  
    paddleX = mouseX;
    paddleY = windowHeight - 100;
    
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
    fill(252,37,126);
    textSize(24);
      text(points , 40,40);
  }



function addBall(){
    no += 1;
    xxx = random(25, width-25);
    ball[no] = new Ball(xxx, 0, 30);
    ballX[no] = xxx;
    loseCheck[no] = 0;
    
    
    // console.log(floor(qw))
    // console.log("this is hap")
}
setInterval(function(){ 
    addBall();
    // console.log(timer)
 }, 600);


 function checkCollide(i){
     if(ballY[i] > (paddleY-45)){
        if(ballX[i] > (paddleX-30) && ballX[i] < (paddleX+30) && ballY[i] < (paddleY+60) ){
            points = i+1;
            loseCheck[i] = 1
            console.log('hapnin')
        }
    }
    if(ballY[i] > (paddleY+60) && loseCheck[i] == 0){
      fill(164,27,227);
      textSize(30);
      text("GAME OVER!", 0, height/2);
      text("you collected " + points + " opportunities!", 0, height/2 + 50);
      text("click anywhere to restart", 0, height/2 + 100);
      console.log(ballY[i], paddleY)
      noLoop();
      restartScreen();

        // setTimeout("restartScreen()", 10000);
    }
 }


class Ball {
    //The constructor (note no variable declarations above the constructor)  
    constructor(x, y, d) { //pulser has 3 arguments 
    this.x = x; //this refers to the variables in the class. Need to use this in front of all variables.
    this.y = y;
    this.d = d;
    // console.log(this.n)
  }
 
   //Functions 
  display() {
    
    image(bulb, this.x, this.y, 60, 60, 0, 0); 

  }
 
 
  move(i) {
   this.y+=5; 
   ballY[i] = this.y;
//    console.log(ballY[i])
  }
}

function drawPaddle(dx, dy) {
    image(player, dx, dy, 55, 85, 0, 0)
  }


// GAME END

function restartScreen(){
  document.getElementById("clicker").addEventListener('click', function(){
    window.location.replace("./index.html"); 
  });
    
}