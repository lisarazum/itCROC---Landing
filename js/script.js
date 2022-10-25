//slider

const swiper = new Swiper('.clients__swiper', {
  loop: true,
  allowTouchMove: true,
  slidesPerView: 2,
  slidesPerGroup: 2,

  pagination: {
    el: '.clients__swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    578: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 30,
    },
    780: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 30,
    },
    980: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 30,
    }
  }
});

// slider-service

const modalSlider = document.querySelector('.service__slider');
  let modalSwiper;
  
  function mobileSlider() {
    if (window.innerWidth <= 710 && modalSlider.dataset.mobile == 'false') {
        modalSwiper = new Swiper(modalSlider, {
        slidesPerGroup: 1,
        slidesPerView: "auto",
        lazy: {
          loadPrevNext: true,
        },
        pagination: {
          el: '.service__swiper-pagination',
          clickable: true,
        },
      });
      modalSlider.dataset.mobile = 'true';
    }
  
    mobileSlider()
  }
  window.addEventListener('resize', () => {
    mobileSlider();
  });


//accordion

var acc = document.getElementsByClassName("steps__accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// validation

const validation = new window.JustValidate('#consult-form');

validation
  .addField('#form-name', [
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'Ваше имя должно включать минимум 3 символа',
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Ваше имя должно включать максимум 30 символов',
    },
  ])
  .addField('#form-email', [
    {
      rule: 'required',
      errorMessage: 'Заполните поле',
    },
    {
      rule: 'email',
      errorMessage: 'Неправильный email',
    },
  ])
  .addField('#form-tel', [
    {
      rule: 'required',
      errorMessage: 'Заполните поле',
    },
    {
      rule: 'string',
      value: Number,
      errorMessage: 'Неправильный телефон',
    },
  ]);