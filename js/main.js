const menuOpen = document.querySelector(".hamburger-icon");
const menuClose = document.querySelector(".menu-close");
const nav = document.querySelector("nav");
const body = document.querySelector("body")

menuOpen.addEventListener("click", () => {
    nav.style.maxHeight = "600px";
    menuOpen.style.display = "none";
    menuClose.style.display = "inline-block";
    body.classList.add("nav-active");
})

menuClose.addEventListener("click", () => {
    nav.style.maxHeight = "0";
    menuClose.style.display = "none";
    menuOpen.style.display = "inline-block";
    body.classList.remove("nav-active");
})

// Swiper JS Logic
const swiper = new Swiper(".swiper-container", {
    direction: 'horizontal',

    pagination: {
    el: '.swiper-pagination',
  },

  breakpoints: {
      1150: {
          slidesPerView: 3,
          spaceBetween: 15
      }
  }
});