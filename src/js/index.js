const setaAvancarsw = document.getElementById("forward-arrow");
const setaAvancarhsm = document.getElementById("forward-arrow-1");

const setaVoltarsw = document.getElementById("back-arrow");
const setaVoltarhsm = document.getElementById("back-arrow-1");

const imagensSW = document.querySelectorAll(".slide-sw");
const imagensHSM = document.querySelectorAll(".slide-hsm");

const mostrarSW = document.querySelector(".show");
const mostrarHSM = document.querySelector(".show-1");

const opacidadeSW = document.querySelector(".opacity");
const opacidadeHSM = document.querySelector(".opacity-1");

let imagemAtual = 0;

setaAvancarsw.addEventListener("click", avancar(imagensSW, setaAvancarsw, mostrarSW, "show", opacidadeSW));
setaAvancarhsm.addEventListener("click", avancar(imagensHSM, setaVoltarhsm, mostrarHSM, "show-1", opacidadeHSM));

setaVoltarsw.addEventListener("click", voltar(imagensSW, setaVoltarsw, mostrarSW, "show" ,opacidadeSW));
setaVoltarhsm.addEventListener("click", voltar(imagensHSM, setaVoltarhsm, mostrarHSM, "show-1", opacidadeHSM));

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
      mostrarImagem(imagens, mostrar);
      mostrarOuEsconderSetaVoltar(setaVoltar, opacidade);
}

function esconderImagemAberta(mostrar, show) {
  const imagemAberta = mostrar;
  imagemAberta.classList.remove(show);
}

function mostrarImagem(imagens, mostrar) {
  imagens[imagemAtual].classList.add(mostrar);
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