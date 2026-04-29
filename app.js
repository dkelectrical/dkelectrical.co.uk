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

// REVEAL PHONE NUMBER & WHATSAPP ICON BASED ON TIME
document.addEventListener("DOMContentLoaded", function () {
  const prefix = "tel:";
  const part1 = "07928";
  const part2 = "89";
  const part3 = "6643";
  const fullNumber = part1 + " " + part2 + part3;

  // Only reveal during UK business hours (9am-5pm GMT/BST)
  const ukHour = parseInt(
    new Intl.DateTimeFormat("en-GB", {
      hour: "numeric",
      timeZone: "Europe/London",
      hour12: false,
    }).format(new Date()),
    10,
  );

  // 9AM - 5PM
  if (ukHour >= 9 && ukHour < 17) {
    // HERO SECTION
    const contactButton = document.getElementById("contact-area");
    contactButton.href = prefix + part1 + part2 + part3;
    contactButton.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M224.2 89C216.3 70.1 195.7 60.1 176.1 65.4L170.6 66.9C106 84.5 50.8 147.1 66.9 223.3C104 398.3 241.7 536 416.7 573.1C493 589.3 555.5 534 573.1 469.4L574.6 463.9C580 444.2 569.9 423.6 551.1 415.8L453.8 375.3C437.3 368.4 418.2 373.2 406.8 387.1L368.2 434.3C297.9 399.4 241.3 341 208.8 269.3L253 233.3C266.9 222 271.6 202.9 264.8 186.3L224.2 89z"/></svg>' +
      fullNumber;
    contactButton.classList.add("hero-message-cta-container-contact");
    // FAQ SECTION
    document.getElementById("faq-number").innerText =
      "call us on " + fullNumber;
    // FOOTER NUMBER
    const footerButton = document.getElementById("footer-number");
    footerButton.href = prefix + part1 + part2 + part3;
    footerButton.innerHTML =
      '|  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M224.2 89C216.3 70.1 195.7 60.1 176.1 65.4L170.6 66.9C106 84.5 50.8 147.1 66.9 223.3C104 398.3 241.7 536 416.7 573.1C493 589.3 555.5 534 573.1 469.4L574.6 463.9C580 444.2 569.9 423.6 551.1 415.8L453.8 375.3C437.3 368.4 418.2 373.2 406.8 387.1L368.2 434.3C297.9 399.4 241.3 341 208.8 269.3L253 233.3C266.9 222 271.6 202.9 264.8 186.3L224.2 89z"/></svg>' +
      "<span>" +
      fullNumber +
      "</span>";
    // WHATSAPP CHAT ICON
    const whatAppChatIcon = document.querySelector(".whatsapp-chat-container");
    whatAppChatIcon.style.display = "flex";
  }
});
