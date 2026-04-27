// LIGHTGALLERY
// https://www.lightgalleryjs.com/
lightGallery(document.getElementById("lightgallery"), {
  plugins: [lgZoom, lgThumbnail],
  speed: 500,
  licenseKey: "0000-0000-000-0000", // Use your license key here
});

// REVEAL PHONE NUMBER
document.addEventListener("DOMContentLoaded", function () {
  const prefix = "tel:";
  const part1 = "07928";
  const part2 = "89";
  const part3 = "6643";
  // FOOTER NUMBER
  const footerButton = document.getElementById("footer-number");
  footerButton.href = prefix + part1 + part2 + part3.replace(/-/g, "");
  footerButton.innerText = part1 + " " + part2 + part3;
});
