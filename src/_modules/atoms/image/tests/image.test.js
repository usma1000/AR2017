'use strict';

var Image = require('../image');

describe('Image View', function() {

  beforeEach(function() {
    this.image = new Image();
  });

  it('Should run a few assertions', function() {
    expect(this.image);
  });

});
