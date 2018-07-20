/**
 * A class to render a scene
 * @class Renderer
 * @param {Object} config - configuration object
 * @param {Scene} config.scene - Scene to render
 * @param {Context} config.context - WebGL context to render to
 */

import Matrix from '../math/matrix';

export default class {
  constructor({
    scene = [],
    context = null,
  }) {
    this.scene = scene;
    this.context = context;
    context.enable(context.CULL_FACE);
    context.enable(context.DEPTH_TEST);
  }

  prepareArrayBuffer(object) {
    const buffer = new NEWT.ArrayBuffer(
      object.material.shaderProgram,
      this.getArrayBufferAttributes(object),
    );
    buffer.createAndBind(this.context);
    buffer.attachBufferDataToAttributes(this.context);
    this.context.useProgram(buffer.program);

    return buffer;
  }

  getArrayBufferAttributes(object) {
    const attributes = [];

    if (object.geometry !== null) {
      attributes.push({
        data      : object.geometry,
        elements  : 3,
        name      : 'vertexPosition',
        normalize : 'FALSE',
        type      : 'FLOAT',
      });
    }

    if(object.material.shaderType === 'flat') {
      attributes.push({
        data      : object.material.diffuse ? object.material.diffuse.toArray() : new NEWT.Color(1, 1, 1, 1).toArray(),
        elements  : 4,
        name      : 'diffuseColor',
        normalize : 'FALSE',
        type      : 'FLOAT',
      });

      attributes.push({
        data      : object.material.vertexColorArray || new NEWT.Color(1, 1, 1, 1).toArray(),
        elements  : 4,
        name      : 'vertexColor',
        normalize : 'FALSE',
        type      : 'FLOAT',
      });
    }

    return attributes;
  }

  getArrayBufferUniforms(object) {
    const uniforms = [];
    let matrix = Matrix.multiply(this.camera.matrix, object.transform.matrix);

    object.transform.calculateTransformMatrix();

    uniforms.push({
      data      : matrix.toArray(),
      elements  : 3,
      name      : 'matrix',
      normalize : 'FALSE',
      type      : 'FLOAT',
    });

    return uniforms;
  }

  setUniforms(object, buffer) {
    this.getArrayBufferUniforms(object).forEach(uniform => {
      const location = this.context.getUniformLocation(buffer.program, uniform.name);

      switch (uniform.elements) {
        case 2:
          this.context.uniformMatrix3fv(location, false, uniform.data);
          break;
        case 3:
          this.context.uniformMatrix4fv(location, false, uniform.data);
          break;
      }
    });
  }

  render() {
    canvas.clearCanvas();

    this.scene.cameras.forEach(camera => {
      camera.calculateProjectionMatrix();
      this.camera = camera;
    });

    this.scene.objects.forEach(object => {
      this.renderObject(object);
    });
  }

  renderObject(object) {
    const arrayBuffer = this.prepareArrayBuffer(object);
    this.setUniforms(object, arrayBuffer);
    this.context.drawArrays(this.context.TRIANGLES, 0, arrayBuffer.elements);
  }
}
