/*// Slides
const imagensSW = document.querySelectorAll(".slide-sw");
const imagensHSM = document.querySelectorAll(".slide-hsm");
const imagensH = document.querySelectorAll(".slide-h");
const imagensT = document.querySelectorAll(".slide-t");

// Arrows
const setaVoltar = document.getElementById("back-arrow");
const setaAvancar = document.getElementById("forward-arrow");
const setaVoltarHSM = document.getElementById("back-arrow-1");
const setaAvancarHSM = document.getElementById("forward-arrow-1");
const setaVoltarH = document.getElementById("back-arrow-2");
const setaAvancarH = document.getElementById("forward-arrow-2");
const setaVoltarT = document.getElementById("back-arrow-3");
const setaAvancarT = document.getElementById("forward-arrow-3");

// images
let imagemAtualSW = 0;
let imagemAtualHSM = 0;
let imagemAtualH = 0;
let imagemAtualT = 0;

// STAR WARS
setaAvancar.addEventListener("click", function(){
    if(imagemAtualSW === imagensSW.length - 1){
        return;
    };

    imagemAtualSW ++;

    esconderImagemAberta();
    mostrarImagem();
    mostrarOuEsconderSetas();
});

setaVoltar.addEventListener("click", function(){
    if(imagemAtualSW === 0){
        return;
    };

    imagemAtualSW --;

    esconderImagemAberta();
    mostrarImagem();
    mostrarOuEsconderSetas();
});

function esconderImagemAberta(){
    const imagemAberta = document.querySelector(".show");
    imagemAberta.classList.remove("show")
};

function mostrarImagem(){
    imagensSW[imagemAtualSW].classList.add("show");
};

function mostrarOuEsconderSetas(){
    const naoEhAPrimeiraImagem = imagemAtualSW !== 0;
    if(naoEhAPrimeiraImagem){
        setaVoltar.classList.remove("opacity");
    }else{
        setaVoltar.classList.add("opacity");
    }

    const EhAUltimaImagem = imagemAtualSW !== 0 && imagemAtualSW === imagensSW.length - 1;
    if(EhAUltimaImagem){
        setaAvancar.classList.add("opacity");
    }else{
        setaAvancar.classList.remove("opacity");
    }
};

// HIGH SCHOOL MUSICAL
setaAvancarHSM.addEventListener("click", function(){
    if(imagemAtualHSM === imagensHSM.length - 1){
        return;
    };

    imagemAtualHSM ++;

    esconderImagemAbertaHSM();
    mostrarImagemHSM();
    mostrarOuEsconderSetasHSM();
});

setaVoltarHSM.addEventListener("click", function(){
    if(imagemAtualHSM === 0){
        return;
    };

    imagemAtualHSM --;

    esconderImagemAbertaHSM();
    mostrarImagemHSM();
    mostrarOuEsconderSetasHSM();
});

function esconderImagemAbertaHSM(){
    const imagemAbertaHSM = document.querySelector(".show-1");
    imagemAbertaHSM.classList.remove("show-1")
};

function mostrarImagemHSM(){
    imagensHSM[imagemAtualHSM].classList.add("show-1");
};

function mostrarOuEsconderSetasHSM(){
    const naoEhAPrimeiraImagemHSM = imagemAtualHSM !== 0;
    if(naoEhAPrimeiraImagemHSM){
        setaVoltarHSM.classList.remove("opacity-1");
    }else{
        setaVoltarHSM.classList.add("opacity-1");
    }

    const EhAUltimaImagemHSM = imagemAtualHSM !== 0 && imagemAtualHSM === imagensHSM.length - 1;
    if(EhAUltimaImagemHSM){
        setaAvancarHSM.classList.add("opacity-1");
    }else{
        setaAvancarHSM.classList.remove("opacity-1");
    }
};

// HOBBIT
setaAvancarH.addEventListener("click", function(){
    if(imagemAtualH === imagensH.length - 1){
        return;
    };

    imagemAtualH ++;

    esconderImagemAbertaH();
    mostrarImagemH();
    mostrarOuEsconderSetasH();
});

setaVoltarH.addEventListener("click", function(){
    if(imagemAtualH === 0){
        return;
    };

    imagemAtualH --;

    esconderImagemAbertaH();
    mostrarImagemH();
    mostrarOuEsconderSetasH();
});

function esconderImagemAbertaH(){
    const imagemAbertaH = document.querySelector(".show-2");
    imagemAbertaH.classList.remove("show-2")
};

function mostrarImagemH(){
    imagensH[imagemAtualH].classList.add("show-2");
};

function mostrarOuEsconderSetasH(){
    const naoEhAPrimeiraImagemH = imagemAtualH !== 0;
    if(naoEhAPrimeiraImagemH){
        setaVoltarH.classList.remove("opacity-2");
    }else{
        setaVoltarH.classList.add("opacity-2");
    }

    const EhAUltimaImagemH = imagemAtualH !== 0 && imagemAtualH === imagensH.length - 1;
    if(EhAUltimaImagemH){
        setaAvancarH.classList.add("opacity-2");
    }else{
        setaAvancarH.classList.remove("opacity-2");
    }
};

// TRANSFORMERS
setaAvancarT.addEventListener("click", function(){
    if(imagemAtualT === imagensT.length - 1){
        return;
    };

    imagemAtualT ++;

    esconderImagemAbertaT();
    mostrarImagemT();
    mostrarOuEsconderSetasT();
});

setaVoltarT.addEventListener("click", function(){
    if(imagemAtualT === 0){
        return;
    };

    imagemAtualT --;

    esconderImagemAbertaT();
    mostrarImagemT();
    mostrarOuEsconderSetasT();
});

function esconderImagemAbertaT(){
    const imagemAbertaT = document.querySelector(".show-3");
    imagemAbertaT.classList.remove("show-3")
};

function mostrarImagemT(){
    imagensT[imagemAtualT].classList.add("show-3");
};

function mostrarOuEsconderSetasT(){
    const naoEhAPrimeiraImagemT = imagemAtualT !== 0;
    if(naoEhAPrimeiraImagemT){
        setaVoltarT.classList.remove("opacity-3");
    }else{
        setaVoltarT.classList.add("opacity-3");
    }

    const EhAUltimaImagemT = imagemAtualT !== 0 && imagemAtualT === imagensT.length - 1;
    if(EhAUltimaImagemT){
        setaAvancarT.classList.add("opacity-3");
    }else{
        setaAvancarT.classList.remove("opacity-3");
    }
};*/

const imagensSW = document.querySelectorAll(".slide-sw");
const imagensHSM = document.querySelectorAll(".slide-hsm");
const imagensH = document.querySelectorAll(".slide-h");
const imagensT = document.querySelectorAll(".slide-t");

const backArrow = document.querySelectorAll(".back-arrow");
const forwardArrow = document.querySelectorAll(".forward-arrow");

