/**
 * A class for a scene camea
 * @class Camera
 */

import Matrix  from '../math/matrix';
import Matrix4 from '../math/matrix4';
import Vector3 from '../math/vector3';

export default class {
  constructor({
    farClip = 1000,
    fov = 40,
    isActive = true,
    nearClip = 0.01,
    position = new Vector3(1, 1, 1),
    rotation = new Vector3(0, 0, 0),
    scale = new Vector3(1, 1, 1),
  }) {
    this.position = position;
    this.rotation = rotation;
    this.scale = scale;
    this.type = 'camera';
  }

  calculateProjectionMatrix(
    position = this.position,
    rotation = this.rotation,
    scale = this.scale,
    context = null,
  ) {
    if (context === null) return this.matrix = new Matrix4();

    // Compute the matrices
    const projectionMatrix = this.projectionMatrix(context.offsetHeight, context.offsetWidth, 400);
    let matrix = projectionMatrix;

    this.matrix = matrix;
  }

  projectionMatrix(h, w, d) {
    return new Matrix4([
      [2/w, 0, 0, 0],
      [0, -2/h, 0, 0],
      [0, 0, 2/d, 0],
      [-1, 1, 0, 1],
    ]);
  }
}
