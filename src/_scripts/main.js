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
  $('.get-bkg').on('load', function(){
    // Get <img> src
    var bkgUrl = 'url(' + $(this).attr('src') + ')';
    // Apply same img to background
    $('.feature-background').css('background-image', bkgUrl);
    // Mask fades away
    $('.mask').removeClass('active');
    // Remove the original <img>
    $(this).remove();
  });

  // ONBOARD
  // Show .onboard div on homepage after some time
  if ($('.onboard').length) {
    setTimeout(function() {
      $('.onboard').addClass('active');
    }, 6000);
  }
  
});