export default `

  precision mediump float;

  attribute vec3 vertexPosition;
  attribute vec4 diffuseColor;
  attribute vec4 vertexColor;

  varying vec4 fragColor;

  void main()
  {
    fragColor = diffuseColor * vertexColor;
    gl_Position = vec4(vertexPosition, 1.0);
  }

`;
