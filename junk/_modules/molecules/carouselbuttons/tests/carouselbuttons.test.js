'use strict';

var Carouselbuttons = require('../carouselbuttons');

describe('Carouselbuttons View', function() {

  beforeEach(function() {
    this.carouselbuttons = new Carouselbuttons();
  });

  it('Should run a few assertions', function() {
    expect(this.carouselbuttons);
  });

});
