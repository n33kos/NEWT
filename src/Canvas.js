export default class {
  constructor({element = null, height = null, width = null} = {}) {
    if (element === null) {
      console.log('Please pass a canvas element to initialize');
      return;
    }

    const canvas = document.getElementById(element);

    try {
      // Get canvas webgl context
      this.context = canvas.getContext('webgl');

      // Set canvas element dimensions
      this.setElementDimensions(canvas, height, width);

      // Set canvas context dimensions
      this.setContextDimensions(this.context, height, width);
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
}
