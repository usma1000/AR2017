'use strict';

var $ = require('jquery');
// Constructor
var Carouselbuttons = function() {
  this.val = 1;
  var leadingzero = this.val <= 9 ? "0" : "";

  this.update = function(radioId) {
    // replace all leading non-digits with nothing
    var numId = radioId.replace( /^\D+/g, '');
    this.val = numId;
    $('.carousel-numbers .current').text(leadingzero+this.val);
  }
};

module.exports = Carouselbuttons;
