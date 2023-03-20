const imagensSW = document.querySelectorAll(".slide-sw");
const imagensHSM = document.querySelectorAll(".slide-hsm");
const setaVoltar = document.getElementById("back-arrow");
const setaAvancar = document.getElementById("forward-arrow");
const setaVoltarHSM = document.getElementById("back-arrow-1");
const setaAvancarHSM = document.getElementById("forward-arrow-1");

let imagemAtualSW = 0;
let imagemAtualHSM = 0;

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
        setaVoltarHSM.classList.remove("opacity");
    }else{
        setaVoltarHSM.classList.add("opacity");
    }

    const EhAUltimaImagemHSM = imagemAtualHSM !== 0 && imagemAtualHSM === imagensHSM.length - 1;
    if(EhAUltimaImagemHSM){
        setaAvancarHSM.classList.add("opacity");
    }else{
        setaAvancarHSM.classList.remove("opacity");
    }
};