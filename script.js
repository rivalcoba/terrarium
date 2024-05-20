// Usando la funcion dragElement
// para darle propiedades de arrastre
// a las plantas
dragElement(document.getElementById('plant1') );
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

// Creando la funcion dragElement
function dragElement(terrariumElement){
  // Creando unas variabnles de posicion
  let despX = 0, despY = 0, initPosX = 0, initPosY = 0;
  // Funcion elementDrag
  function elementDrag(e){
    // Se calcula el desplazamiento del mouse
    despX = e.clientX - initPosX;
    despY = e.clientY - initPosY;
    // Asignado nueva posicion inicial
    initPosX = e.clientX;
    initPosY = e.clientY;
    // Se le aplica el desplazamiento a la planta
    terrariumElement.style.left = `${terrariumElement.offsetLeft + despX}px`;
    terrariumElement.style.top = `${terrariumElement.offsetTop + despY}px`;
  }
  // Parando funcionalidad de arrastre
  function stopElementDrag(){
    document.onpointerup = null;
    document.onpointermove = null;
  }
  // PointerDrag function
  function pointerDrag(event){
    // Previene el funcionamieto por defecto
    event.preventDefault();
    initPosX = event.clientX;
    initPosY = event.clientY;
    // console.log(`initPosX> ${initPosX}`);
    // console.log(`initPosY> ${initPosY}`);
    // Realizando funcion de arrastre
    document.onpointermove = elementDrag;
    // Funcion que se ejecuta cuando
    // el usuario suelta el boton
    document.onpointerup = stopElementDrag;
  }
  // Detectando el evento de sujetar
  terrariumElement.onpointerdown = pointerDrag;
}