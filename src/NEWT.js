/**
 * A module to assist WebGL development.
 * @module NEWT
 */

// ----Class Imports----
import Canvas         from './canvas/canvas';
import GeometryBuffer from './buffer/geometryBuffer';
import Material       from './material/material';
import Shader         from './shader/shader';
import ShaderProgram  from './shader/shaderProgram';
import Text2D         from './text/text2d';
import Vector2        from './utils/math/vector2';
import Vector3        from './utils/math/vector3';
import Vector4        from './utils/math/vector4';

// ----Function Imports----
import degToRad from './utils/math/radians';
import radToDeg from './utils/math/degrees';

const NEWT = {
  // Classes----------
  Canvas,
  GeometryBuffer,
  Material,
  Shader,
  ShaderProgram,
  Text2D,
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
