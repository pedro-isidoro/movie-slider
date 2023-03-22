const setaVoltarsw = document.getElementById("back-arrow");
const setaVoltarhsm = document.getElementById("back-arrow-1");

const setaAvancarsw = document.getElementById("forward-arrow");
const setaAvancarhsm = document.getElementById("forward-arrow-1");

const imagensSW = document.querySelectorAll(".slide-sw");
const imagensHSM = document.querySelectorAll(".slide-hsm");

let imagemAtual = 0;

setaAvancarsw.addEventListener("click", avancar(imagensSW, setaAvancarsw));
setaAvancarhsm.addEventListener("click", avancar(imagensHSM, setaVoltarhsm));
setaVoltarsw.addEventListener("click", voltar(imagensSW, setaVoltarsw));
setaVoltarhsm.addEventListener("click", voltar(imagensHSM, setaVoltarhsm));

function avancar(imagens, setaAvancar) {
  if (imagemAtual === imagens.length - 1) {
    return;
  }

  imagemAtual++;
  esconderImagemAberta();
  mostrarImagem(imagens);
  mostrarOuEsconderSetaAvancar(imagens, setaAvancar);
}

function voltar(imagens, setaVoltar) {
    if (imagemAtual === 0) {
        return;
      }
    
      imagemAtual--;
    
      esconderImagemAberta();
      mostrarImagem(imagens);
      mostrarOuEsconderSetaVoltar(setaVoltar);
}

function esconderImagemAberta() {
  const imagemAberta = document.querySelector(".show");
  imagemAberta.classList.remove("show");
}

function mostrarImagem(imagens) {
  imagens[imagemAtual].classList.add("show");
}

function mostrarOuEsconderSetaAvancar(imagens, setaAvancar) {
  const EhAUltimaImagem =
    imagemAtual !== 0 && imagemAtual === imagens.length - 1;
  if (EhAUltimaImagem) {
    setaAvancar.classList.add("opacity");
  } else {
    setaAvancar.classList.remove("opacity");
  }
}

function mostrarOuEsconderSetaVoltar(setaVoltar) {
  const naoEhAPrimeiraImagem = imagemAtual !== 0;
  if (naoEhAPrimeiraImagem) {
    setaVoltar.classList.remove("opacity");
  } else {
    setaVoltar.classList.add("opacity");
  }
}