import './style.scss';
import './node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import './node_modules/scrollreveal/dist/scrollreveal.js'

"use strict";
const thumbnails = document.querySelectorAll(".thumbnails");
const thumbnailsContainer = document.querySelector(".thumbnail-container");
const allImgs = document.querySelectorAll(".myCardImg");
const thumbnailActiveBorder = document.querySelectorAll(".borderDiv");

thumbnailsContainer.addEventListener("click", function (e) {
  const clicked = e.target;
  if (!clicked.classList.contains("thumbnails")) return;
  console.log(clicked.dataset.img);

  //  1. remove initial active border
  thumbnailActiveBorder.forEach((cur) => cur.classList.remove("active-border"));

  //  2. remove initial active opacity
  thumbnails.forEach((cur) => cur.classList.remove("active-state-img"));

  //  3. add active border to thumbnail div
  clicked.closest(".borderDiv").classList.add("active-border");

  //  4. add active opacity to thumbnail
  clicked.classList.add("active-state-img");

  // 5. find and select img which is related to thumbnail
  const clickedImg = document.querySelector(`#img${clicked.dataset.img}`);
  console.log(clickedImg);

  // 6. add d-none
  allImgs.forEach((cur) => cur.classList.add("d-none"));

  //7. add active class and d-block
  clickedImg.classList.add("activeMyCard", "d-block");
  clickedImg.classList.remove("d-none");
});

// popover
const exampleEl = document.getElementById("example");
const option =
  "<div class='card p-0 h-100'><div class='card-header bg-info fw-bold fs-5 p-0 pb-3'>Cart</div><div class='card-body bg-info p-0 d-flex align-items-center justify-content-center cartBody'><h5 class='text-secondary fs-6'>Yout card is empty.</h5></div></div>";
const popover = new bootstrap.Popover(exampleEl, {
  html: true,
  animation: true,
  content: option,
});

// mobile-nav
const btnMobile = document.querySelectorAll(".btn-mobile");

btnMobile.forEach((cur) =>
  cur.addEventListener("click", function () {
    this.closest(".container").classList.toggle("nav-open");
  })
);

// cart btn
const btnPlus = document.querySelector(".btnPlus");
const btnMinus = document.querySelector(".btnMinus");
const value = document.querySelector(".quantity");
const addToCart = document.querySelector(".addToCart");
const price = document.querySelector(".price");
const totalPrice = document.querySelector(".total-price");
const origianlPrice = document.querySelector(".original-price");

let productNum = +value.innerText;
btnPlus.addEventListener("click", function () {
  value.innerText = ++productNum;
});

btnMinus.addEventListener("click", function () {
  value.innerText = productNum && --productNum;
});

addToCart.addEventListener("click", function () {
  if (price.textContent.includes("$")) {
    const productPrice = +price.textContent.split("").slice(1).join("");
    const previousPrice = +origianlPrice.textContent
      .split("")
      .slice(1)
      .join("");

    totalPrice.innerHTML = "";
    const markUp = `<del class="me-3 animate__animated animate__flipInX">${(previousPrice * productNum).toFixed(
      2
    )}</del><p class='text-dark d-inline animate__animated animate__flipInX'>$${(
      productNum * productPrice
    ).toFixed(2)}</p>`;
    totalPrice.insertAdjacentHTML("beforeend", markUp);
  }
});

// scroll reveal


// animation scroll reveal
const slideLeft = {
  distance: "70px",
  origin: "left",
  duration: 1000,
  interval: 300,
  cleanup: true,
  delay: 200,
};
ScrollReveal().reveal(".slideLeft", slideLeft);

const slideRight = {
  distance: "70px",
  origin: "right",
  duration: 1000,
  interval: 300,
  cleanup: true,
  delay: 200,
};
ScrollReveal().reveal(".slideRight", slideRight);

const slideBot = {
  distance: "70px",
  origin: "bottom",
  duration: 1000,
  interval: 250,
  cleanup: true,
  delay: 200,
};
ScrollReveal().reveal(".slideBot", slideBot);

