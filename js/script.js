"use strict";

document.addEventListener('DOMContentLoaded', function() {
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
    // let modalSwiper;
    
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

  // inputmask
  const form = document.querySelector('.consult__form');
  const telSelector = form.querySelector('input[type="tel"]');
  const inputMask = new Inputmask('+7 (999) 999-99-99');
  inputMask.mask(telSelector);
  // let formTel = document.querySelectorAll('.form-tel');
  // let mask = new Inputmask('+7 (999) 999-99-99');
  // mask.mask(formTel);

  const validation = new JustValidate('.consult__form');

validation
  .addField('.form-name', [
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'Имя должно содержать минимум 3 символа'
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Имя не должно превышать 30 символов'
    },
    {
      rule: 'required',
      value: true,
      errorMessage: 'Введите имя'
    }
  ])
  .addField('.form-email', [
    {
      rule: 'required',
      value: true,
      errorMessage: 'Email обязателен',
    },
    {
      rule: 'email',
      value: true,
      errorMessage: 'Введите корректный Email',
    },
  ])
  .addField('.form-tel', [
    {
      rule: 'required',
      value: true,
      errorMessage: 'Телефон обязателен',
    },
    {
      rule: 'function',
      validator: function() {
        const phone = telSelector.inputmask.unmaskedvalue();
        return phone.length === 10;
      },
      errorMessage: 'Введите корректный телефон',
    },
  ]).onSuccess((event) => {
    console.log('Validation passes and form submitted', event);

    let formData = new FormData(event.target);

    console.log(...formData);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log('Отправлено');
          // сюда написать код что форма отправлена
          // document.querySelector('.form__sent').classList.toggle('modal--visible');
        }
      }
    }

    xhr.open('POST', 'mail.php', true);
    xhr.send(formData);

    event.target.reset();
  });

  // modals

  const btns = document.querySelectorAll('.popup-link');
  const modalOverlay = document.querySelector('.modal-overlay ');
  const modals = document.querySelectorAll('.modal');
  const modalClose = document.querySelectorAll('.modal__close');

  btns.forEach((el) => {
    el.addEventListener('click', (e) => {
      let path = e.currentTarget.getAttribute('data-path');

      document.querySelector(`[data-target="${path}"]`).classList.toggle('modal--visible');
      modalOverlay.classList.toggle('modal-overlay--visible');
    });
  });

  modalClose.forEach((el) => {
    el.addEventListener('click', (e) => {
      
      modalOverlay.classList.toggle('modal-overlay--visible');
      modals.forEach((el) => {
        el.classList.toggle('modal--visible');
      });
    });
  });

  modalOverlay.addEventListener('click', (e) => {
    if (e.target == modalOverlay) {
      modalOverlay.classList.toggle('modal-overlay--visible');
      modals.forEach((el) => {
        el.classList.toggle('modal--visible');
      });
    }
  });

    // validation_2
    const callbackForm = document.querySelector('.callback__form');
    const telCallback = callbackForm.querySelector('input[type="tel"]');
    const inputMaskCallback = new Inputmask('+7 (999) 999-99-99');
    inputMaskCallback.mask(telCallback);
  
    const validation_callback = new JustValidate('.callback__form');
  
  validation_callback
    .addField('.callback-name', [
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Имя должно содержать минимум 3 символа'
      },
      {
        rule: 'maxLength',
        value: 30,
        errorMessage: 'Имя не должно превышать 30 символов'
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Введите имя'
      }
    ])
    .addField('.callback-tel', [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Телефон обязателен',
      },
      {
        rule: 'function',
        validator: function() {
          const phone = telCallback.inputmask.unmaskedvalue();
          return phone.length === 10;
        },
        errorMessage: 'Введите корректный телефон',
      },
    ]).onSuccess((event) => {
      console.log('Validation passes and form submitted', event);
  
      let formData = new FormData(event.target);
  
      console.log(...formData);
  
      let xhr = new XMLHttpRequest();
  
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            console.log('Отправлено');
            // сюда написать код что форма отправлена
            // document.querySelector('.form__sent').classList.toggle('modal--visible');
          }
        }
      }
  
      xhr.open('POST', 'mail.php', true);
      xhr.send(formData);
  
      event.target.reset();
    });
})
