'use strict';

// Constructor
var Link = function() {
  this.name = 'Link';
  console.log('%s module: showing how to include module js files.', this.name);
};

module.exports = Link;
