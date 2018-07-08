/**
 * A class for creating a material
 * @class Material
 * @param {Object} config - configuration object
 * @param {string} config.context - The webgl context for the shader
 * @param {Color} config.diffuse - the diffuse color for the material
 * @param {string} config.shaderType - The shader type of material to create (flat)
 * @param {array} config.vertexColorArray - An array of colors which correspond to the vertices in a mesh
 */

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
    diffuse = null,
    shaderType = null,
    vertexColorArray = null,
  }) {
    const vertexShader = new NEWT.Shader({
      context : ctx,
      source  : shaders[`${shaderType}Vertex`],
      type    : 'VERTEX_SHADER',
    });

    const fragmentShader = new NEWT.Shader({
      context : ctx,
      source  : shaders[`${shaderType}Fragment`],
      type    : 'FRAGMENT_SHADER',
    });

    const shaderProgram = new NEWT.ShaderProgram({
      context : ctx,
      shaders : [vertexShader.shader, fragmentShader.shader],
    });

    this.diffuse = diffuse;
    this.fragmentShader = fragmentShader;
    this.shaderProgram = shaderProgram.program;
    this.vertexColorArray = vertexColorArray;
    this.vertexShader = vertexShader;
    this.shaderType = shaderType;
  }
}
