// FUNCTIONS
function showMovieImage(img, moviesImages, moviesImagesIndex) {
  img.src = moviesImages[moviesImagesIndex];
  console.log(img);
}

function hideForwardArrow(moviesImagesIndex, moviesImages, forwardArrow) {
  const ehAUltimaImagem = moviesImagesIndex !== 0 && moviesImagesIndex === moviesImages.length - 1;
  if (ehAUltimaImagem) {
    forwardArrow.classList.add("opacity");
  } else {
    forwardArrow.classList.remove("opacity");
  }
}

function hideBackArrow(moviesImagesIndex, backArrow) {
  const naoEhAPrimeiraImagem = moviesImagesIndex !== 0;
  if (naoEhAPrimeiraImagem) {
   backArrow.classList.remove("opacity");
  } else {
    backArrow.classList.add("opacity");
  }
}

function changeBackgroundImage(slider) {
  if (slider === 11) {
    slider.style.backgroundImage =
      "url(../images/background-general/hobbit.jpg)";
  } else if (slider === 10) {
    slider.style.backgroundImage =
      "url(../images/background-general/death-star.jpg)";
  } else {
    return;
  }
}

export { showMovieImage, hideForwardArrow, hideBackArrow, changeBackgroundImage };