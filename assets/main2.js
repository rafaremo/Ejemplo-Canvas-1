var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
//ctx.fillRect(0,0,50,50);

//Constantes
var interval;

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

//instancias
var cubo1 = new Cubo(null, 'yellow');
var cubo2 = new Cubo(100, 'fuchsia');

//mainfunctions
//3 principales en todo juego...
  //1.-
function update(){
  ctx.clearRect(0,0,canvas.width, canvas.height);
  cubo1.draw();
  cubo2.draw();
}

  //2.-
function start(){
  interval = setInterval(update,1000/60);
}


//listeners
document.getElementById('start').addEventListener('click', start);

addEventListener('keydown', function(e){
  switch(e.which){
    case 38:
      cubo2.directionY = 'up';
      break;
    case 40:
      cubo2.directionY = 'down';
      break;
    case 39:
      cubo2.directionX = 'right';
      break;
    case 37:
      cubo2.directionX = 'left';
      break;
    default:
      break;
  }
});

// addEventListener('mousemove', function(e){
//   cubo1.x = e.clientX;
//   cubo1.y = e.clientY;
// });

