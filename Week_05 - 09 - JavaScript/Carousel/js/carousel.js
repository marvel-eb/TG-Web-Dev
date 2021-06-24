////////////////////////////////////////////////////
// - Carousel Slider 


// - Version 01

// Declaring / Defining Varibales for the slide
let images = [
  "img/slide-img-01.jpg",
  "img/slide-img-02.jpg",
  "img/slide-img-03.jpg"
]; // Array Method
let carouselElement = document.getElementById('slide-image'); // Mian target image
let carouselNextButtonOne = document.getElementById('carousel-btn--next-'); // next slider button
let carouselPreviousButtonOne = document.getElementById('carousel-btn--prev-'); // previous slider button
let slideOneCounter = 0;

// This is both   next + previous (button) slide  Method
////////////////////////////////////////////////////////

//Next Slide
function nextImageSlide() {
  if (slideOneCounter < images.length - 1) {
    slideOneCounter++;
  } else {
    slideOneCounter = 0;
  }
  carouselElement.src = images[slideOneCounter];
}

// Previous Slide
function prevImageSlide() {
  if (slideOneCounter > 0) {
    slideOneCounter--;
  } else {
    slideOneCounter = images.length - 1;
  }
  carouselElement.src = images[slideOneCounter];
}

carouselPreviousButtonOne.addEventListener('click', prevImageSlide);
carouselNextButtonOne.addEventListener('click', nextImageSlide);


// This is Only Single next slide (Button)  Method
///////////////////////////////////////////////////
/*
window.onload = slideImagesOne;
carouselNextButtonOne.onclick = slideImagesOne;
function slideImagesOne() {
  if (slideOneCounter === 3) {
    slideOneCounter = 0;
  }
  let nextImageSlide = images[slideOneCounter];
  carouselElement.src = nextImageSlide;
  slideOneCounter = slideOneCounter + 1;
}
*/


// - Version 02

let carouselIndex = 1;
showCarousel(carouselIndex);

function plusSlides(n) {
  showCarousel(carouselIndex += n);
}

function currentSlide(n) {
  showCarousel(carouselIndex = n);
}

function showCarousel(n) {
  let i; //initalize
  let slides = document.getElementsByClassName("slideTwo"); // each image slide
  if (n > slides.length) { //total image sides
    carouselIndex = 1
  }
  if (n < 1) {
    carouselIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[carouselIndex - 1].style.display = "block"; // display style
}
