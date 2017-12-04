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
  // Slick events
  $('.slides')
    .on('init', function(slick){
      setBackground(1);
      $('li[data-slide]').first().addClass('active');
    })
    .on('beforeChange', function(event, slick, currentSlide, nextSlide){
      // Load quotes
      console.log("before change", nextSlide);
    })
    .on('afterChange', function(event, slick, currentSlide){
      // Change background image
      setBackground(currentSlide + 1);
    })
    .on('lazyLoaded', function(event, slick, image, imageSource){
      console.log("test");
    });
  // Bind Slick Gallery
  $('.slides').slick({
    arrows: false,
    infinite: false,
    lazyLoad: 'progressive',
  });
  // Set the background image url
  function setBackground(num) {
    var bkgUrl = 'url(../images/feature-bkg-' + num + '.jpg)';
    $('.feature-background').css('background-image', bkgUrl);
  }
  // Use sidebar nav to go to slick slide
  $('li[data-slide]').click(function(e) {
    e.preventDefault();
    // Remove active class from all elements
    $('li[data-slide]').removeClass('active');
    // Add active class to clicked element
    $(this).addClass('active');
    // Use data-slide attribute to go to that slide
    var slideno = $(this).data('slide');
    $('.slides').slick('slickGoTo', slideno - 1);
  });
});
