/**
 * A class for creating a triangle.
 * @class Triangle
 * @param {Object} vertices - Vertices for the triangle geometry
 */

import Vector3 from '../math/vector3';

export default class {
  constructor(
    vertices = [
      0, 1, 0,
      -1, -1, 0,
      1, -1, 0,
    ]
  ) {
    this.vertices = vertices;
  }

  A() {
    return this.vertices.slice(0, 3);
  }

  B() {
    return this.vertices.slice(3, 6);
  }

  C() {
    return this.vertices.slice(6, 9);
  }
}
