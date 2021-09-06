 const startGameButtom = document.getElementById('inicio');

 if (startGameButtom) {
  startGameButtom.addEventListener('click', e =>{
    let instrucciones = document.getElementById('instrucciones');
    while (instrucciones.hasChildNodes()) {
    instrucciones.removeChild(instrucciones.firstChild)
    }
    myGameArea.start();
  })
 }

 const myGameArea = {

  canvas: document.createElement('canvas'),

  start : function () {
    
  }

 }