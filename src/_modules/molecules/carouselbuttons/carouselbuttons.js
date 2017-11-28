'use strict';

var $ = require('jquery');
// Constructor
var Carouselbuttons = function() {
  this.val = 1;
  var leadingzero = this.val <= 9 ? "0" : "";

  this.update = function(radioId) {
    var TOTAL = 4;
    var numId = parseInt(radioId);
    var prevId = (numId - 1) < 1 ? TOTAL : numId - 1;
    var nextId = (numId + 1) > TOTAL ? 1 : numId + 1;
    this.val = numId;
    // update numbers
    $('.carousel-numbers .current').text(leadingzero+this.val);
    // update background image
    $('.feature-background').css('background-image', 'url("../images/feature-bkg-' + numId + '.jpg")');
    // update previous background image
    $('.container--prev').css('background-image', 'url("../images/feature-bkg-' + prevId + '.jpg")');
    // update prev/next feature buttons
    $('.button--featured--img.left').attr('src', 'images/feature-btn-' + prevId + '.png');
    $('.button--featured--img.right').attr('src', 'images/feature-btn-' + nextId + '.png');
  }
};

module.exports = Carouselbuttons;
