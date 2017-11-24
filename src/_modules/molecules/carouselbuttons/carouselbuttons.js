'use strict';

var $ = require('jquery');
// Constructor
var Carouselbuttons = function() {
  this.val = 1;
  var leadingzero = this.val <= 9 ? "0" : "";
  
  this.update = function() {
    $('.carousel-numbers .current').text(leadingzero+this.val);
  }
};

module.exports = Carouselbuttons;
