'use strict';

var Pagetitle = require('../pagetitle');

describe('Pagetitle View', function() {

  beforeEach(function() {
    this.pagetitle = new Pagetitle();
  });

  it('Should run a few assertions', function() {
    expect(this.pagetitle);
  });

});
