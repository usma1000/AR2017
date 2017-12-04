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
    arrows: false,
  });
  // Use sidebar nav to go to slide
  $('li[data-slide]').click(function(e) {
    $('li[data-slide]').removeClass('active');
    $(this).addClass('active');
   e.preventDefault();
   var slideno = $(this).data('slide');
   $('.slides').slick('slickGoTo', slideno - 1);
 });
});
