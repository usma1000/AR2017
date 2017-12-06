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
  var DELAY = 3000;
  $('.slides')
    .on('init', function(slick){
      $('li[data-slide]').first().addClass('active');
      $('.slick-active .pull-quote').delay(DELAY).slideUp();
      $('.slick-active .slide-text').delay(DELAY).slideDown();
      setBackground(1);
    })
    .on('beforeChange', function(event, slick, currentSlide, nextSlide){
      $('.pull-quote').slideDown();
      $('.slide-text').slideUp();
      setBackground(nextSlide + 1);
    })
    .on('afterChange', function(event, slick, currentSlide){
      $('.slick-active .pull-quote').delay(DELAY).slideUp();
      $('.slick-active .slide-text').delay(DELAY).slideDown();
    })
    .on('lazyLoaded', function(event, slick, image, imageSource){
    });
  // Bind Slick Gallery
  $('.slides').slick({
    arrows: false,
    infinite: false,
  });
  // Set the background image url
  function setBackground(num) {
    $('.mask').addClass('active');
    var bkgSrc = '../images/story-bkg-' + num + '.jpg';
    var bkgUrl = 'url(' + bkgSrc + ')';
    $('<img/>').attr('src', bkgSrc).on('load', function() {
      $(this).remove();
      $('.feature-background').css('background-image', bkgUrl);
      $('.mask').removeClass('active');
    });
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
