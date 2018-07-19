/**
 * A class to manage a scene
 * @class Scene
 * @param {Array} cameras - Array of scene cameras
 * @param {Array} lights - Array of scene lights
 * @param {Array} objects - Array of objects in the scene
 */

const uuidv4 = require('uuid/v4');

export default class {
  constructor() {
    this.cameras = [];
    this.lights = [];
    this.objects = [];
  }

  add(object) {
    object.uuid = uuidv4();
    this.objects.push(object);
  }

  remove(uuid) {
    return this.objects.filter(el => el.uuid !== uuid);
  }

  destroyObjects() {
    this.objects = [];
  }
}
