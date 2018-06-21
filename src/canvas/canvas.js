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
      this.canvas = canvas;
      this.color = color;
      this.context = context;
      this.element = canvas;

      this.create2DContext(canvas);
      this.setElementDimensions(canvas, canvas.offsetHeight, canvas.offsetWidth);
      this.setContextViewport(canvas, context);
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

  setContextViewport(canvas, context) {
    context.viewport(0, 0, canvas.offsetWidth, canvas.offsetHeight);
  }

  clearCanvas(context = this.context, color = this.color) {
    context.clearColor(color.x, color.y, color.z, color.w);
    context.clear(context.COLOR_BUFFER_BIT|context.DEPTH_BUFFER_BIT);
  }

  create2DContext(canvas) {
    const canvas2D = canvas.cloneNode(true);

    this.setElementDimensions(canvas2D, canvas.offsetHeight, canvas.offsetWidth);
    canvas2D.setAttribute('id', `${canvas.id}2D`);
    canvas2D.style.position = "absolute";
    canvas2D.style.left = `${canvas.offsetLeft}px`;
    canvas2D.style.top = `${canvas.offsetTop}px`;
    canvas.parentNode.insertBefore(canvas2D, canvas.nextSibling);

    this.canvas2D = canvas2D;
    this.context2D = canvas2D.getContext('2d');
  }
}
