export default `

  precision mediump float;

  uniform mat4 matrix;
  uniform mat4 projection;

  attribute vec4 vertexPosition;
  attribute vec4 diffuseColor;
  attribute vec4 vertexColor;

  varying vec4 fragColor;

  void main()
  {
    gl_Position = projection * matrix * vertexPosition;

    fragColor = diffuseColor * vertexColor;
  }

`;
