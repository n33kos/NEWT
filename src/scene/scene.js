/**
 * A class to manage a scene
 * @class Scene
 * @param {Object} config - configuration object
 */

export default class {
  constructor() {
    this.cameras = [];
    this.lights = [];
    this.objects = [];
  }

  add(object) {
    this.objects.push(object)
  }
}
