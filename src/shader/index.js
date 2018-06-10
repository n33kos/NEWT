export default class {
  constructor({
    context = null,
    source  = null,
    type    = null,
  }) {
    // Crete new shader of the provided a type
    let shader = context.createShader(context[type]);

    // Set the shader source code
    context.shaderSource(shader, source);

    // Attempt to compile the shader source code, it will set COMPILE_STATUS
    context.compileShader(shader);

    // Check COMPILE_STATUS shader parameter to see if it compiled successfully
    if (!context.getShaderParameter(shader, context.COMPILE_STATUS)) {
      console.error('Could not compile vertex shader', context.getShaderInfoLog(shader));
      return;
    }

    return shader;
  }
}
