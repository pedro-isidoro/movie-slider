const imagesAdventure = [
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
  "./src/images/movies/Hobbit-1.jpg",
  "./src/images/movies/Hobbit-2.jpg",
  "./src/images/movies/Hobbit-3.jpg",
  "./src/images/movies/o-senhor-dos-aneis-1.jpg",
  "./src/images/movies/o-senhor-dos-aneis-2.jpg",
  "./src/images/movies/o-senhor-dos-aneis-3.jpg",
];

// const imagesAction = [
//   "./src/images/movies/transformers-1.jpg",
//   "./src/images/movies/transformers-2.jpg",
//   "./src/images/movies/transformers-3.jpg",
  
// ];

// const imagesMusical = [
//   "./src/images/movies/high-school-musical-I.jpg",
//   "./src/images/movies/high-school-musical-II.jpg",
//   "./src/images/movies/high-school-musical-III.jpg",
// ]

// INDEX
let currentImageIndexAdventure = 0;
// let currentImageIndexAction = 0;
// let currentImageIndexMusical = 0;

// ADVENTURE-ARROW
const forwardArrowAdventure = document.getElementById("forward-arrow");

// BACK-ARROW
const backArrowAdventure = document.getElementById("back-arrow");

// SLIDER
const adventureSlider = document.getElementById("adventure-slider");
// const actionSlider = document.getElementById("action-slider");
// const musicalSlider = document.getElementById("musical-slider");

// IMAGES
const imageElementAdventure = document.getElementById("image-adventure");
// const imageElementAction = document.getElementById("image-action");
// const imageElementMusical = document.getElementById("image-musical");

// FUNCTIONS
function alterarFundo(slider, currentImageIndex){
  if(slider === adventureSlider){
    if(currentImageIndex === 11){
      adventureSlider.style.backgroundImage = "url(./src/images/background-movies/hobbit.jpg)"
    }else{
      return;
    };
  };
};

function showImage(imageElement, images, currentImageIndex) {
  imageElement.src = images[currentImageIndex];
};

function showHideForwardArrow(images, currentImageIndex, forwardArrow){
  const EhAUltimaImagem = currentImageIndex !== 0 && currentImageIndex === images.length - 1;
  console.log(EhAUltimaImagem)
  if(EhAUltimaImagem){
    forwardArrow.classList.add("opacity");
  }else{
    forwardArrow.classList.remove("opacity");
  };
};

function showHideBackArrow(currentImageIndex, backArrow){
  const naoEhAPrimeiraImagem = currentImageIndex !== 0;
  console.log(naoEhAPrimeiraImagem)
  if(naoEhAPrimeiraImagem){
    backArrow.classList.remove("opacity");
  }else{
    backArrow.classList.add("opacity");
  };
};

function forwardArrow(currentImageIndex, images, imageElement, slider, forwardArrow) {
  console.log(currentImageIndex)
  if(currentImageIndex === images.length - 1){
    return;
  };

  currentImageIndex = (currentImageIndex + 1) % images.length;
  console.log(currentImageIndex)

  showImage(imageElement, images, currentImageIndex);
  alterarFundo(slider, currentImageIndex);
  showHideForwardArrow(images, currentImageIndex, forwardArrow);
};

function backArrow(currentImageIndex, images, imageElement, backArrow) {
  console.log(currentImageIndex)
  if(currentImageIndex === 0){
    return;
  };
  currentImageIndex = (currentImageIndex + images.length - 1) % images;
  console.log(currentImageIndex)
  
  showImage(imageElement, images, currentImageIndex);
  showHideBackArrow(currentImageIndex, backArrow);
};

showImage(imageElementAdventure, imagesAdventure, currentImageIndexAdventure);
// showImage(imageElementAction, imagesAction, currentImageIndexAction);
// showImage(imageElementMusical, imagesMusical, currentImageIndexMusical);

// ADVENTURE-SECTION
forwardArrowAdventure.addEventListener("click", () => {forwardArrow(currentImageIndexAdventure, imagesAdventure, imageElementAdventure, adventureSlider, forwardArrowAdventure)});
backArrowAdventure.addEventListener("click", () => {backArrow(currentImageIndexAdventure, imagesAdventure,imageElementAdventure, backArrowAdventure)});

// ACTION-SECTION
// document.getElementById("forward-arrow-1").addEventListener("click", () => {forwardArrow(currentImageIndexAction, imageElementAction, imagesAction, actionSlider)});
// document.getElementById("back-arrow-1").addEventListener("click", () => {backArrow(currentImageIndexAction, imageElementAction, imagesAction)});

// MUSICAL-SECTION
// document.getElementById("forward-arrow-2").addEventListener("click", () => {forwardArrow(currentImageIndexMusical, imageElementMusical, imagesMusical, musicalSlider)});
// document.getElementById("back-arrow-2").addEventListener("click", () => {backArrow(currentImageIndexMusical, imageElementMusical, imag