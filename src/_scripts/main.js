// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

var $ = require('jquery');
// var Link = require('../_modules/atoms/link/link');


$(function() {
  var Carouselbuttons = require('../_modules/molecules/carouselbuttons/carouselbuttons');
  // Body fades in from black on page load
  setTimeout(function() {
    document.body.classList.add('render')
  },60);

  // Carousel controls
  // Numbers change on click
  var carouselbuttons = new Carouselbuttons();
  // carouselbuttons.val = 5;
  // carouselbuttons.update();
});
