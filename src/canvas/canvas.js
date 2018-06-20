/**
 * A class for initializing a canvas in webGL context
 * @class Canvas
 * @param {Object} config - configuration object
 * @param {number} config.height - The height of the canvas element
 * @param {number} config.width - The width of the canvas element
 * @param {string} config.element - The id of the canvas element to initialize
 * @param {Vector4} config.color - The initial background color Vector4(r, g, b, a)
 */

export default class {
  constructor({
    color = new Vector4(1.0, 1.0, 1.0, 1.0),
    element = null,
    height = null,
    width = null,
  }) {
    if (element === null) {
      console.log('Please pass a canvas element to initialize');
      return;
    }

    const canvas = document.getElementById(element);
    const context = canvas.getContext('webgl');

    try {
      this.color = color;
      this.context = context;
      this.context2D = this.create2DContext(canvas, height, width);
      this.element = canvas;

      this.setElementDimensions(canvas, height, width);
      this.setContextViewport(context);
      this.clearCanvas(context, color);
    } catch(e) {
      console.log('Could Not Initialize WebGL');
      console.error(e);
    }
  }

  setElementDimensions(canvas, height, width) {
    canvas.setAttribute('width', width);
    canvas.setAttribute('height', height);
  }

  setContextViewport(context) {
    context.viewport(0, 0, context.drawingBufferWidth, context.drawingBufferHeight);
  }

  clearCanvas(context = this.context, color = this.color) {
    context.clearColor(color.x, color.y, color.z, color.w);
    context.clear(context.COLOR_BUFFER_BIT|context.DEPTH_BUFFER_BIT);
  }

  create2DContext(canvas, height, width) {
    const canvas2D = document.createElement('canvas');

    canvas2D.setAttribute('id', `${canvas.id}2D`);
    this.setElementDimensions(canvas2D, height, width);
    canvas2D.style.position = "absolute";
    canvas.parentNode.insertBefore(canvas2D, canvas);

    return canvas2D.getContext('2d');
  }
}
