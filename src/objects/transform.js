/**
 * A class for object transofrm data
 * @class Transform
 * @param {Object} config - configuration object
 * @param {Vector3} config.position - Transform position
 * @param {Vector3} config.rotation - Transform Rotation
 * @param {Vector3} config.scale - Transform Scale
 */

import Matrix  from '../math/matrix';
import Matrix4 from '../math/matrix4';
import Vector3 from '../math/vector3';

export default class {
  constructor({
    position = new Vector3(1, 1, 1),
    rotation = new Vector3(0, 0, 0),
    scale = new Vector3(1, 1, 1),
  }) {
    this.position = position;
    this.rotation = rotation;
    this.scale = scale;
    this.calculateTransformMatrix(position, rotation, scale);
  }

  calculateTransformMatrix(
    position = this.position,
    rotation = this.rotation,
    scale = this.scale,
  ) {
    // Compute the matrices
    const translationMatrix = this.translationMatrix(position.x, position.y, position.z);
    const rotationMatrix = this.rotationMatrix(rotation.x, rotation.y, rotation.z);
    const scaleMatrix = this.scalingMatrix(scale.x, scale.y, scale.z);

    // Multiply the matrices.
    let matrix = new Matrix4();
    matrix = Matrix.multiply(matrix, translationMatrix);
    matrix = Matrix.multiply(matrix, rotationMatrix);
    matrix = Matrix.multiply(matrix, scaleMatrix);

    this.matrix = matrix;
  }

  translationMatrix(tx, ty, tz) {
    return new Matrix4([
      [1, 0, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 1, 0],
      [tx, ty, tz, 1],
    ]);
  }

  rotationMatrix(rx, ry, rz) {
    var cx = Math.cos(rx);
    var sx = Math.sin(rx);
    var cy = Math.cos(ry);
    var sy = Math.sin(ry);
    var cz = Math.cos(rz);
    var sz = Math.sin(rz);

    const xRotation = new Matrix4([
      [1, 0, 0, 0],
      [0, cx, sx, 0],
      [0, -sx, cx, 0],
      [0, 0, 0, 1],
    ]);

    const yRotation = new Matrix4([
      [cy, 0, -sy, 0],
      [0, 1, 0, 0],
      [sy, 0, cy, 0],
      [0, 0, 0, 1],
    ]);

    const zRotation = new Matrix4([
      [cz, sz, 0, 0],
      [-sz, cz, 0, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 1],
    ]);

    let rotationMatrix = new Matrix4();
    rotationMatrix = Matrix.multiply(rotationMatrix, xRotation);
    rotationMatrix = Matrix.multiply(rotationMatrix, yRotation);
    rotationMatrix = Matrix.multiply(rotationMatrix, zRotation);

    return rotationMatrix;
  }

  scalingMatrix(sx, sy, sz) {
    return new Matrix4([
      [sx, 0,  0,  0],
      [0, sy,  0,  0],
      [0,  0, sz,  0],
      [0,  0,  0,  1],
    ]);
  }
}
