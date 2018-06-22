<a name="Shader"></a>

## Shader
**Kind**: global class  
<a name="new_Shader_new"></a>

### new Shader(config)
A class for creating a vertex or fragment shader.


| Param | Type | Description |
| --- | --- | --- |
| config | <code>Object</code> | configuration object |
| config.context | <code>string</code> | The webgl context for the shader |
| config.source | <code>string</code> | The shader source code |
| config.type | <code>string</code> | The shader type (VERTEX_SHADER, FRAGMENT_SHADER) |

<a name="ShaderProgram"></a>

## ShaderProgram
**Kind**: global class  
<a name="new_ShaderProgram_new"></a>

### new ShaderProgram(config)
A class for creating a shader program from an array of shaders


| Param | Type | Description |
| --- | --- | --- |
| config | <code>Object</code> | configuration object |
| config.context | <code>string</code> | The webgl context for the shader |
| config.shaders | <code>Array</code> | an array of Shader objects, Will be added to the program in index order |

