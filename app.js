const images = document.querySelectorAll(".section-one-icons img");

setInterval(() => {
  const image = document.querySelector(".section-one .change");
  image.classList.remove("change");
}, 4000);
