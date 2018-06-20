/**
 * A class for creating a shader program from an array of shaders
 * @class ShaderProgram
 * @param {Object} config - configuration object
 * @param {string} config.context - The webgl context for the shader
 * @param {Array} config.shaders - an array of Shader objects, Will be added to the program in index order
 */

export default class {
  constructor({
    context = null,
    shaders = null,
  }){
    // Create new shader program
    let program = context.createProgram();

    // Attach shaders to program
    shaders.forEach(shader => {
      context.attachShader(program, shader);
    });

    // Links the shaders together
    context.linkProgram(program);
    if (!context.getProgramParameter(program, context.LINK_STATUS)) {
      // check LINK_STATUS to see if it linked correctly
      console.error('ERROR linking shader program', context.getProgramInfoLog(program));
      return;
    }

    // Validate the shader program
    context.validateProgram(program);
    if (!context.getProgramParameter(program, context.VALIDATE_STATUS)) {
      // check VALIDATE_STATUS to see if it linked correctly
      console.error('ERROR validating shader program', context.getProgramInfoLog(program));
      return;
    }

    this.shaders = shaders;
    this.program = program;
  }
}
