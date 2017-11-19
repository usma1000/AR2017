'use strict';

var Navmenu = require('../navmenu');

describe('Navmenu View', function() {

  beforeEach(function() {
    this.navmenu = new Navmenu();
  });

  it('Should run a few assertions', function() {
    expect(this.navmenu);
  });

});
