const bar = document.getElementById('bar');
const close = document.getElementById('close');
const navbar = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        navbar.classList.add('active');
    });
}

if (close) {
    close.addEventListener('click', () => {
        navbar.classList.remove('active');
    });
}



const images = [
  "img/banner1.jpg",
  "img/banner2.jpg",
  "img/banner3.jpg"
];

let index = 0;
const hero = document.querySelector(".hero-img");

setInterval(() => {
  index = (index + 1) % images.length;
  hero.src = images[index];
}, 3000);
