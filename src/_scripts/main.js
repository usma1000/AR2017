'use strict';

var $ = require('jquery');

$(function() {
  // REQUIRE MODULES
  // var Carouselbuttons = require('../_modules/molecules/carouselbuttons/carouselbuttons');

  // INSTANTIATE MODULES
  // var carouselbuttons = new Carouselbuttons();

  // GENERAL METHODS
  // Body fades in from black on page load
  setTimeout(function() {
    document.body.classList.add('render');
  },60);

  // BACKGROUND IMAGES
  // Fade background image in only once it's loaded
  $(document).ready(function() {
    console.log($('.get-bkg'));
    var imageholder = $('.get-bkg');
    if (imageholder.length > 0) {
      console.log('loaded');
      // Get <img> src
      var bkgUrl = 'url(' +  imageholder.attr('src') + ')';
      // Apply same img to background
      $('.feature-background').css('background-image', bkgUrl);
      // Mask fades away
      $('.mask').removeClass('active');
      // Remove the original <img>
      // imageholder.remove();
    };
  });

  // ONBOARD
  // Show .onboard div on homepage after some time
  if ($('.onboard').length) {
    setTimeout(function() {
      $('.onboard').addClass('active');
    }, 1000);
  }
  
});