/**
 * A class to create a mesh object
 * @class Mesh
 * @param {Object} config - configuration object
 * @param {Context} config.geometry - Geometry for the mesh
 * @param {Context} config.material - Material for the mesh
 */

import Triangle from '../geometry/triangle';
import Material from '../material/material';

export default class {
  constructor({
    geometry = new Triangle(),
    material = new Material('flat'),
  }) {
    this.geometry = geometry;
    this.material = material;
  }
}
