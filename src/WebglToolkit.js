/**
 * A module to assist WebGL development.
 * @module WebglToolkit
 */

// ----Class Imports----
import Canvas   from './canvas/index';
import Shader   from './shader/index';

// ----Function Imports----
import radToDeg from './utils/math/degrees';
import degToRad from './utils/math/radians';

window.WebglToolkit = {
  Canvas,
  Shader,
  Math : {
    radToDeg,
    degToRad,
  },
};
