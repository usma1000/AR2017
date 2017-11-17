'use strict';

var NavMenu = require('../nav-menu');

describe('NavMenu View', function() {

  beforeEach(function() {
    this.navMenu = new NavMenu();
  });

  it('Should run a few assertions', function() {
    expect(this.navMenu);
  });

});
