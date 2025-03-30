// carroussel
const carousel = document.querySelector('#carousel');
const slides = document.querySelector('#slides');
const slideCount = document.querySelectorAll('.slide').length;
const pointsConteiner = document.querySelector('#navigation-carousel');

let currentIndex = 0;

// cria os pontos de navegacao
for (let i = 0; i < slideCount; i++) {
  const point = document.createElement('div');
  point.classList.add('point');
  if (i === 0) {
    point.classList.add('active');
  };
  point.addEventListener('click', () => {
    goToSlide(i);
  });
  pointsConteiner.appendChild(point);
};

const points = document.querySelectorAll('.point');

function updatePoints() {
  points.forEach((point, index) => {
    point.classList.toggle('active', index === currentIndex);
  });
};

function goToSlide(index) {
  currentIndex = index;
  const offset = -index * 100;
  slides.style.transform = `translateX(${offset}%)`;
  updatePoints();
};

setInterval(() => {
  currentIndex = (currentIndex + 1) % slideCount;
  goToSlide(currentIndex);
}, 4000);

// carroussel lancamentos
const slidesLaunch = document.querySelector('.slides-launch');
const slidesLaunchSecondary = document.querySelector('.slides-launch-secondary');
const widthWindow = window.innerWidth;

function scrollCarousel(direction) {

  if (widthWindow < 768) {
    
    if (direction === -1) {
      slidesLaunch.scrollBy({ left: -150, behavior: 'smooth' });
      slidesLaunchSecondary.scrollBy({ left: -150, behavior: 'smooth' });
    };
  
    if (direction === 1) {
      slidesLaunch.scrollBy({ left: 150, behavior: 'smooth' });
      slidesLaunchSecondary.scrollBy({ left: 150, behavior: 'smooth' });
    };

  } else {
    
    if (direction === -1) {
      slidesLaunch.scrollBy({ left: -300, behavior: 'smooth' });
      slidesLaunchSecondary.scrollBy({ left: -300, behavior: 'smooth' });
    };
  
    if (direction === 1) {
      slidesLaunch.scrollBy({ left: 300, behavior: 'smooth' });
      slidesLaunchSecondary.scrollBy({ left: 300, behavior: 'smooth' });
    };

  }

  
}