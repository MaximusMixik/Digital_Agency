// --------HEADER-BURGER-------------------------------------------
// --------CSS-------------------------------------------

// @media (max-width: 767.98px) {
//   body.lock {
//     overflow: hidden;
//   }
//   .header {
//     position: fixed;
//     width: 100%;
//     top: 0;
//     left: 0;
//     z-index: 50;
//   }
//   .header::before {
//     content: "";
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background-color: #ffffff;
//     opacity: 0.7;

//     z-index: 2;
//   }
//   .header__burger {
//     display: block;
//     width: 35px;
//     height: 25px;
//     position: relative;
//     z-index: 3;
//     margin-left: 30px;
//   }
//   .header__burger span {
//     position: absolute;
//     left: 0;
//     top: 11px;
//     width: 100%;
//     height: 2px;
//     background: #1b1c20;
//     transition: all 100ms ease-out 100ms;
//   }
//   .header__burger::before,
//   .header__burger::after {
//     content: "";
//     position: absolute;
//     left: 0;
//     width: 100%;
//     height: 2px;
//     background: #1b1c20;
//     transition: all 200ms ease-out 200ms;
//   }
//   .header__burger::before {
//     top: 1px;
//   }
//   .header__burger::after {
//     bottom: 1px;
//   }
//   .header__menu {
//     position: fixed;
//     top: 0;
//     left: -100%;
//     width: 100%;
//     height: 100%;
//     background-color: #ffffff;
//     padding: 50px 20px 20px 20px;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     transition: all 200ms ease-out 200ms;
//     overflow: auto;
//     /* opacity: 0.7; */
//   }

//   .header__menu__items {
//     flex-direction: column;
//   }
//   .header__menu__items li {
//     padding: 20px;
//   }
//   .header__buttons {
//     margin-top: 130px;
//   }

//   .header__login {
//     background-color: #cecece;
//     border-radius: 10px;
//     padding: 15px;
//   }
//   .header__body {
//     font-size: 2.5rem;
//   }
//   .header__menu.active {
//     left: 0;
//   }
//   .header__burger.active::before {
//     transform: rotate(45deg);
//     top: 12px;
//   }
//   .header__burger.active::after {
//     transform: rotate(-45deg);
//     bottom: 12px;
//   }
//   .header__burger.active span {
//     transform: scale(0);
//   }
// }
// ---------рабочий 100%-------------------------------------------

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

// ----------рабочий 100%----------------------------------------------------------
let header__burger = document.querySelector(".header__burger");
let header__menu = document.querySelector(".header__menu");
let back = document.querySelector("body");
let header__menu__items = document.querySelector(".header__menu__link");

header__burger.onclick = function () {
  header__burger.classList.toggle("active");
  header__menu.classList.toggle("active");
  back.classList.toggle("lock");
};

header__menu__items.onclick = function () {
  header__menu__items.classList.remove("active");
  back.classList.toggle("lock");
};

// -----------рабочий 100%----------------------------------------------------------
$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__burger, .header__menu").toggleClass("active");
    $("body").toggleClass("lock");
  });
});

// ----------- + подключить JQvery!!!----------------------------------------------------------
{
  /* <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"></script> */
}

{
  /* <script src="js/script.js"></script> */
}
// попробовать
// <!-- <script src="https://code.jquery.com/jquery-3.6.1.min.js"></script> -->
