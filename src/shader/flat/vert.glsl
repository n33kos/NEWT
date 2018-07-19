export default `

  precision mediump float;

  uniform mat3 matrix;

  attribute vec3 vertexPosition;
  attribute vec4 diffuseColor;
  attribute vec4 vertexColor;

  varying vec4 fragColor;

  void main()
  {
    gl_Position = vec4(vec3(matrix * vertexPosition).xy, 1, 1);

    fragColor = diffuseColor * vertexColor;
  }

`;
