const images = document.querySelectorAll(".section-one-icons img");
let counter = 1;
setInterval(() => {
  counter++;
  const image = document.querySelector(".section-one .change");
  image.classList.remove("change");
  if (counter > images.length) {
    counter = 1;
    images[0].classList.add("change");
  } else {
    image.nextElementSibling.classList.add("change");
  }
}, 2000);

// 4s remove first image and appear the next image
//
