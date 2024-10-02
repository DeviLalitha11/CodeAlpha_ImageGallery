let currentImageIndex = 0;

function openLightbox() {
  document.getElementById('lightbox').style.display = 'block';
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

function setCurrentImage(index) {
  const images = document.querySelectorAll('.gallery img');
  document.getElementById('lightbox-img').src = images[index - 1].src;
  currentImageIndex = index;
}

function changeImage(step) {
  currentImageIndex += step;
  const totalImages = document.querySelectorAll('.gallery img').length;
  if (currentImageIndex > totalImages) currentImageIndex = 1;
  if (currentImageIndex < 1) currentImageIndex = totalImages;
  setCurrentImage(currentImageIndex);
}
