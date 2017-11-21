'use strict';

var Navsidebar = require('../navsidebar');

describe('Navsidebar View', function() {

  beforeEach(function() {
    this.navsidebar = new Navsidebar();
  });

  it('Should run a few assertions', function() {
    expect(this.navsidebar);
  });

});
