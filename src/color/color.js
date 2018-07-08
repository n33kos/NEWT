/**
 * A class to contain color data
 * @class Color
 * @param {Float} r - Red channel value (0-1)
 * @param {Float} g - Green channel value (0-1)
 * @param {Float} b - Blue channel value (0-1)
 * @param {Float} a - Alpha channel value (0-1)
 */

export default class {
  constructor(r = 0, g = 0, b = 0, a = 0) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }

  toArray() {
    return [this.r, this.g, this.b, this.a];
  }
}
