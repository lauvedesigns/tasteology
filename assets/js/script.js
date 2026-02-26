// Wait until page is fully loaded
document.addEventListener("DOMContentLoaded", () => {

  // Get gallery images, lightbox elements
  const images = document.querySelectorAll(".gallery-img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".close");

  // Stop if elements are missing
  if (!images.length || !lightbox || !lightboxImg || !closeBtn) return;

  // Function to close lightbox
  const closeLightbox = () => {
    lightbox.classList.remove("active");
    lightboxImg.src = ""; // remove the image when closing
  };

  // Open lightbox when image is clicked
  images.forEach(img => {
    img.addEventListener("click", () => {
      lightbox.classList.add("active"); // show overlay
      lightboxImg.src = img.src;        // set clicked image
    });
  });

  // Close lightbox when clicking X button
  closeBtn.addEventListener("click", closeLightbox);

  // Close lightbox when clicking outside the image (overlay)
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) { // only overlay click
      closeLightbox();
    }
  });

  // Close lightbox with Escape, Delete or Backspace keys
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" || e.key === "Delete" || e.key === "Backspace") {
      closeLightbox();
    }
  });

});


// Add one click listener to the whole card container
const cardContainer = document.querySelector('.card-container');
// Check if card container class exist
if (cardContainer) {
  cardContainer.addEventListener('click', function (e) {

    const link = e.target.closest('a');

    // If the user didn’t click, stop the code
    if (!link) return;

    // Show the link’s URL in the console
    console.log("Card clicked:", link.href);
  });
}
