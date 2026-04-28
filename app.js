// SPLIDE CAROUSEL
// https://splidejs.com/
// https://splidejs.com/guides/getting-started/

new Splide(".splide", {
  updateOnMove: true,
  type: "loop",
  perPage: 3,
  perMove: 1,
  autoplay: true,
  breakpoints: {
    992: {
      perPage: 2,
    },
    719: {
      perPage: 1,
    },
  },
}).mount();

// REVIEWS
const reviewReadMoreButtons = document.querySelectorAll(".review__read-more");

reviewReadMoreButtons.forEach((readMoreButton) => {
  readMoreButton.addEventListener("click", () => {
    const review = readMoreButton.parentNode.querySelector(".review");
    const container = readMoreButton.parentNode;
    const isExpanded = container.getAttribute("aria-expanded") === "true";
    container.setAttribute("aria-expanded", !isExpanded);
    review.classList.toggle("read-more");
    readMoreButton.textContent = isExpanded ? "... See more" : "... See less";
  });
});

// DYNAMIC YEAR
document.getElementById("year").textContent = new Date().getFullYear();

// REVEAL PHONE NUMBER
document.addEventListener("DOMContentLoaded", function () {
  const prefix = "tel:";
  const part1 = "07928";
  const part2 = "89";
  const part3 = "6643";
  // HERO SECTION
  const contactButton = document.getElementById("contact-area");
  contactButton.href = prefix + part1 + part2 + part3.replace(/-/g, "");
  contactButton.innerText = "Call: " + part1 + " " + part2 + part3;
  contactButton.classList.add("hero-message-cta-container-contact");
  // FAQ SECTION
  document.getElementById("faq-number").innerText = part1 + part2 + part3;
  // FOOTER NUMBER
  const footerButton = document.getElementById("footer-number");
  footerButton.href = prefix + part1 + part2 + part3.replace(/-/g, "");
  footerButton.innerText = part1 + " " + part2 + part3;
});

// HERO FIXED HEIGHT
// Run this as early as possible (or on DOMContentLoaded)
// const setHeroHeight = () => {
//   const hero = document.querySelector(".hero-section");
//   if (hero) {
//     // Get the actual innerHeight (which is the 'small' viewport initially)
//     const vh = window.innerHeight;
//     hero.style.height = `${vh}px`;
//   }
// };

// window.addEventListener("load", setHeroHeight);
// // Optional: Only update on orientation change, NOT on scroll
// window.addEventListener("orientationchange", setHeroHeight);
