dragElement(document.getElementById('plant1'));
dragElement(document.getElementById('plant2'));
dragElement(document.getElementById('plant3'));
dragElement(document.getElementById('plant4'));
dragElement(document.getElementById('plant5'));
dragElement(document.getElementById('plant6'));
dragElement(document.getElementById('plant7'));
dragElement(document.getElementById('plant8'));
dragElement(document.getElementById('plant9'));
dragElement(document.getElementById('plant10'));
dragElement(document.getElementById('plant11'));
dragElement(document.getElementById('plant12'));
dragElement(document.getElementById('plant13'));
dragElement(document.getElementById('plant14'));

function dragElement(terrariumElement) {
  // Estableciendo posiciones iniciales
  let despX = 0, despY = 0, initPosX = 0, initPosY = 0;
  // Se le asigna al terrariumElement
  // un manejador de eventos llamado pointerDrag para el
  // listener onpointerdown
  terrariumElement.onpointerdown = pointerDrag;

  // Funcion pointerDrag
  function pointerDrag(event){
    // Se previene el funcionamiento por defecto
    // Un fantasma de arrastre
    event.preventDefault();
    // Se accedede a la posicion del mouse
    // mediante las propiedades clientX y clientY
    // del evento
    initPosX = event.clientX;
    initPosY = event.clientY;
    // Se crea la funcion de arrastre
    // dentro del estado pointerDrag
    document.onpointermove = elementDrag;
    // Se crea la funcion de soltar
    // dentro del estado pointerDrag
    document.onpointerup = stopElementDrag;

    // Funcion elementDrag
    function elementDrag(eventOnPointerMove){
      // Se calcula el desplazamiento
      // como la diferencia de la posicion actual
      // menos la posicion inicial
      despX = eventOnPointerMove.clientX - initPosX;
      despY = eventOnPointerMove.clientY - initPosY;
      // Se actualiza la posicion inicial del mouse
      initPosX = eventOnPointerMove.clientX;
      initPosY = eventOnPointerMove.clientY;
      // Se imprimen las posiciones
      console.log(despX, despY, initPosX, initPosY);
      // Se le aplica offset al elemento, es decir se desplaza a la nueva
      // posicion del mouse
      terrariumElement.style.left = `${terrariumElement.offsetLeft + despX}px`;
      terrariumElement.style.top = `${terrariumElement.offsetTop + despY}px`;
    }
    //  Función de liberación
    function stopElementDrag() {
      document.onpointerup = null;
      document.onpointermove = null;
    }
  }
}