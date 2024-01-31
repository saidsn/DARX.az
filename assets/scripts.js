const inputs = document.querySelectorAll(".input-field");
const toggle_btn = document.querySelectorAll(".toggle");
const main = document.querySelector("main");
const bullets = document.querySelectorAll(".bullets span");
const images = document.querySelectorAll(".image");

inputs.forEach((inp) => {
  inp.addEventListener("focus", () => {
    inp.classList.add("active");
  });
  inp.addEventListener("blur", () => {
    if (inp.value != "") return;
    inp.classList.remove("active");
  });
});

toggle_btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    main.classList.toggle("sign-up-mode");
  });
});

let index = 1;

function moveSlider() {
  let currentImage = document.querySelector(`.img-${index}`);
  images.forEach((img) => img.classList.remove("show"));
  currentImage.classList.add("show");

  const textSlider = document.querySelector(".text-group");
  textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;

  bullets.forEach((bull) => bull.classList.remove("active"));
  bullets[index - 1].classList.add("active");

  index++;
  if (index > bullets.length) {
    index = 1;
  }
}
let sliderInterval = setInterval(moveSlider, 3000);

function stopSlider() {
  clearInterval(sliderInterval);
}

bullets.forEach((bullet) => {
  bullet.addEventListener("click", () => {
    stopSlider();
    index = bullet.dataset.value;
    moveSlider();
    sliderInterval = setInterval(moveSlider, 3000);
  });
});


