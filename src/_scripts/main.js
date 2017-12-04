'use strict';

var $ = require('jquery');
var slick = require('slick-carousel');

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

  // SLICK
  // Instantiate Slick Gallery
  $('.slides').slick({
    adaptiveHeight: true
  });
});
