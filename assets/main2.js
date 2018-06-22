var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
//ctx.fillRect(0,0,50,50);

//Constantes
var interval;
var frames = 0;
var ballArr =[];
//Clases
function Cubo(x, color){
  this.x = x || 0;
  this.y = 0;
  this.width = 50;
  this.height = 50;
  this.directionY = 'down';
  this.directionX = 'right';
  this.color = color ? color : 'red';

  this.draw = function(){
    if(this.directionY === 'down'){
      this.y++;
      if(this.y>256) this.directionY = 'up';
    } else {
      this.y--;
      if(this.y<1) this.directionY = 'down';
    }
    if(this.directionX === 'right'){
      this.x++;
      if(this.x>256) this.directionX = 'left';
    } else {
      this.x--;
      if(this.x<1) this.directionX = 'right';
    }
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

function Board(){
  this.scoreL = 0;
  this.scoreR = 0;

  this.draw = function(){
    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.strokeStyle = 'lightgrey';
    ctx.lineWidth=10;
    ctx.setLineDash([]);
    ctx.moveTo(0,5);
    ctx.lineTo(512,5);
    ctx.moveTo(0,507);
    ctx.lineTo(512,507);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.setLineDash([10,10]);
    ctx.moveTo(256,0);
    ctx.lineTo(256,512);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.setLineDash([]);
    ctx.lineWidth=1;
    ctx.font = "50px Arial";
    ctx.strokeText(this.scoreL,190,55);
    ctx.strokeText(this.scoreR,266,55);
    ctx.closePath();

  }
}

class Ball{
  constructor(x=10, y=200){
    this.x = x;
    this.y = y;
    this.radius = 10;
    this.colors = ['yellow', 'green', 'peru', 'blue']
    this.color = this.colors[Math.floor(Math.random()*this.colors.length)];
    //directions
    this.vX = 5;
    this.vY = 5;
  }

  moveX(){
    if(this.x < this.radius) {
      this.vX *= -1;
      back.scoreL += 1;
      this.color = this.colors[Math.floor(Math.random()*this.colors.length)];
    }
    if(this.x > (canvas.width - this.radius)) {
      this.vX *= -1;
      back.scoreR += 1;
      this.color = this.colors[Math.floor(Math.random()*this.colors.length)];
    }
    this.x += this.vX;
  }

  moveY(){
    if(this.y < (this.radius + 10)) this.vY *= -1;
    if(this.y > (canvas.height - (this.radius + 10))) this.vY *= -1;
    this.y -= this.vY;
  }

  moveAll(){
    this.moveX();
    this.moveY();
  }

  draw(){
    this.moveAll();
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,true);
    ctx.fill();
    ctx.closePath();
  }
}

//instancias
//var cubo1 = new Cubo(null, 'yellow');
//var cubo2 = new Cubo(100, 'fuchsia');
var back = new Board();
// var pelotita = new Ball();
// var pelotita2 = new Ball(200,20);

//mainfunctions
//3 principales en todo juego...
  //1.-
function update(){
  frames++;
  ctx.clearRect(0,0,canvas.width, canvas.height);
  //cubo1.draw();
  //cubo2.draw();
  back.draw();
  generateBall();
  drawBalls();
}

  //2.-
function start(){
  interval = setInterval(update,1000/60);
}


//listeners
document.getElementById('start').addEventListener('click', start);

//aux functions
function generateBall(){
  if(frames%120 === 0){
  // for(var j=0; j<100; j++){
  //   var randX = Math.floor(Math.random()*(canvas.width-20))+10;
  //   var randY = Math.floor(Math.random()*(canvas.height-20))+10;
  //   var newBall = new Ball(randX,randY);
  //   ballArr.push(newBall);
  // }

    var randX = Math.floor(Math.random()*(canvas.width-20))+10;
    var randY = Math.floor(Math.random()*(canvas.height-40))+20;
    var newBall = new Ball(randX,randY);
    ballArr.push(newBall);
  }
}

function drawBalls(){
  ballArr.forEach(function(ball){
    ball.draw();
  });
}

// addEventListener('keydown', function(e){
//   switch(e.which){
//     case 38:
//       cubo2.directionY = 'up';
//       break;
//     case 40:
//       cubo2.directionY = 'down';
//       break;
//     case 39:
//       cubo2.directionX = 'right';
//       break;
//     case 37:
//       cubo2.directionX = 'left';
//       break;
//     default:
//       break;
//   }
// });

// addEventListener('mousemove', function(e){
//   cubo1.x = e.clientX;
//   cubo1.y = e.clientY;
// });

