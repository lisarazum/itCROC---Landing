//swiper

const swiper = new Swiper('.clients__swiper', {
  loop: true,
  slidesPerView: 4,
  slidesPerGroup: 4,
  spaceBetween: 10,

  pagination: {
    el: '.clients__swiper-pagination',
    clickable: true,
  },
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