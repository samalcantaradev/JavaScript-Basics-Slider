const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".image");
const bottom = document.querySelector(".bottom");

let sliderNumber = 1;
const length = images.length;

for (let i = 0; i < length; i++) {
  const div = document.createElement("div");
  div.className = "button";
  bottom.appendChild(div);
}

const buttons = document.querySelectorAll(".button");
buttons[0].style.backgroundColor = "00355e";

const resetBg = () => {
  buttons.forEach((button) => {
    button.style.backgroundColor = "transparent";
  });
};

buttons.forEach((button, i) => {
  button.addEventListener("click", () => {
    resetBg();
    slider.style.transform = `translateX(-${i * 800}px)`;
    sliderNumber = i + 1;
    button.style.backgroundColor = "00355e";
  });
});

const nextSlide = () => {
  slider.style.transform = `translateX(-${sliderNumber * 800}px)`;
  sliderNumber++;
};

const prevSlide = () => {
  slider.style.transform = `translateX(-${(sliderNumber - 2) * 800}px)`;
  sliderNumber--;
};

const getFristSlide = () => {
  slider.style.transform = `translateX(0px)`;
  sliderNumber = 1;
};

const getLastSlide = () => {
  slider.style.transform = `translateX(-${(length - 1) * 800}px)`;
  sliderNumber = length;
};

const changeColor = () => {
  resetBg();
  buttons[sliderNumber - 1].style.backgroundColor = "00355e";
};

left.addEventListener("click", () => {
  sliderNumber < length ? nextSlide() : getFristSlide();
  changeColor();
});

right.addEventListener("click", () => {
  sliderNumber > 1 ? prevSlide() : getLastSlide();
  changeColor();
});
