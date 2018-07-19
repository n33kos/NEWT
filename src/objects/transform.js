/**
 * A class for object transofrm data
 * @class Transform
 * @param {Object} config - configuration object
 * @param {Vector3} config.position - Transform position
 * @param {Vector3} config.rotation - Transform Rotation
 * @param {Vector3} config.scale - Transform Scale
 */

import Vector3    from '../math/vector3';
import Matrix     from '../math/matrix';
import MatrixMath from '../math/matrixMath';

export default class {
  constructor({
    position = new Vector3(1, 1, 1),
    rotation = new Vector3(0, 0, 0),
    scale = new Vector3(1, 1, 1),
  }) {
    this.position = position;
    this.rotation = rotation;
    this.scale = scale;
    this.calculateMatrix(position, rotation, scale);
  }

  calculateMatrix(
    position = this.position,
    rotation = this.rotation,
    scale = this.scale,
  ) {
    // Compute the matrices
    const translationMatrix = this.translationMatrix(position.x, position.y, position.z);
    const rotationMatrix = this.rotationMatrix(rotation.x);
    const scaleMatrix = this.scalingMatrix(scale.x, scale.y, scale.z);

    // Multiply the matrices.
    let matrix = new Matrix();
    matrix = MatrixMath.multiply(matrix, translationMatrix);
    matrix = MatrixMath.multiply(matrix, rotationMatrix);
    matrix = MatrixMath.multiply(matrix, scaleMatrix);
    this.matrix = matrix;
  }

  translationMatrix(tx, ty, tz) {
    return new Matrix([
      [1, 0, 0],
      [0, 1, 0],
      [tx, ty, tz],
    ]);
  }

  rotationMatrix(angleInRadians) {
    var c = Math.cos(angleInRadians);
    var s = Math.sin(angleInRadians);
    return new Matrix([
      [c,-s, 0],
      [s, c, 0],
      [0, 0, 1],
    ]);
  }

  scalingMatrix(sx, sy, sz) {
    return new Matrix([
      [sx, 0, 0],
      [0, sy, 0],
      [0, 0, sz],
    ]);
  }
}
