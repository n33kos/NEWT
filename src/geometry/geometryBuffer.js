/**
 * A class for creating a geometry buffer.
 * @class GeometryBuffer
 * @param {Object} config - configuration object
 * @param {Array} config.vertices - Clip space vertex data to bind to the buffer [x, y, r, g, b]
 * @param {ShaderProgram} config.program - ShaderProgram to add buffer attributes to
 */

export default class {
  constructor({
    vertices = null,
    program = null,
  }) {
    this.vertices = vertices;
    this.program = program;
    this.buffer = null;
  }

  createAndBind(context) {
    // Create a geometry buffer in the GPU memory
    let geometryBuffer = context.createBuffer();

    // Bind our buffer to the ARRAY_BUFFER slot on the GPU
    context.bindBuffer(context.ARRAY_BUFFER, geometryBuffer);

    // Bind the vertex data to the ARRAY_BUFFER. Note that javascript uses
    // Float64 arrays by default and webGL expects a Float32 array so we have to
    // convert it. We also pass STATIC_DRAW for the usage, it is a hint to the GPU
    // About how we will use the buffer
    context.bufferData(context.ARRAY_BUFFER, new Float32Array(this.vertices), context.STATIC_DRAW);

    this.buffer = geometryBuffer;

    this.attachVertexBufferDataToAttributes(context);
  }

  attachVertexBufferDataToAttributes(context) {
    let positionAttributeLocation = context.getAttribLocation(this.program, 'vertPosition');
    context.vertexAttribPointer(
      positionAttributeLocation, // Attribute Location
      2, // Number of elements per Attribute
      context.FLOAT, // Type of elements
      context.FALSE, // Should we normalize values?
      5 * Float32Array.BYTES_PER_ELEMENT, // Size of an individual vertex
      0, // Offset from beginning of a single vertex
    );

    let colorAttributeLocation = context.getAttribLocation(this.program, 'vertColor');
    context.vertexAttribPointer(
      colorAttributeLocation, // Attribute Location
      3, // Number of elements per Attribute
      context.FLOAT, // Type of elements
      context.FALSE, // Should we normalize values?
      5 * Float32Array.BYTES_PER_ELEMENT, // Size of an individual vertex
      2 * Float32Array.BYTES_PER_ELEMENT, // Offset from beginning of a single vertex
    );

    context.enableVertexAttribArray(positionAttributeLocation);
    context.enableVertexAttribArray(colorAttributeLocation);
  }
}
