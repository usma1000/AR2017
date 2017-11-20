// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

var $ = require('jquery');
// var Link = require('../_modules/atoms/link/link');

$(function() {
  setTimeout(() => document.body.classList.add('render'), 60);
  // new Link(); // Activate Link modules logic
});
