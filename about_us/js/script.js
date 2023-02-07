
//burger
let header__burger = document.querySelectorAll(".header__burger,.header__link");
let header__menu = document.querySelector(".header__menu");
let back = document.querySelector("body");

header__burger.forEach(function (item) {
  item.onclick = function () {
    item.classList.toggle("active");
    header__menu.classList.toggle("active");
    back.classList.toggle("lock");
  };
});

// acordeon
$(document).ready(function () {
  $(".block__title").click(function (event) {
    // ефект аккордеона(только одна вкладка может быть открыта)
    if ($(".block").hasClass("one")) {
      $(".block__title").not($(this)).removeClass("active");
      $(".block__text").not($(this).next()).slideUp(300);
    }
    // закоментироваать участок чтобы убрать этот эфект(либо убрать класс "one" в html )
    $(this).toggleClass("active").next().slideToggle(300);
  });
});


$(document).ready(function(){
  $('.slider').slick({
       arrows: false, 
    dots: false,
    slidesToShow: 3,
     responsive: [
      {
        breakpoint: 900,
        settings: {
           slidesToShow: 2,

        }
      },
      {
        breakpoint: 600,
        settings: {
           slidesToShow: 1,

        }
      }
    ],
    

});
});