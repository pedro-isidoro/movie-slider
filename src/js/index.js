// SETA AVANCAR
const setaAvancarsw = document.getElementById("forward-arrow");
const setaAvancarhsm = document.getElementById("forward-arrow-1");
const setaAvancarh = document.getElementById("forward-arrow-2");
const setaAvancart = document.getElementById("forward-arrow-3");

// SETA VOLTAR
const setaVoltarsw = document.getElementById("back-arrow");
const setaVoltarhsm = document.getElementById("back-arrow-1");
const setaVoltarh = document.getElementById("back-arrow-2");
const setaVoltart = document.getElementById("back-arrow-3");

// IMAGENS
const imagensSW = document.querySelectorAll(".slide-sw");
const imagensH = document.querySelectorAll(".slide-h");
const imagensT = document.querySelectorAll(".slide-t");
const imagensHSM = document.querySelectorAll(".slide-hsm");

// CLASSES DE OPACIDADE 1
const mostrarSW = document.querySelector(".show");
const mostrarHSM = document.querySelector(".show-1");
const mostrarH = document.querySelector(".show-2");
const mostrarT = document.querySelector(".show-3");

let imagemAtual = 0;

setaAvancarsw.addEventListener("click", () => {avancar (0, imagensSW, setaAvancarsw) });
setaVoltarsw.addEventListener("click", () => {voltar (0, imagensSW, setaVoltarsw) });

setaAvancarh.addEventListener("click", () => {avancar (1, imagensH, setaVoltarh) });
setaVoltarh.addEventListener("click", () => {voltar (1, imagensH, setaVoltarh) });

setaAvancart.addEventListener("click", () => {avancar (2, imagensT, setaVoltart) });
setaVoltart.addEventListener("click", () => {voltar (2, imagensT, setaVoltart) });

setaAvancarhsm.addEventListener("click", () => {avancar (3, imagensHSM, setaVoltarhsm) });
setaVoltarhsm.addEventListener("click", () => {voltar (3, imagensHSM, setaVoltarhsm) });

function avancar(i, imagens, setaAvancar) {
  if (imagemAtual === imagens.length - 1) {
    return;
  }

  imagemAtual++;
  esconderImagemAberta(i);
  mostrarImagem(imagens);
  mostrarOuEsconderSetaAvancar(i, imagens, setaAvancar);
}

function voltar(i, imagens, setaVoltar) {
    if (imagemAtual === 0) {
        return;
      }
    
      imagemAtual--;
    
      esconderImagemAberta(i);
      mostrarImagem(imagens);
      mostrarOuEsconderSetaVoltar(i, setaVoltar);
}

function esconderImagemAberta(i) {
  switch(i){
    case 0:
      mostrarSW.classList.remove("show");
      break;
    case 1:
      mostrarH.classList.remove("show-2");
      break;
    case 2:
      mostrarT.classList.remove("show-3");
      break;
    case 3:
      mostrarHSM.classList.remove("show-1");
      break;
  }
}

function mostrarImagem(imagens) {
  imagens[imagemAtual].classList.add("show");
}

function mostrarOuEsconderSetaAvancar(i, imagens, setaAvancar) {
  const EhAUltimaImagem = imagemAtual !== 0 && imagemAtual === imagens.length - 1;
  if (EhAUltimaImagem) {
    switch(i){
      case 0:
        setaAvancar.classList.add("opacidade");
        break;
      case 1:
        setaAvancar.classList.add("opacidade-1");
        break;
      case 2:
        setaAvancar.classList.add("opacidade-2");
        break;
      case 3:
        setaAvancar.classList.add("opacidade-3");
        break;
    }
  } else {
    switch(i){
      case 0:
        setaAvancar.classList.remove("opacidade");
        break;
      case 1:
        setaAvancar.classList.remove("opacidade-1");
        break;
      case 2:
        setaAvancar.classList.remove("opacidade-2");
        break;
      case 3:
        setaAvancar.classList.remove("opacidade-3");
        break;
    }
  }
}

function mostrarOuEsconderSetaVoltar(i, setaVoltar) {
  const naoEhAPrimeiraImagem = imagemAtual !== 0;
  if (naoEhAPrimeiraImagem) {
    switch(i){
      case 0:
        setaVoltar.classList.remove("opacidade");
        break;
      case 1:
        setaVoltar.classList.remove("opacidade-1");
        break;
      case 2:
        setaVoltar.classList.remove("opacidade-2");
        break;
      case 3:
        setaVoltar.classList.remove("opacidade-3");
        break;
    }
  } else {
    switch(i){
      case 0:
        setaVoltar.classList.add("opacidade");
        break;
      case 1:
        setaVoltar.classList.add("opacidade-1");
        break;
      case 2:
        setaVoltar.classList.add("opacidade-2");
        break;
      case 3:
        setaVoltar.classList.add("opacidade-3");
        break;
    }
  }
}