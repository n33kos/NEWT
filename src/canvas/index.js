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
}
