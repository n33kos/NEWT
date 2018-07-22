/**
 * A class for a scene camea
 * @class Camera
 * @param {Object} config - configuration object
 * @param {Boolean} config.isActive - Is camera active
 * @param {Transform} config.transform - Camera's transform object
 * @param {Float} config.zoom - Orthographic zoom
 */

import Matrix  from '../math/matrix';
import Matrix4 from '../math/matrix4';
import Transform from '../objects/transform';
import Vector3 from '../math/vector3';

export default class {
  constructor({
    isActive = true,
    transform = new Transform({}),
    zoom = 1,
  }) {
    this.isActive = isActive;
    this.transform = transform;
    this.type = 'camera';
    this.zoom = zoom;

    this.calculateProjectionMatrix();
  }

  calculateProjectionMatrix() {
    this.transform.calculateTransformMatrix();
    const transformMatrix = this.transform.matrix;
    const projectionMatrix = this.projectionMatrix(1, 1, 1000);

    let matrix = new Matrix4();
    matrix = Matrix.multiply(matrix, transformMatrix);
    matrix = Matrix.multiply(matrix, projectionMatrix);

    this.matrix = matrix;
  }

  projectionMatrix(h, w, d) {
    return new Matrix4([
      [this.zoom/w, 0, 0, 0],
      [0, this.zoom/h, 0, 0],
      [0, 0, this.zoom/d, 0],
      [-this.zoom/2, -this.zoom/2, -this.zoom/2, 1],
    ]);
  }
}
