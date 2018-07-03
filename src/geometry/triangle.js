/**
 * A class for creating a triangle.
 * @class Triangle
 * @param {Object} config - configuration object
 * @param {Context} config.A - Vertex A
 * @param {Context} config.B - Vertex B
 * @param {Context} config.C - Vertex C
 */

import Vector3 from '../math/vector3';

export default class {
  constructor({
    A = new Vector3(),
    B = new Vector3(),
    C = new Vector3(),
  }) {
    this.A = A;
    this.B = B;
    this.C = C;
  }
}
