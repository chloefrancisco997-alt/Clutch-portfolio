function openImage(imageSource) {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");

  modal.style.display = "block";
  modalImage.src = imageSource;
}

function closeImage() {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");

  modal.style.display = "none";
  modalImage.src = "";
}

document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    closeImage();
  }
});