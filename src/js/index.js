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

const imagensAction = [
  "./src/images/movies/transformers-1.jpg",
  "./src/images/movies/transformers-2.jpg",
  "./src/images/movies/transformers-3.jpg"
  
];

let currentImageIndex = 0;

const adventureSlider = document.getElementById("adventure-slider");
const actionSlider = document.getElementById("action-slider");

// IMAGES
const imageElementAdventure = document.getElementById("image-adventure");
const imageElementAction = document.getElementById("image-action");

// FUNCTIONS
function alterarFundo(slider){
  if(slider === adventureSlider){
    if(currentImageIndex === 11){
      adventureSlider.style.backgroundImage = "url(./src/images/background-movies/hobbit.jpg)"
    };
  }
};

function showImage(imageElement, images) {
  imageElement.src = images[currentImageIndex];
};

function forwardArrow(imageElement, images, slider) {
  if(currentImageIndex === imagesAdventure.length - 1){
    return;
  };

  currentImageIndex = (currentImageIndex + 1) % imagesAdventure.length;
  showImage(imageElement, images);
  alterarFundo(slider);
};

function backArrow(imageElement, images) {
  if(currentImageIndex === 0){
    return;
  };
  currentImageIndex = (currentImageIndex + imagesAdventure.length - 1) % imagesAdventure;
  showImage(imageElement, images);
};

showImage(imageElementAdventure, imagesAdventure);
showImage(imageElementAction, imagensAction);

// ADVENTURE-SECTION
document.getElementById("forward-arrow").addEventListener("click", () => {forwardArrow(imageElementAdventure, imagesAdventure, adventureSlider)});
document.getElementById("back-arrow").addEventListener("click", () => {backArrow(imageElementAdventure, imagesAdventure)});

// ACTION-SECTION
document.getElementById("forward-arrow-1").addEventListener("click", () => {forwardArrow(imageElementAction, imagensAction, actionSlider)});
document.getElementById("back-arrow-1").addEventListener("click", () => {backArrow(imageElementAction, imagensAction)});