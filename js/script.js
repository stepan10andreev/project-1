const element = document.querySelector('.gallery__select');
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: '',
	shouldSort: false,
  position: 'bottom'
});

const swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 50,
  loop: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 2,
      spaceBetween: 38
    },
    // when window width is >= 640px
    1024: {
      slidesPerView: 2,
      spaceBetween: 34
    },
    1660: {
      slidesPerView: 3,
      spaceBetween: 50
    }
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
		clickable: true
  }
})
