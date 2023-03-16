const imagens = document.querySelectorAll(".slide-sw");
const setaVoltar = document.getElementById("back-arrow");
const setaAvancar = document.getElementById("forward-arrow");

let imagemAtual = 0;

setaAvancar.addEventListener("click", function(){
    if(imagemAtual === imagens.length - 1){
        return;
    };

    imagemAtual ++;

    esconderImagemAberta();
    mostrarImagem();
    mostrarOuEsconderSetas();
});

setaVoltar.addEventListener("click", function(){
    if(imagemAtual === 0){
        return;
    };

    imagemAtual --;

    esconderImagemAberta();
    mostrarImagem();
    mostrarOuEsconderSetas();
});

function esconderImagemAberta(){
    const imagemAberta = document.querySelector(".show");
    imagemAberta.classList.remove("show")
};

function mostrarImagem(){
    imagens[imagemAtual].classList.add("show");
};

function mostrarOuEsconderSetas(){
    const naoEhAPrimeiraImagem = imagemAtual !== 0;
    if(naoEhAPrimeiraImagem){
        setaVoltar.classList.remove("opacity");
    }else{
        setaVoltar.classList.add("opacity");
    }

    const EhAUltimaImagem = imagemAtual !== 0 && imagemAtual === imagens.length - 1;
    if(EhAUltimaImagem){
        setaAvancar.classList.add("opacity");
    }else{
        setaAvancar.classList.remove("opacity");
    }
};