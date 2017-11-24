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
  var carouselbuttons = new Carouselbuttons();
  
  // Numbers change when radio butto is clicked
  $('input:radio[name="carouselradio"]').change(function(){
    if ($(this).is(':checked')) {
      carouselbuttons.update($(this).attr("id"));
    }
  });
});
