// var burgerMenu = document.querySelector(".burger_menu");
// var expandNav = document.querySelector(".sideNav_expand");
// burgerMenu.addEventListener("click", () => {
//   burgerMenu.classList.toggle("active");
//   expandNav.classList.toggle("active");
// });

// offcanvas Expand Hide
var hamburgerIcons = document.querySelectorAll(".hamburger");
hamburgerIcons.forEach(function (item) {
  item.addEventListener("click", () => {
    var offCanvas = document.querySelector(".offcanvas_items");

    item.classList.toggle("active");
    offCanvas.classList.toggle("active");
  });
});

// Expand and Hide Search
var searchIcon = document.querySelector(".search_icon");
searchIcon.addEventListener("click", () => {
  var searchBar = document.querySelector(".search");
  // searchIcon.classList.toggle("active");
  searchBar.classList.toggle("active");
});

// Trip Info From Exapand and Hide
document.onload = function () {
  var tripInfoForm = document.querySelector(".form_icon");
  tripInfoForm.addEventListener("click", () => {
    var tripEnquiryForm = document.querySelector(".trip_enquiry");
    tripEnquiryForm.classList.add("active");
  });

  var closeInfoForm = document.querySelector(".close");
  closeInfoForm.addEventListener("click", () => {
    var tripEnquiryForm = document.querySelector(".trip_enquiry");
    tripEnquiryForm.classList.remove("active");
  });
};

// Slick Slider Main Slider
$(document).ready(function () {
  $(".main_slider").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows: false,
    autoplay: true,
  });
});

// const slides = document.querySelectorAll(".testimonial_details");
// var counter = 0;

// slides.forEach((slide, index) => {
//   slide.style.left = `${index * 100}%`;
// });

// const goPrev = () => {
//   counter--;
//   slideImage;
// };
// const goNext = () => {
//   counter++;
//   slideImage;
// };

// const slideImage = () => {
//   slides.forEach((slide) => {
//     slide.style.transform = `translateX (-${counter * 100}%)`;
//   });
// };
