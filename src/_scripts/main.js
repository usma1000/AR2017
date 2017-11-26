'use strict';

var $ = require('jquery');

$(function() {
  // REQUIRE MODULES
  var Carouselbuttons = require('../_modules/molecules/carouselbuttons/carouselbuttons');

  // INSTANTIATE MODULES
  var carouselbuttons = new Carouselbuttons();

  // GENERAL METHODS
  // Body fades in from black on page load
  setTimeout(function() {
    document.body.classList.add('render')
  },60);

  // CAROUSEL CONTROLS
  // Numbers change when radio button is clicked
  $('input:radio[name="carouselradio"]').change(function(){
    if ($(this).is(':checked')) {
      carouselbuttons.update($(this).attr("id"));
    }
  });
});
