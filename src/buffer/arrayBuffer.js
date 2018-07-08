/**
 * A class for creating a geometry buffer.
 * @class ArrayBuffer
 * @param {Array} attributes - An array of attributes to bind to the array buffer
 * @param {ShaderProgram} program - ShaderProgram to add buffer attributes to
 * @param {Object} attribute - an attribute config object
 * @param {Array} attribute.data - Vertex data to bind to the buffer
 * @param {int} attribute.elements - number of elements per attribute
 * @param {string} attribute.name - The name of the shader attribute to attach the data to
 * @param {string} attribute.normalize - boolean string to normalize values
 * @param {string} attribute.type - The element type to bind to the buffer
 */

export default class {
  constructor(program, attributes) {
    this.attributes = attributes;
    this.buffer = null;
    this.interlacedArray = this.getInterlacedArray(attributes);
    this.program = program;
    this.elements = Math.max(...attributes.map(o => o.data.length / o.elements));
    this.stride = attributes.reduce((accumulator, attribute) => (accumulator + attribute.elements), 0);
  }

  getInterlacedArray(attributes) {
    const chunkedAttributeData = [];
    attributes.forEach((attribute, attrIndex) => {
      chunkedAttributeData[attrIndex] = [];

      for (i = 0; i < attribute.data.length; i += attribute.elements) {
        chunkedAttributeData[attrIndex].push(
          attribute.data.slice(i, i + attribute.elements)
        );
      }
    });

    const interlacedArray = [];
    for (var i = 0; i < chunkedAttributeData[0].length; i++) {
      const row = [];
      attributes.forEach((attribute, attrIndex) => {
        const chunkedArrayLength = chunkedAttributeData[attrIndex].length;
        const chunkIndex = (chunkedArrayLength <= i) ? ( i % chunkedArrayLength) : i ;
        row.push(...chunkedAttributeData[attrIndex][chunkIndex]);
      });
      interlacedArray.push(...row);
    }

    return interlacedArray;
  }

  createAndBind(context) {
    // Create a geometry buffer in the GPU memory
    let arrayBuffer = context.createBuffer();

    // Bind our buffer to the ARRAY_BUFFER slot on the GPU
    context.bindBuffer(context.ARRAY_BUFFER, arrayBuffer);

    // Bind the vertex data to the ARRAY_BUFFER. Note that javascript uses
    // Float64 arrays by default and webGL expects a Float32 array so we have to
    // convert it. We also pass STATIC_DRAW for the usage, it is a hint to the GPU
    // About how we will use the buffer
    context.bufferData(context.ARRAY_BUFFER, new Float32Array(this.interlacedArray), context.STATIC_DRAW);

    this.buffer = arrayBuffer;
  }

  attachBufferDataToAttributes(context) {
    this.attributes.forEach((attribute, attrIndex) => {
      const attributeLocation = context.getAttribLocation(this.program, attribute.name);

      const offset = this.attributes.reduce((accumulator, attribute, index) => {
        if (index < attrIndex) return accumulator + attribute.elements;
        return accumulator;
      }, 0);

      context.vertexAttribPointer(
        attributeLocation, // Attribute Location
        attribute.elements, // Number of elements per Attribute
        context[attribute.type], // Type of elements
        context[attribute.normalize], // Should we normalize values?
        this.stride * Float32Array.BYTES_PER_ELEMENT, // Size of an individual vertex
        offset * Float32Array.BYTES_PER_ELEMENT, // Offset from beginning of a single vertex
      );
      context.enableVertexAttribArray(attributeLocation);
    });
  }
}
