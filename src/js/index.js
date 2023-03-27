const imagesAdventure = [
  "./src/images/movies/star-wars-I.jpg", "./src/images/movies/star-wars-II.jpg",
  "./src/images/movies/star-wars-III.jpg", "./src/images/movies/star-wars-IV.jpg",
  "./src/images/movies/star-wars-han-solo.jpg", "./src/images/movies/star-wars-rogue-one.jpg",
  "./src/images/movies/star-wars-V.png", "./src/images/movies/star-wars-VI.jpg",
  "./src/images/movies/star-wars-VII.jpg", "./src/images/movies/star-wars-VIII.jpg",
  "./src/images/movies/star-wars-IX.jpg", 
  "./src/images/movies/Hobbit-1.jpg", "./src/images/movies/Hobbit-2.jpg",
  "./src/images/movies/Hobbit-3.jpg", "./src/images/movies/o-senhor-dos-aneis-1.jpg",
  "./src/images/movies/o-senhor-dos-aneis-2.jpg", "./src/images/movies/o-senhor-dos-aneis-3.jpg"
];

const imagesAction = [
  "./src/images/movies/transformers-1.jpg", "./src/images/movies/transformers-2.jpg",
  "./src/images/movies/transformers-3.jpg"
];

let currentImageIndex = 0;

// SLIDERS
const AdventureSlider = document.getElementById("adventure-slider");

// IMAGES
const imageElementAdventure = document.getElementById("image-adventure");
const imageElementAction = document.getElementById("image-action");

// FUNCTIONS
function changeBackground(image){
  if(image === imagesAdventure){
    if(currentImageIndex === 11){
      AdventureSlider.style.backgroundImage = "url(./src/images/background-movies/hobbit.jpg)"
    };
  };
};

function showCurrentImage(){
  imageElementAdventure.src = imagesAdventure[0];
  imageElementAction.src = imagesAction[0];
}

function showImage(imageElement, imageCurrent) {
  imageElement.src = imageCurrent[currentImageIndex];
};

function forwardArrow(imageElement, image) {
  if(currentImageIndex === image.length - 1){
    return;
  };

  currentImageIndex = (currentImageIndex + 1) % image.length;
  showImage(imageElement, image);
  changeBackground(image);
};

function backArrow(imageElement, image) {
  if(currentImageIndex === 0){
    return;
  };
  currentImageIndex = (currentImageIndex + image.length - 1) % image;
  showImage(imageElement, image);
};

showCurrentImage();

// ADVENTURE-SECTION
document.getElementById("forward-arrow").addEventListener("click", forwardArrow(imageElementAdventure, imagesAdventure));
document.getElementById("back-arrow").addEventListener("click", backArrow(imageElementAdventure, imagesAdventure));

// ACTION-SECTION
document.getElementById("forward-arrow-1").addEventListener("click", forwardArrow(imageElementAction, imagesAction));
document.getElementById("back-arrow-1").addEventListener("click", backArrow(imageElementAction, imagesAction));