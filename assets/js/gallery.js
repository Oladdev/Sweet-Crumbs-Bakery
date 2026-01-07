// const breadSources = [
//     "../assets/Images/Sourdough Bread.jpg",
//     "../assets/Images/Baguette.jpg",
// ];

// const pasterySources = [
// "../assets/Images/Croissant.jpeg",
// "../assets/Images/Danish.jpeg",
// ];

// const cupcakeSources = [
// "../assets/Images/choclate cake.jpeg",
// "../assets/Images/vanilla cupcake.jpg",
// "../assets/Images/cherrycc.jpeg",
// "../assets/Images/cupcake.jpeg",
// ];

// const cakeSources = [
// "../assets/Images/choclate cake.jpeg",
// "../assets/Images/Lemon cake.jpeg",
// "../assets/Images/Drip cake.jpg",
// "../assets/Images/Oreo drip cake.jpg",
// "../assets/Images/goat cake.jpg",
// "../assets/Images/Pink cat cake.jpg",
// ];

// const beverageSources = [
// "../assets/Images/Artisan coffee.jpeg",
// "../assets/Images/Herbal Tea.jpeg",
// ];
// 1. DATA SOURCES (Using your file paths)
const galleries = {
  bread: [
    "../assets/Images/Sourdough Bread.jpg",
    "../assets/Images/Baguette.jpg",
  ],
  pastry: ["../assets/Images/Croissant.jpeg", "../assets/Images/Danish.jpeg"],
  cupcake: [
    "../assets/Images/choclate cake.jpeg",
    "../assets/Images/vanilla cupcake.jpg",
    "../assets/Images/cherrycc.jpeg",
    "../assets/Images/cupcake.jpeg",
  ],
  cake: [
    "../assets/Images/choclate cake.jpeg",
    "../assets/Images/Lemon cake.jpeg",
    "../assets/Images/Drip cake.jpg",
    "../assets/Images/Oreo drip cake.jpg",
    "../assets/Images/goat cake.jpg",
    "../assets/Images/Pink cat cake.jpg",
  ],
  beverage: [
    "../assets/Images/Artisan coffee.jpeg",
    "../assets/Images/Herbal Tea.jpeg",
  ],
};

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

Object.entries(galleries).forEach(([key, images]) => {
  const container = document.getElementById(`${key}Gallery`);
  images.forEach((src, index) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = `${key} image ${index + 1}`;
    img.addEventListener("click", () => openLightbox(images, index));
    container.appendChild(img);
  });
});

let currentGallery = null;
let currentIndex = null;

function openImage(category, index) {
  if (galleries[category]) {
    openLightbox(galleries[category], index);
  }
}

function openLightbox(gallery, index) {
  currentGallery = gallery;
  currentIndex = index;
  lightboxImg.src = gallery[index];
  lightbox.style.display = "flex";
  lightbox.focus();
}

function closeImage() {
  lightbox.style.display = "none";
  currentGallery = null;
  currentIndex = null;
}

lightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
  currentGallery = null;
});

document.addEventListener("keydown", (e) => {
  if (!currentGallery) return;

  if (e.key === "ArrowRight" && currentIndex < currentGallery.length - 1) {
    currentIndex++;
  } else if (e.key === "ArrowLeft" && currentIndex > 0) {
    currentIndex--;
  } else if (e.key === "Escape") {
    lightbox.style.display = "none";
    return;
  }

  lightboxImg.src = currentGallery[currentIndex];
});

document.querySelectorAll(".arrow").forEach((btn) => {
  btn.addEventListener("click", () => {
    const gallery = document.getElementById(`${btn.dataset.gallery}Gallery`);
    gallery.scrollBy({
      left: 300 * btn.dataset.dir,
      behavior: "smooth",
    });
  });
});
