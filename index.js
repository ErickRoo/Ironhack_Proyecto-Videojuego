let canvas = document.createElement('canvas')
let context = canvas.getContext('2d');
let instrucciones = document.getElementById('instrucciones');

const startGameButtom = document.getElementById('inicio');

 if (startGameButtom) {
  startGameButtom.addEventListener('click', e =>{
    while (instrucciones.hasChildNodes()) {
    instrucciones.removeChild(instrucciones.firstChild)
    }
    myGameArea.start();
  })
 }

 const myGameArea = {
  canvas : canvas,
  context : context,
  start : function () {
    this.canvas.width = 480;
    this.canvas.height = 480;
    this.context = context;
    instrucciones.appendChild(this.canvas);
  }

 }