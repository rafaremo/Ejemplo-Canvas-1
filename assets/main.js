//Variables
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var imagenes = {
  BackGround: 'http://www.nesmaps.com/maps/SuperMarioBrothers/images/SMB1-1BG.png',
  mario: 'http://pngimg.com/uploads/mario/mario_PNG55.png',
  goomba: 'https://i.pinimg.com/originals/c7/9a/5c/c79a5c3909b657ba83c1d2b025a31acb.png'
}

//Todo en un videojuego es un objeto!!!!
//Clases
function Cuadrado(x, y, width, height){
  this.x = x ? x : 0;
  this.y = y ? y : 0;
  this.width = width ? width : 50;
  this.height = height ? height : 50;
  
  this.draw = function(){
    ctx.strokeRect(this.x, this.y, this.width, this.height);
  }
}

function Personaje(x, y, width, height, url){
  Cuadrado.call(this, x, y, width, height);
  this.image = new Image();
  this.image.src = url;
  this.image.onload = function(){
    this.draw();
  }.bind(this);

  this.draw = function(){
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}

// function BackGround(x, y, width, height, url){
//   Cuadrado.call(this, x, y, width, height);
//   this.image = new Image();
//   this.image.src = url;
//   this.image.onload = function(){
//     this.draw();
//   }.bind(this);

//   this.draw = function(){
//     ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
//   }
// }

class BackGround{
  constructor(x=0, y=0, width=canvas.width, height=canvas.height){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.image = new Image();
    this.image.src = imagenes.BackGround;
    this.image.onload = function(){
      this.draw();
    }.bind(this);
  }

  draw(){
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
  }
}

//Instancias
// var cubito = new Cuadrado();
// var cuadradin = new Cuadrado(50, 50, 100, 100);
var fondo = new BackGround();
var mario = new Personaje(226, 226, 50, 50, imagenes.mario);
var goomba = new Personaje(300, 390, 50, 50, imagenes.goomba);

//TEST CANVAS
// var canvas = document.getElementById('canvas');
// var ctx = canvas.getContext('2d');

// ctx.fillStyle = 'peru';
// ctx.fillRect(0, 0, 50, 50);

