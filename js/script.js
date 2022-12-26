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
    prevEl: '.swiper-button-prev-events',
  },

  pagination: {
    el: '.swiper-pagination-events',
    type: 'bullets',
		clickable: true
  }
})

const swiper2Next = document.querySelector('.swiper-button-next-events')

swiper2Next.addEventListener('click', () => {
  swiper2.slideNext();
})




var swiper3 = new Swiper ('.projects-swiper', {
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
    },
    1660: {
      slidesPerView: 3,
      spaceBetween: 50
    }
  },

  navigation: {
    nextEl: '.swiper-button-next-projects',
    prevEl: '.swiper-button-prev-projects',
  },

})

const swiper3Prev = document.querySelector('.swiper-button-prev-projects')

swiper3Prev.addEventListener('click', () => {
  swiper3.slidePrev();
})

const swiper3Next = document.querySelector('.swiper-button-next-projects')

swiper3Next.addEventListener('click', () => {
  swiper3.slideNext();
})



  var selector = document.querySelector("input[type='tel']");
  var im = new Inputmask("+7(999) 999-99-99");
  im.mask(selector);

  new JustValidate('.contacts-form', {
      rules: {
          name: {
              required: true,
              minLength: 2,
              maxLength: 10
          },
          tel: {
              required: true,
              function: (name, value) => {
                  const phone = selector.inputmask.unmaskedvalue()
                  console.log(phone)
                  return Number(phone) && phone.length === 10
              }
          }
      },
      messages: {
          name: {
              required:"Вы не ввели имя",
              minLength: "Поле должно содержать минимум 2 символа",
              maxLength: "Поле должно содержать максимум 10 символов"
          },
          tel: {
              required: "Вы не ввели телефон",
              function: "Вы не ввели телефон"
          }
        }

  })



    // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [55.75846806898367,37.60108849999989],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 15
        });
        // Создание геообъекта с типом точка (метка).
        var myPlacemark = new ymaps.Placemark([55.75846806898367,37.60108849999989], {}, {
          iconLayout: 'default#image',
          iconImageHref: '/img/map-icon.svg',
          iconImageSize: [20, 20],
          iconImageOffset: [-3, -42]
        });
        // Размещение геообъекта на карте.
        myMap.geoObjects.add(myPlacemark);
    }

