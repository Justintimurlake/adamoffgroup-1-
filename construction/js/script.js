let navbar = document.querySelector(".header .navbar");
let searchForm = document.querySelector(".header .search-form");
let loginForm = document.querySelector(".header .login-form");
let contactInfo = document.querySelector(".contact-info");
const bgcBlack = document.querySelector(".bgc-black");
const header = document.querySelector(".header_bg");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  searchForm.classList.remove("active");
  loginForm.classList.remove("active");
  bgcBlack.classList.toggle("active");
  header.classList.toggle("active");
};

document.querySelector("#info-btn").onclick = () => {
  contactInfo.classList.add("active");
  bgcBlack.classList.add("active");
  navbar.classList.remove("active");
  header.classList.add("active");
};

bgcBlack.addEventListener("click", () => {
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
  loginForm.classList.remove("active");
  contactInfo.classList.remove("active");
  bgcBlack.classList.remove("active");
  header.classList.remove("active");
});

header.addEventListener("click", () => {
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
  loginForm.classList.remove("active");
  contactInfo.classList.remove("active");
  bgcBlack.classList.remove("active");
  header.classList.remove("active");
});

document.querySelector("#close-contact-info").onclick = () => {
  contactInfo.classList.remove("active");
  bgcBlack.classList.remove("active");
  header.classList.remove("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
  loginForm.classList.remove("active");
  contactInfo.classList.remove("active");
  bgcBlack.classList.remove("active");
  header.classList.remove("active");
};

var swiper = new Swiper(".home-slider", {
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 6000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".reviews-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,

  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".blogs-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".teachers-slider", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 6000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    425: {
      slidesPerView: 1,
    },
    500: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".logo-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    450: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    1000: {
      slidesPerView: 5,
    },
  },
});

const btnPrices = document.querySelectorAll(".btn-price");
const boxPrice1 = document.querySelector("#box-price_1");
const boxPrice2 = document.querySelector("#box-price_2");
const boxPrice3 = document.querySelector("#box-price_3");
const btnPrice1 = document.querySelector(".btn-price_1");
const btnPrice2 = document.querySelector(".btn-price_2");
const btnPrice3 = document.querySelector(".btn-price_3");
// const boxPrices = document.querySelectorAll(".box-price");

// boxPrices.forEach((boxPrice) => {
//   boxPrice.classList.toggle("pricing-editional");
// });

btnPrices.forEach((btnPrice) => {
  btnPrice.addEventListener("click", () => {
    let target = btnPrice.parentElement.id;
    console.log(target);
    if (
      btnPrice.textContent === "choose plan" &&
      target === "box-price_1"
    ) {
      btnPrice.textContent = "chosen";
      btnPrice.parentElement.classList.add("pricing-editional");
      boxPrice2.classList.remove("pricing-editional");
      boxPrice3.classList.remove("pricing-editional");
      btnPrice2.textContent = "choose plan";
      btnPrice3.textContent = "choose plan";
    } else if (
      btnPrice.textContent === "choose plan" &&
      target === "box-price_2"
    ) {
      btnPrice.textContent = "chosen";
      btnPrice.parentElement.classList.add("pricing-editional");
      boxPrice1.classList.remove("pricing-editional");
      boxPrice3.classList.remove("pricing-editional");
      btnPrice1.textContent = "choose plan";
      btnPrice3.textContent = "choose plan";
    } else if (
      btnPrice.textContent === "choose plan" &&
      target === "box-price_3"
    ) {
      btnPrice.textContent = "chosen";
      btnPrice.parentElement.classList.add("pricing-editional");
      boxPrice1.classList.remove("pricing-editional");
      boxPrice2.classList.remove("pricing-editional");
      btnPrice2.textContent = "choose plan";
      btnPrice1.textContent = "choose plan";
    } else {
      btnPrice.textContent = "choose plan";
      btnPrice.parentElement.classList.remove("pricing-editional");
    }
  });
});

// const loader = document.getElementById("preloader");

// window.addEventListener("load", () => {
//   loader.style.display = "none";
// });

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader--hidden");

  loader.addEventListener("transitionend", () => {
    document.body.removeChild(loader);
  });
});
