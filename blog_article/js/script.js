
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



// swiper

$(document).ready(function(){
  $('.slider').slick({
   
    arrows:  false, //  false,
    dots: true,
    adaptiveHeight: true,  // для авторегулировки по высоте 
    slidesToShow: 1,//количество слайдов на вывод
    slidesToScroll: 1,//количество листаемых сладов 
    speed: 1500,//скорость анимации, перехода
    easing: "linear",// вид анимации
    infinite: true,// true false имеет окончатие слайда
    initialSlide: 0,// стартовый слайд

    autoplay:true, //автопролиствыание
    autoplaySpeed:3000, //скорость автопролиствыание
    pauseOnFocus: true,  //пауза при фокусе
    pauseOnHover: true,   //пауза при наведении
    pauseOnDotsHover: true,//пауза при наведении на буллеты


    draggable:true, //отключает свайп на ПК, мышкой ничего не листнешь
    swipe: true, //на тачскрине не свайпнет
    touchThreshold: 5,//чувствительность срабатывания при свайпе 
   touchMove: true, //не сможем дергать(качать) слайдер 
    waitForAnimate: false,//переключение только при завершении анимации

    centerMode: false,// первый слайд встанет по центру
    variableWidth:false,// true пропадает ширина слайда, картинки будут всплошную ,33м
  
  });
  $('.slidermini').slick({
    arrows: false, //  false,
    slidesToShow: 6,// количество слайдов на вывод
    dots: false,
    adaptiveHeight: false,
    variableWidth: true,// true пропадает ширина слайда, картинки будут всплошную ,33м
    centerMode: false,
    infinite: true,
      responsive: [// breakpoint
     
       {
        breakpoint: 1000,
        settings: {
          slidesToShow: 5,//количество слайдов на вывод
          slidesToScroll: 2,//количество листаемых сладов 
        }
        },
         {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,//количество слайдов на вывод
          slidesToScroll: 3,//количество листаемых сладов 
        }
        },
    ],
   });
   });


