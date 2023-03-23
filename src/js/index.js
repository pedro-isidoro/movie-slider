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
const imagensHSM = document.querySelectorAll(".slide-hsm");
const imagensH = document.querySelectorAll(".slide-h");
const imagensT = document.querySelectorAll(".slide-t");

// CLASSES DE OPACIDADE 1
const mostrarSW = document.querySelector(".show");
const mostrarHSM = document.querySelector(".show-1");
const mostrarH = document.querySelector(".show-2");
const mostrarT = document.querySelector(".show-3");

// OPACIDADE DA SETA
const opacidadeSW = document.querySelector(".opacity");
const opacidadeHSM = document.querySelector(".opacity-1");
const opacidadeH = document.querySelector(".opacity-2");
const opacidadeT = document.querySelector(".opacity-3");

let imagemAtual = 0;

setaAvancarsw.addEventListener("click", avancar(imagensSW, setaAvancarsw, mostrarSW, "show", opacidadeSW));
setaAvancarhsm.addEventListener("click", avancar(imagensHSM, setaVoltarhsm, mostrarHSM, "show-1", opacidadeHSM));
setaAvancarh.addEventListener("click", avancar(imagensH, setaVoltarh, mostrarH, "show-2", opacidadeH));
setaAvancart.addEventListener("click", avancar(imagensT, setaVoltart, mostrarT, "show-3", opacidadeT));

setaVoltarsw.addEventListener("click", voltar(imagensSW, setaVoltarsw, mostrarSW, "show" ,opacidadeSW));
setaVoltarhsm.addEventListener("click", voltar(imagensHSM, setaVoltarhsm, mostrarHSM, "show-1", opacidadeHSM));
setaVoltarh.addEventListener("click", voltar(imagensH, setaVoltarh, mostrarH, "show-2", opacidadeH));
setaVoltart.addEventListener("click", voltar(imagensT, setaVoltart, mostrarT, "show-3", opacidadeT));

function avancar(imagens, setaAvancar, mostrar, show, opacidade) {
  if (imagemAtual === imagens.length - 1) {
    return;
  }

  imagemAtual++;
  esconderImagemAberta(mostrar, show);
  mostrarImagem(imagens, mostrar);
  mostrarOuEsconderSetaAvancar(imagens, setaAvancar, opacidade);
}

function voltar(imagens, setaVoltar, mostrar, show, opacidade) {
    if (imagemAtual === 0) {
        return;
      }
    
      imagemAtual--;
    
      esconderImagemAberta(mostrar, show);
      mostrarImagem(imagens, show);
      mostrarOuEsconderSetaVoltar(setaVoltar, opacidade);
}

function esconderImagemAberta(mostrar, show) {
  const imagemAberta = mostrar;
  imagemAberta.classList.remove(show);
}

function mostrarImagem(imagens, show) {
  imagens[imagemAtual].classList.add(show);
}

function mostrarOuEsconderSetaAvancar(imagens, setaAvancar, opacidade) {
  const EhAUltimaImagem =
    imagemAtual !== 0 && imagemAtual === imagens.length - 1;
  if (EhAUltimaImagem) {
    setaAvancar.classList.add(opacidade);
  } else {
    setaAvancar.classList.remove(opacidade);
  }
}

function mostrarOuEsconderSetaVoltar(setaVoltar, opacidade) {
  const naoEhAPrimeiraImagem = imagemAtual !== 0;
  if (naoEhAPrimeiraImagem) {
    setaVoltar.classList.remove(opacidade);
  } else {
    setaVoltar.classList.add(opacidade);
  }
}