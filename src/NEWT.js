/**
 * A module to assist WebGL development.
 * @module NEWT
 */

// ----Class Imports----
import Canvas  from './canvas/canvas';
import Program from './shader/program';
import Shader  from './shader/shader';
import Text2D  from './text/text2d';

// ----Function Imports----
import DegToRad from './utils/math/radians';
import RadToDeg from './utils/math/degrees';
import Vector2  from './utils/math/vector2';
import Vector3  from './utils/math/vector3';
import Vector4  from './utils/math/vector4';

window.NEWT = {
  // Classes----------
  Canvas,
  Program,
  Shader,
  Text2D,

  // Functions--------
  DegToRad,
  RadToDeg,
  Vector2,
  Vector3,
  Vector4,
};
