var $ = require('jquery');
var Chartist = require('chartist');

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
    // $('div.navsidebar').scrollTop($("[href='../" + window.location.pathname.trim().slice(16,-1) + "']")[0].offsetTop - 35);
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
  if ($('.page-title').length) {
    showTitle();
  }

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

  $("html").click(function(event) {
      if ($(event.target).closest('.navsidebar, .hamburger').length === 0) {
        $('.container').hasClass('active') ? $('.container').toggleClass('active') : '';
      }
  });

  var chartOptions = {
    seriesBarDistance: 30,
    axisY: { onlyInteger: true }
  }

  if ($('#chart1').length) {
    new Chartist.Bar('#chart1', {
      labels: ['2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017'],
      series: [[108.7, 115.5, 126.2, 138.4, 145.9, 151.6, 166.9, 174.1, 181.2]]
    }, chartOptions);
    new Chartist.Bar('#chart2', {
      labels: ['2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017'],
      series: [[1.3, 2.2, 4.5, 6.4, 8.4, 7.2, 8.96, 10.1, 7.1]]
    }, chartOptions);
    new Chartist.Bar('#chart3', {
      labels: ['2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017'],
      series: [[880, 903, 958, 968, 1000, 1011, 1022, 1075, 1105],
               [882, 904, 959, 973, 1005, 1013, 1030, 1084, 1107]]
    }, chartOptions);
  }
});
