/*// SETA AVANCAR
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
// console.log(imagensSW);
const imagensH = document.querySelectorAll(".slide-h");
// console.log(imagensH);
const imagensT = document.querySelectorAll(".slide-t");
// console.log(imagensT);
const imagensHSM = document.querySelectorAll(".slide-hsm");
// console.log(imagensHSM);

let imagemAtualSW = 0;
let imagemAtualH = 0;
let imagemAtualT = 0;
let imagemAtualHSM = 0;

// CLASSES DE OPACIDADE 1
const mostrarSW = document.querySelector(".show");
const mostrarHSM = document.querySelector(".show-1");
const mostrarH = document.querySelector(".show-2");
const mostrarT = document.querySelector(".show-3");

// EVENTLISTENER
setaAvancarsw.addEventListener("click", () => { avancar(imagemAtualSW, 0, imagensSW, setaAvancarsw); });
setaVoltarsw.addEventListener("click", () => { voltar(imagemAtualSW, 0, imagensSW, setaVoltarsw); });

setaAvancarh.addEventListener("click", () => { avancar(imagemAtualH, 1, imagensH, setaVoltarh); });
setaVoltarh.addEventListener("click", () => { voltar(imagemAtualH, 1, imagensH, setaVoltarh); });

setaAvancart.addEventListener("click", () => { avancar(imagemAtualT, 2, imagensT, setaVoltart); });
setaVoltart.addEventListener("click", () => { voltar(imagemAtualT, 2, imagensT, setaVoltart); });

setaAvancarhsm.addEventListener("click", () => { avancar(imagemAtualHSM, 3, imagensHSM, setaVoltarhsm); });
setaVoltarhsm.addEventListener("click", () => { voltar(imagemAtualHSM, 3, imagensHSM, setaVoltarhsm); });

function avancar(imagemAtual, i, imagens, setaAvancar) {
  console.log(imagemAtual)
  if (imagemAtual === imagens.length - 1) {
    return;
  }

  imagemAtual++;
  console.log("imagem atual agora: ", imagemAtual);
  esconderImagemAberta(i);
  mostrarImagem(i, imagens, imagemAtual);
  mostrarOuEsconderSetaAvancar(imagemAtual, i, imagens, setaAvancar);
};

function voltar(imagemAtual, i, imagens, setaVoltar) {
  if (imagemAtual === 0) {
    return;
  }

  imagemAtual--;
  console.log("imagem atual agora: ", imagemAtual);
  esconderImagemAberta(i);
  mostrarImagem(i, imagens, imagemAtual);
  mostrarOuEsconderSetaVoltar(imagemAtual, i, setaVoltar);
};

function esconderImagemAberta(i) {
  switch (i) {
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
  };
};

function mostrarImagem(i, imagens, imagemAtual) {
  switch(i){
    case 0:
      imagens[imagemAtual].classList.add("show");
      break;
    case 1:
      imagens[imagemAtual].classList.add("show-2");
      break;
    case 2:
      imagens[imagemAtual].classList.add("show-3");
      break;
    case 3:
      imagens[imagemAtual].classList.add("show-1");
      break;
  };
};

function mostrarOuEsconderSetaAvancar(imagemAtual, i, imagens, setaAvancar) {
  const EhAUltimaImagem = imagemAtual !== 0 && imagemAtual === imagens.length - 1;
  if (EhAUltimaImagem) {
    switch (i) {
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
    };
  } else {
    switch (i) {
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
    };
  };
};

function mostrarOuEsconderSetaVoltar(imagemAtual, i, setaVoltar) {
  const naoEhAPrimeiraImagem = imagemAtual !== 0;
  if (naoEhAPrimeiraImagem) {
    switch (i) {
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
    };
  } else {
    switch (i) {
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
    };
  };
};*/

const imagesSW = [
  "./src/images/movies/star-wars-I.jpg",
  "./src/images/movies/star-wars-II.jpg",
  "./src/images/movies/star-wars-III.jpg",
  "./src/images/movies/star-wars-IV.jpg",
  "./src/images/movies/star-wars-han-solo.jpg",
  "./src/images/movies/star-wars-rogue-one.jpg",
  "./src/images/movies/star-wars-V.png",
  "./src/images/movies/star-wars-VI.jpg",
  "./src/images/movies/star-wars-VII.jpg",
  "./src/images/movies/star-wars-VIII.jpg",
  "./src/images/movies/star-wars-IX.jpg",
];

let currentImageIndex = 0;

const imageElement = document.getElementById("image-sw");

function showImageSW() {
  imageElement.src = imagesSW[currentImageIndex];
};

function forwardArrow() {
  if(currentImageIndex === imagesSW.length - 1){
    return
  };

  currentImageIndex = (currentImageIndex + 1) % imagesSW.length;
  showImageSW();
};

function backArrow() {
  if(currentImageIndex === 0){
    return
  };
  currentImageIndex = (currentImageIndex + imagesSW.length - 1) % imagesSW;
  showImageSW();
};

showImageSW();

document.getElementById("forward-arrow").addEventListener("click", forwardArrow);
document.getElementById("back-arrow").addEventListener("click", backArrow);