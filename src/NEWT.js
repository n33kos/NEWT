/**
 * A module to assist WebGL development.
 * @module NEWT
 */

// ----Class Imports----
import Canvas         from './canvas/canvas';
import GeometryBuffer from './buffer/geometryBuffer';
import Shader         from './shader/shader';
import ShaderProgram  from './shader/shaderProgram';
import Text2D         from './text/text2D';

// ----Function Imports----
import DegToRad from './utils/math/radians';
import RadToDeg from './utils/math/degrees';
import Vector2  from './utils/math/vector2';
import Vector3  from './utils/math/vector3';
import Vector4  from './utils/math/vector4';

window.NEWT = {
  // Classes----------
  Canvas,
  GeometryBuffer,
  Shader,
  ShaderProgram,
  Text2D,

  // Functions--------
  DegToRad,
  RadToDeg,
  Vector2,
  Vector3,
  Vector4,
};
