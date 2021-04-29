const slideshowImages = document.querySelectorAll(".img .effect-slide");

const nextImageDelay = 3000;
let currentImageCounter = 0;

//slideshowImages[currentImageCounter].style.display = "block";
slideshowImages[currentImageCounter].style.opacity = 1;

setInterval(nextImage, nextImageDelay);

function nextImage(){
    slideshowImages[currentImageCounter].style.opacity = 0;
    currentImageCounter = (currentImageCounter + 1 ) % slideshowImages.length;
    slideshowImages[currentImageCounter].style.opacity = 1;
    
}