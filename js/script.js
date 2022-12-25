const element = document.querySelector('.gallery__select');
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: '',
	shouldSort: false,
  position: 'bottom'
})

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
		clickable: true,
  }
})


new Accordion('.accordion-list', {
	elementClass: 'accordion',
	triggerClass: 'accordion__control',
	panelClass: 'accordion__content',
	activeClass: 'accordion--active'
})


let tabsBtn = document.querySelectorAll('.tabs-nav__btn');
let tabsItem = document.querySelectorAll('.tabs-item');

tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn){btn.classList.remove('tabs-nav__btn--active')});
    e.currentTarget.classList.add('tabs-nav__btn--active');

    tabsItem.forEach(function(element){ element.classList.remove('tabs-item--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  })
})


var swiper2 = new Swiper ('.events-swiper', {
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
      slidesPerView: 3,
      spaceBetween: 27,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      }
    },
    1660: {
      slidesPerView: 3,
      spaceBetween: 50
    }
  },

  navigation: {
    nextEl: '.swiper-button-next-events',
  },

  pagination: {
    el: '.swiper-pagination-events',
    type: 'bullets',
		clickable: true
  }
})

const swiperNext = document.getElementById('.swiper-button-next-events')

swiperNext.addEventListener('click', () => {
  swiper2.slideNext();
})

