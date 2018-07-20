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

  add(entity) {
    entity.uuid = uuidv4();

    switch (entity.type) {
      case 'camera':
        this.cameras.push(entity);
        break;
      case 'mesh':
        this.objects.push(entity);
        break;
      case 'light':
        this.lights.push(entity);
        break;
    }
  }

  remove(uuid) {
    return this.objects.filter(el => el.uuid !== uuid);
  }

  destroyObjects() {
    this.objects = [];
  }
}
