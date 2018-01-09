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

  $(document).ready(function() {
    // BACKGROUND IMAGES
    // Fade background image in only once it's loaded
    var imageholder = $('.get-bkg');
    if (imageholder.length > 0) {
      // Get <img> src
      var bkgUrl = 'url(' +  imageholder.attr('src') + ')';
      // Apply same img to background
      $('.feature-background').css('background-image', bkgUrl);
      // Mask fades away
      $('.mask').removeClass('active');
    };

    // NAVBAR
    // Navbar scrolls to current story
    // setTimeout(function() {
    $('div.navsidebar').scrollTop($("[href='.." + window.location.pathname.trim().slice(17,-1) + "']")[0].offsetTop - 35);
    // },1000);
  });

  $.fn.spanLetters = function() {
    this.each(function() {
      var words,i,text;
      words = $(this).text().split('');
      for (i = 0; i in words; i++) {
        words[i] = '<span class="span-letter opacity-0">' + words[i] + '</span>'
      };
      text = words.join('');
      $(this).html(text);
    })
  }

  $('.page-title').spanLetters();
  var titleLetters = document.getElementsByClassName('span-letter');
  var iterate = 0;
  function showTitle() {
    titleLetters[iterate].classList.remove('opacity-0');

    if (++iterate == titleLetters.length) {
      return;
    }
    setTimeout(showTitle, 50);
  }
  showTitle();

  // ONBOARD
  // Show .onboard div on homepage after some time
  if ($('.onboard').length) {
    setTimeout(function() {
      $('.onboard').addClass('active');
    }, 6000);
  }

  $('.hamburger').click(function(event) {
    event.preventDefault();
    $('.container').toggleClass('active');
  });

});
