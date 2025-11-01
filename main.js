// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});

// Simple alert for demo buttons
function checkAvail(roomType) {
  alert(`Checking availability for: ${roomType}`);
}

// ------- IMAGE GALLERY SLIDER -------
let galleryIndex = 0;
showGalleryImage(galleryIndex);

function showGalleryImage(n) {
  let slides = document.getElementsByClassName("gallery-slide");
  if (slides.length === 0) return;

  if (n >= slides.length) galleryIndex = 0;
  if (n < 0) galleryIndex = slides.length - 1;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[galleryIndex].style.display = "block";
}

function nextImage() {
  galleryIndex += 1;
  showGalleryImage(galleryIndex);
}

function prevImage() {
  galleryIndex -= 1;
  showGalleryImage(galleryIndex);
}