/**
 * A class for initializing a canvas in webGL context
 * @class Canvas
 * @param {Object} config - configuration object
 * @param {string} config.element - The id of the canvas element to initialize
 * @param {number} config.height - The height of the canvas element
 * @param {number} config.width - The width of the canvas element
 * @param {array}  config.color - The initial background color [r, g, b, a]
 */

export default class {
  constructor({
    element = null,
    height = null,
    width = null,
    color = [1.0, 1.0, 1.0, 1.0],
  }) {
    if (element === null) {
      console.log('Please pass a canvas element to initialize');
      return;
    }

    const canvas = document.getElementById(element);

    try {
      this.context = canvas.getContext('webgl');
      this.context2D = this.create2DContext(canvas, height, width);
      this.setElementDimensions(canvas, height, width);
      this.setContextDimensions(this.context, height, width);
      this.setCanvasBackground(this.context, color);
    } catch(e) {
      console.log('Could Not Initialize WebGL');
      console.error(e);
    }
  }

  setElementDimensions(canvas, height, width) {
    canvas.setAttribute('width', width);
    canvas.setAttribute('height', height);
  }

  setContextDimensions(context, height, width) {
    context.viewportWidth = height;
    context.viewportHeight = width;
  }

  setCanvasBackground(context, color) {
    context.clearColor(...color);
    context.clear(context.COLOR_BUFFER_BIT|context.DEPTH_BUFFER_BIT);
  }

  create2DContext(canvas, height, width) {
    const canvas2D = document.createElement("canvas");

    canvas2D.setAttribute('id', `${canvas.id}2D`);
    canvas2D.setAttribute('width', width);
    canvas2D.setAttribute('height', height);
    canvas2D.style.cssText = 'position: absolute;';
    canvas.parentNode.insertBefore(canvas2D, canvas);
    return canvas2D.getContext('2d');
  }
}
