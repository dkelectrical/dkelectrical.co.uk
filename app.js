// PHOTOSWIPE GALLERY
// https://photoswipe.com/
// https://github.com/dimsemenov/photoswipe?tab=readme-ov-file

const yearElem = document.getElementById("year");
yearElem.textContent = new Date().getFullYear();

// 1. Import the Lightbox logic
import PhotoSwipeLightbox from "./vendor/photoswipe/photoswipe-lightbox.esm.min.js";

// 2. Initialize the gallery
const lightbox = new PhotoSwipeLightbox({
  gallery: "#photoswipe-gallery", // The container ID
  children: "a", // The clickable elements
  // Dynamically import the UI module when a user clicks an image
  pswpModule: () => import("./vendor/photoswipe/photoswipe.esm.min.js"),
});

lightbox.init();
// END PHOTOSWIPE GALLERY

// REVIEWS

const reviewReadMoreButtons = document.querySelectorAll(".review__read-more");

reviewReadMoreButtons.forEach((readMoreButton) => {
  //console.log(readMoreButton);
  readMoreButton.addEventListener("click", () => {
    console.log("Button was clicked!");
    readMoreButton.parentNode
      .querySelector(".review")
      .classList.add("read-more");
  });
});

// END REVIEWS
