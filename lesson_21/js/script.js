// const like = document.querySelector('.card__item-button');
// like.addEventListener('click', function () {
//     like.classList.toggle('liked');
// });

const menu = document.querySelector('.header__action-button');
menu.addEventListener('click', function () {
  document.documentElement.classList.toggle('menu-open');
})

const like = document.querySelectorAll('.card__item-button');
like.forEach((button, index) => {
  button.addEventListener('click', function () {
    like[index].classList.add('liked');
  });
});


// swiper

const swiper = new Swiper('.slider1', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});





var swiper2 = new Swiper(".slider2", {
  slidesPerView: 4,
  spaceBetween: 30,
  freeMode: true,
  navigation: {
    nextEl: '.swiper-button-next2',
    prevEl: '.swiper-button-prev2',
  },
  autoplay: {
    delay: 3500,
    disableOnInteraction: false
  },

});

var mediaQuery = window.matchMedia("(max-width: 767.98px)");

function handleViewportChange(mediaQuery) {
  if (mediaQuery.matches) {
    swiper2.params.slidesPerView = 2;
    swiper2.update();
  } else {
    swiper2.params.slidesPerView = 4;
    swiper2.update();
  }
}

mediaQuery.addListener(handleViewportChange);

handleViewportChange(mediaQuery);





var swiper3 = new Swiper(".slider3", {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,

    },
    550: {
      slidesPerView: 2,

    },
    959: {
      slidesPerView: 3,

    },
  }
});



