/**
 * A module to assist WebGL development.
 * @module NEWT
 */

// ----Class Imports----
import ArrayBuffer    from './buffer/arrayBuffer';
import Canvas         from './canvas/canvas';
import Color          from './color/color';
import Material       from './material/material';
import Matrix         from './math/matrix';
import Matrix4         from './math/matrix4';
import Mesh           from './objects/mesh';
import Renderer       from './renderer/renderer';
import Scene          from './scene/scene';
import Shader         from './shader/shader';
import ShaderProgram  from './shader/shaderProgram';
import Text2D         from './text/text2d';
import Transform      from './objects/transform';
import Triangle       from './geometry/triangle';
import Vector2        from './math/vector2';
import Vector3        from './math/vector3';
import Vector4        from './math/vector4';

// ----Function Imports----
import degToRad       from './math/degToRad';
import radToDeg       from './math/radToDeg';

const NEWT = {
  // Classes----------
  ArrayBuffer,
  Canvas,
  Color,
  Material,
  Matrix,
  Matrix4,
  Mesh,
  Renderer,
  Scene,
  Shader,
  ShaderProgram,
  Text2D,
  Transform,
  Triangle,
  Vector2,
  Vector3,
  Vector4,

  // Functions--------
  degToRad,
  radToDeg,
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined'){
  module.exports = NEWT;
} else {
  window.NEWT = NEWT;
}
