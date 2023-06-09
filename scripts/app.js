"use strict";

// Change the photo when click "take a bite!"
document.addEventListener('DOMContentLoaded', function() {
    let button = document.getElementById('myButton');
    let image = document.getElementById('myImage');
    let defaultImage = 'images/za.jpg';
    let newImage = 'images/bite.jpg';

    button.addEventListener('click', function() {
      if (image.src.includes(defaultImage)) {
        image.src = newImage;
      } else {
        image.src = defaultImage;
      }
    });
  });

 // Cool effect of navbar change when scrolling
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 0) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });