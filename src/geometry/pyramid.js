/**
 * A class for creating a pyramid.
 * @class Pyramid
 * @param {Object} vertices - Vertices for the triangle geometry
 */

export default class {
  constructor(
    vertices = [
      0, 1, 0,
      1, -1, 1,
      -1, -1, 1,

      0, 1, 0,
      -1, -1, -1,
      1, -1, -1,

      0, 1, 0,
      1, -1, -1,
      1, -1, 1,

      0, 1, 0,
      -1, -1, 1,
      -1, -1, -1,

      -1, -1, -1,
      -1, -1, 1,
      1, -1, -1,

      1, -1, 1,
      1, -1, -1,
      -1, -1, 1,
    ]
  ) {
    this.vertices = vertices;
  }
}
