/**
 * A class to represent a 3 dimensional vector
 * @class Vector3
 * @param {number} x
 * @param {number} y
 * @param {number} z
 */

export default class {
  constructor(x = 0, y = 0, z = 0){
    this.x = x;
    this.y = y;
    this.z = z;
  }

  toArray() {
    return [this.x, this.y, this.z];
  }
}
