import { showMovieImage, hideForwardArrow, hideBackArrow, changeBackgroundImage } from './functions.js'

// MOVIES IMAGE ARRAY
const adventuresMoviesImages = [
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
// INDEX
let adventureMoviesImagesIndex = 0;

// ARROWS
const adventureBackArrow = document.getElementById("back-arrow");
const adventureForwardArrow = document.getElementById("forward-arrow");

// MOVIES
// const adventureMovies = document.getElementById("adventure-movies");

// SLIDER
const adventureSlider = document.getElementById("adventure-slider");

// IMG
const adventureImg = document.getElementById("image-adventure");

// ADDEVENTLISTENNER
adventureBackArrow.addEventListener('click', () => {
  if(adventureMoviesImagesIndex === 0){
      return;
  };

  adventureMoviesImagesIndex --;
  console.log(adventureMoviesImagesIndex);

  showMovieImage(adventureImg, adventuresMoviesImages, adventureMoviesImagesIndex);
  hideForwardArrow(adventureMoviesImagesIndex, adventuresMoviesImages, adventureForwardArrow);
  hideBackArrow(adventureMoviesImagesIndex, adventureBackArrow);
  changeBackgroundImage(adventureSlider);
});

adventureForwardArrow.addEventListener('click', () => {
  if(adventureMoviesImagesIndex === adventuresMoviesImages.length - 1){
      return;
  };

  adventureMoviesImagesIndex ++;
  console.log(adventureMoviesImagesIndex);

  showMovieImage(adventureImg, adventuresMoviesImages, adventureMoviesImagesIndex);
  hideForwardArrow(adventureMoviesImagesIndex, adventuresMoviesImages, adventureForwardArrow);
  hideBackArrow(adventureMoviesImagesIndex, adventureBackArrow);
  changeBackgroundImage(adventureSlider);
});

showMovieImage(adventureImg, adventuresMoviesImages, adventureMoviesImagesIndex);