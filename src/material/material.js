/**
 * A class for creating a material
 * @class Material
 * @param {Object} config - configuration object
 * @param {string} config.context - The webgl context for the shader
 * @param {string} config.type - The type of material to create (flat)
 */

import Shader         from '../shader/shader';
import ShaderProgram  from '../shader/shaderProgram';

// Default Shaders
import flatVertex     from '../shader/flat/vert.glsl';
import flatFragment   from '../shader/flat/frag.glsl';
const shaders = {
  flatVertex,
  flatFragment,
}

export default class {
  constructor({
    context = null,
    type    = null,
  }) {
    const vertexShader = new NEWT.Shader({
      context : ctx,
      source  : shaders[`${type}Vertex`],
      type    : 'VERTEX_SHADER',
    });

    const fragmentShader = new NEWT.Shader({
      context : ctx,
      source  : shaders[`${type}Fragment`],
      type    : 'FRAGMENT_SHADER',
    });

    const shaderProgram = new NEWT.ShaderProgram({
      context : ctx,
      shaders : [vertexShader.shader, fragmentShader.shader],
    });

    this.vertexShader = vertexShader;
    this.fragmentShader = fragmentShader;
    this.shaderProgram = shaderProgram.program;
  }
}
