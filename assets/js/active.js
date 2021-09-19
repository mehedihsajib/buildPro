/*===================================================================
    Author          : Modina Theme
    Template Name   : BuildPro - Construction HTML Template
    Version         : 1.0
* ================================================================= */

(function ($) {
  "use strict";
  $(document).on("ready", function () {
    // SCROLL TO TOP
    var progressPath = document.querySelector(".progress-wrap path");
    var pathLength = progressPath.getTotalLength();

    progressPath.style.transition = progressPath.style.WebkitTransition =
      "none";
    progressPath.style.strokeDasharray = pathLength + " " + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      "stroke-dashoffset 10ms linear";

    var updateProgress = function () {
      var scroll = $(window).scrollTop();
      var height = $(document).height() - $(window).height();
      var progress = pathLength - (scroll * pathLength) / height;
      progressPath.style.strokeDashoffset = progress;
    };

    updateProgress();
    $(window).scroll(updateProgress);

    var offset = 50;
    var duration = 550;

    jQuery(window).on("scroll", function () {
      if (jQuery(this).scrollTop() > offset) {
        jQuery(".progress-wrap").addClass("active-progress");
      } else {
        jQuery(".progress-wrap").removeClass("active-progress");
      }
    });

    jQuery(".progress-wrap").on("click", function (event) {
      event.preventDefault();
      jQuery("html, body").animate({ scrollTop: 0 }, duration);
      return false;
    });

    // MOBILE MENU
    $("#hamburger").on("click", function () {
      $(".mobile-nav").addClass("show");
      $(".overlay").addClass("active");
    });

    $(".close-nav").on("click", function () {
      $(".mobile-nav").removeClass("show");
      $(".overlay").removeClass("active");
    });

    $(".overlay").on("click", function () {
      $(".mobile-nav").removeClass("show");
      $(".overlay").removeClass("active");
    });

    $("#mobile-menu").metisMenu();

    // MODAL VIDEO
    $(".js-modal-btn").modalVideo();

    // TESTIMONIAL CAROUSEL
    $(".partner-carousel-wrapper").owlCarousel({
      loop: true,
      margin: 10,
      responsiveClass: true,
      responsive: {
        0: {
          items: 2,
          nav: false,
        },
        600: {
          items: 3,
          nav: false,
        },
        1000: {
          items: 5,
          nav: false,
          loop: false,
        },
      },
    });

    // PORTFOLIO CAROUSEL
    $(".owl-portfolio-carousel").owlCarousel({
      loop: true,
      margin: 10,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        600: {
          items: 1,
          nav: false,
        },
        800: {
          items: 2,
          nav: false,
        },
        1000: {
          items: 3,
          nav: false,
          loop: false,
        },
      },
    });

    // TESTIMONIAL CAROUSEL
    $(".owl-testimonial-carousel").owlCarousel({
      loop: true,
      margin: 10,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        600: {
          items: 1,
          nav: false,
        },
        1000: {
          items: 3,
          nav: false,
          loop: false,
        },
      },
    });

    // BLOG SLIDER
    $(".post-feature-thumb-wrapper").slick({
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: "linear",
    });

    // COUNTER UP
    $(".counter-up").counterUp({
      delay: 10,
      time: 1000,
    });
    // GMAPS
    var map = new GMaps({
      el: "#map",
      lat: 23.810331,
      lng: 90.412521,
    });
  }); // end document ready function
})(jQuery); // End jQuery
