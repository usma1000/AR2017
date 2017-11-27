'use strict';

// Constructor
class ShapeOverlays {
  constructor(elm) {
    this.elm = elm; // SVG element.
    this.path = elm.querySelectorAll('path'); // Path elements in parent SVG.
    this.numPoints = 18; // Number of control points for Bezier Curve.
    this.duration = 600; // Animation duration of one path element.
    this.delayPointsArray = []; // Array of control points for Bezier Curve.
    this.delayPointsMax = 300; // Max of delay value in all control points.
    this.delayPerPath = 60; // Delay value per path.
    this.timeStart = Date.now();
    this.isOpened = false;
  }
  // ...
}
// const elmOverlay = document.querySelector('.shape-overlays');
// const overlay = new ShapeOverlays(elmOverlay);

module.exports = ShapeOverlays;
