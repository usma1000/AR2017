'use strict';

var Overlay = require('../overlay');

describe('Overlay View', function() {

  beforeEach(function() {
    this.overlay = new Overlay();
  });

  it('Should run a few assertions', function() {
    expect(this.overlay);
  });

});
