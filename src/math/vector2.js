/**
 * A class to represent a 2 dimensional vector
 * @class Vector2
 * @param {number} x
 * @param {number} y
 */

export default class {
  constructor(x = 0, y = 0){
    this.x = x;
    this.y = y;
  }

  toArray() {
    return [this.x, this.y];
  }
}
