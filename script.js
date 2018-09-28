let listaInputCor = document.querySelectorAll(".cor");
let botao = document.querySelector('button');
let body = document.querySelector('body');
let seguidor = document.querySelector("#seguidor");

function aleatorio(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function trocarCor(event){
  let cor;
  if(event.target.tagName === "INPUT"){
    cor = event.target.value;
  }
  else if(event.target.tagName === "BUTTON"){
    cor = `rgb(${aleatorio(0,255)}, ${aleatorio(0,255)}, ${aleatorio(0,255)})`;
  }
  event.target.style.backgroundColor = cor;
}

function acompanhar(event){
  seguidor.style.top = `${event.pageY}px`;
  seguidor.style.left = `${event.pageX}px`;
}


for(let inputCor of listaInputCor){
  inputCor.onkeyup = trocarCor;
}

botao.onclick = trocarCor;
body.onmousemove = acompanhar;