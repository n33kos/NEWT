/**
 * A class for object transform data
 * @class Transform
 * @param {Object} config - configuration object
 * @param {Vector3} config.position - Transform position
 * @param {Vector3} config.rotation - Transform Rotation
 * @param {Vector3} config.scale - Transform Scale
 * @param {Vector3} config.origin - Transform Origin
 */

import degToRad from '../math/degToRad';
import Matrix  from '../math/matrix';
import Matrix4 from '../math/matrix4';
import Vector3 from '../math/vector3';

export default class {
  constructor({
    origin = new Vector3(0.5, 0.5, 0.5),
    position = new Vector3(1, 1, 1),
    rotation = new Vector3(0, 0, 0),
    scale = new Vector3(1, 1, 1),
  }) {
    this.origin = origin;
    this.position = position;
    this.rotation = rotation;
    this.scale = scale;
    this.calculateTransformMatrix(position, rotation, scale, origin);
  }

  calculateTransformMatrix(
    origin = this.origin,
    position = this.position,
    rotation = this.rotation,
    scale = this.scale,
  ) {
    // Compute the matrices
    const originMatrix = this.originMatrix(origin.x, origin.y, origin.z);
    const rotationMatrix = this.rotationMatrix(rotation.x, rotation.y, rotation.z);
    const scaleMatrix = this.scalingMatrix(scale.x, scale.y, scale.z);
    const translationMatrix = this.translationMatrix(position.x, position.y, position.z);

    // Multiply the matrices.
    let matrix = new Matrix4();
    matrix = Matrix.multiply(matrix, scaleMatrix);
    matrix = Matrix.multiply(matrix, rotationMatrix);
    matrix = Matrix.multiply(matrix, translationMatrix);
    matrix = Matrix.multiply(matrix, originMatrix);

    this.matrix = matrix;
  }

  originMatrix(ox, oy, oz) {
    return new Matrix4([
      [1, 0, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 1, 0],
      [-ox, -oy, -oz, 1],
    ]);
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
    var cx = Math.cos(degToRad(rx));
    var sx = Math.sin(degToRad(rx));
    var cy = Math.cos(degToRad(ry));
    var sy = Math.sin(degToRad(ry));
    var cz = Math.cos(degToRad(rz));
    var sz = Math.sin(degToRad(rz));

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
