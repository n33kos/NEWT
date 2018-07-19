export default `

  precision mediump float;

  uniform mat4 matrix;

  attribute vec4 vertexPosition;
  attribute vec4 diffuseColor;
  attribute vec4 vertexColor;

  varying vec4 fragColor;

  void main()
  {
    gl_Position = matrix * vertexPosition;

    fragColor = diffuseColor * vertexColor;
  }

`;
