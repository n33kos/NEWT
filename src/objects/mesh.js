/**
 * A class to create a mesh object
 * @class Mesh
 * @param {Object} config - configuration object
 * @param {Array} config.geometry - Geometry for the mesh
 * @param {Material} config.material - Material for the mesh
 */

import Material from '../material/material';
import Transform from './transform';

export default class {
  constructor({
    geometry = [],
    material = new Material('flat'),
  }) {
    this.geometry = geometry;
    this.material = material;
    this.transform = new Transform({});
    this.type = 'mesh';
  }
}
