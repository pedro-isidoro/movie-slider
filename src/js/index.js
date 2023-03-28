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

const imagesAction = [
  "./src/images/movies/transformers-1.jpg",
  "./src/images/movies/transformers-2.jpg",
  "./src/images/movies/transformers-3.jpg",
  
];

const imagesMusical = [
  "./src/images/movies/high-school-musical-I.jpg",
  "./src/images/movies/high-school-musical-II.jpg",
  "./src/images/movies/high-school-musical-III.jpg",
]

// INDEX
let currentImageIndexAdventure = 0;
let currentImageIndexAction = 0;
let currentImageIndexMusical = 0;

// SLIDER
const adventureSlider = document.getElementById("adventure-slider");
const actionSlider = document.getElementById("action-slider");

// IMAGES
const imageElementAdventure = document.getElementById("image-adventure");
const imageElementAction = document.getElementById("image-action");

// FUNCTIONS
function alterarFundo(slider, currentImageIndex){
  if(slider === adventureSlider){
    if(currentImageIndex === 11){
      adventureSlider.style.backgroundImage = "url(./src/images/background-movies/hobbit.jpg)"
    };
  };
};

function showImage(imageElement, images, currentImageIndex) {
  imageElement.src = images[currentImageIndex];
};

function forwardArrow(currentImageIndex, imageElement, images, slider) {
  if(currentImageIndex === images.length - 1){
    return;
  };

  currentImageIndex = (currentImageIndex + 1) % images.length;
  showImage(imageElement, images, currentImageIndex);
  alterarFundo(slider, currentImageIndex);
};

function backArrow(currentImageIndex, imageElement, images) {
  if(currentImageIndex === 0){
    return;
  };
  currentImageIndex = (currentImageIndex + images.length - 1) % images;
  showImage(imageElement, images, currentImageIndex);
};

showImage(imageElementAdventure, imagesAdventure, currentImageIndexAdventure);
showImage(imageElementAction, imagesAction, currentImageIndexAction);

// ADVENTURE-SECTION
document.getElementById("forward-arrow").addEventListener("click", () => {forwardArrow(currentImageIndexAdventure, imageElementAdventure, imagesAdventure, adventureSlider)});
document.getElementById("back-arrow").addEventListener("click", () => {backArrow(currentImageIndexAdventure, imageElementAdventure, imagesAdventure)});

// ACTION-SECTION
document.getElementById("forward-arrow-1").addEventListener("click", () => {forwardArrow(currentImageIndexAction, imageElementAction, imagesAction, actionSlider)});
document.getElementById("back-arrow-1").addEventListener("click", () => {backArrow(currentImageIndexAction, imageElementAction, imagesAction)});