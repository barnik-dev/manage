const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");

btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
});

new Swiper("#swiper-js", {
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 12,
  loop: true,

  pagination: {
    el: "#swiper-js .swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
    },
  },
});
