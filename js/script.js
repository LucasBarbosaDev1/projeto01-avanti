// resultado da pesquisa
const cBody = document.querySelector('body');
const containerSearch = document.querySelectorAll('.container-search');
const subject = document.querySelectorAll('.subject');
const divSearchResult = document.querySelectorAll('.search-result');

containerSearch.forEach(form => {
  form.addEventListener('submit', (ev) => {
    ev.preventDefault();

    const resultSearch = form.elements['search'].value;

    subject.forEach(item => {
      item.innerText = resultSearch;
    });

    divSearchResult.forEach(div => {
      div.style.display = 'flex';
    });

    form.reset();
    
  });
});

cBody.addEventListener('click', () => {

  divSearchResult.forEach(div => {
    div.style.display = 'none';
  });

});

// collapse nav desktop header
const cotainer2Header = document.querySelector('#cotainer2-header');
const allCategories = document.querySelector('#primary-li');
const collapseNavHeader = document.querySelector('#collapse-nav-header');
const collapseItems = document.querySelector('#collapse-items');
const collapseCategoriesTitle = document.querySelector('#collapse-categories-title');
const categories = document.querySelectorAll('.category');
const cMain = document.querySelector('main');

// guarda a categoria destacada
let liActive = null;

categories.forEach(li => {

  // se liActive for != de null && != do liAtual
  function resetStyleCategory() {

    if ((liActive !== null) && (liActive !== this)) {
      liActive.style.color = '#000';
      liActive.style.fontWeight = 400;
    };

  };

  function resetStyleLi() {
    allCategories.style.color = '#000';
  
    collapseNavHeader.style.display = "none";
    collapseItems.style.display = "flex";
    
    resetStyleCategory();
  };

  li.addEventListener('mouseover', function() {
    resetStyleCategory();

    // aplica o estilo na categoria atual
    this.style.color = '#005CFF';
    this.style.fontWeight = 700;

    collapseNavHeader.style.display = "flex";
    collapseItems.style.display = "none";
    collapseCategoriesTitle.style.display = "block";

    allCategories.style.color = '#000';

    // atualiza a categoria destacada
    liActive = this;
  });

  allCategories.addEventListener('mouseover', () => {
    allCategories.style.color = '#005CFF';

    collapseNavHeader.style.display = "flex";
    collapseItems.style.display = "flex";
    collapseCategoriesTitle.style.display = "none";

    resetStyleCategory();
  });

  cotainer2Header.addEventListener('mouseover', () => {
    resetStyleLi();
  });

  cMain.addEventListener('mouseover', () => {
    resetStyleLi();
  });

});

// padding main
const cHeader = document.querySelector('header').offsetHeight;

cMain.style.paddingTop = `${cHeader}px`;

// carroussel
const carousel = document.querySelector('#carousel');
const slides = document.querySelector('#slides');
const slideCount = document.querySelectorAll('.slide').length;
const pointsConteiner = document.querySelector('#navigation-carousel');

let currentIndex = 0;

// //cria os pontos de navegacao
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

  };

};

// collapse
const collapseButtons = document.querySelectorAll('.collapse-button');
const content1 = document.querySelector('.content1');
const content2 = document.querySelector('.content2');
const content3 = document.querySelector('.content3');

function btnCollapse(content) {  
  
  if (content === "collapse1") {
    content1.classList.toggle('collapse-active');
    content1.previousElementSibling.children[1].classList.toggle('button-active');
    
    content2.classList.remove('collapse-active');
    content3.classList.remove('collapse-active');
    content2.previousElementSibling.children[1].classList.remove('button-active');
    content3.previousElementSibling.children[1].classList.remove('button-active');

  } else if (content === "collapse2") {
    content2.classList.toggle('collapse-active');
    content2.previousElementSibling.children[1].classList.toggle('button-active');
    
    content1.classList.remove('collapse-active');
    content3.classList.remove('collapse-active');
    content1.previousElementSibling.children[1].classList.remove('button-active');
    content3.previousElementSibling.children[1].classList.remove('button-active');

  } else {
    content3.classList.toggle('collapse-active');
    content3.previousElementSibling.children[1].classList.toggle('button-active');
    
    content2.classList.remove('collapse-active');
    content1.classList.remove('collapse-active');
    content2.previousElementSibling.children[1].classList.remove('button-active');
    content1.previousElementSibling.children[1].classList.remove('button-active');

  };

};