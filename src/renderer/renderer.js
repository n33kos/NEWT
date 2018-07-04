/**
 * A class to render a scene
 * @class Renderer
 * @param {Object} config - configuration object
 * @param {Scene} config.scene - Scene to render
 * @param {Context} config.context - WebGL context to render to
 */

export default class {
  constructor({
    scene = [],
    context = null,
  }) {
    this.scene = scene;
    this.context = context;
  }

  render() {
    canvas.clearCanvas();
    this.scene.objects.forEach(object => {
      this.renderObject(object);
    });
  }

  renderObject(object) {
    var geometryBuffer = new NEWT.GeometryBuffer({
      program  : object.material.shaderProgram,
      vertices : object.geometry,
    });
    geometryBuffer.createAndBind(this.context);
    geometryBuffer.attachVertexBufferDataToAttributes(this.context);
    this.context.useProgram(geometryBuffer.program);
    this.context.drawArrays(this.context.TRIANGLES, 0, 3);
  }
}
