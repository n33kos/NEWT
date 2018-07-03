## Modules

<dl>
<dt><a href="#module_NEWT">NEWT</a></dt>
<dd><p>A module to assist WebGL development.</p>
</dd>
</dl>

## Classes

<dl>
<dt><a href="#Vector2">Vector2</a></dt>
<dd></dd>
<dt><a href="#Vector3">Vector3</a></dt>
<dd></dd>
<dt><a href="#Vector4">Vector4</a></dt>
<dd></dd>
<dt><a href="#Canvas">Canvas</a></dt>
<dd></dd>
<dt><a href="#Shader">Shader</a></dt>
<dd></dd>
<dt><a href="#ShaderProgram">ShaderProgram</a></dt>
<dd></dd>
<dt><a href="#Text2D">Text2D</a></dt>
<dd></dd>
<dt><a href="#Material">Material</a></dt>
<dd></dd>
<dt><a href="#GeometryBuffer">GeometryBuffer</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#degrees">degrees(radians)</a></dt>
<dd><p>A function to convert radians to degrees</p>
</dd>
<dt><a href="#radians">radians(degrees)</a></dt>
<dd><p>A function to convert degrees to radians</p>
</dd>
</dl>

<a name="module_NEWT"></a>

## NEWT
A module to assist WebGL development.

<a name="Vector2"></a>

## Vector2
**Kind**: global class  
<a name="new_Vector2_new"></a>

### new Vector2(x, y)
A class to represent a 2 dimensional vector


| Param | Type |
| --- | --- |
| x | <code>number</code> | 
| y | <code>number</code> | 

<a name="Vector3"></a>

## Vector3
**Kind**: global class  
<a name="new_Vector3_new"></a>

### new Vector3(x, y, z)
A class to represent a 3 dimensional vector


| Param | Type |
| --- | --- |
| x | <code>number</code> | 
| y | <code>number</code> | 
| z | <code>number</code> | 

<a name="Vector4"></a>

## Vector4
**Kind**: global class  
<a name="new_Vector4_new"></a>

### new Vector4(x, y, z, w)
A class to represent a 4 dimensional vector


| Param | Type |
| --- | --- |
| x | <code>number</code> | 
| y | <code>number</code> | 
| z | <code>number</code> | 
| w | <code>number</code> | 

<a name="Canvas"></a>

## Canvas
**Kind**: global class  
<a name="new_Canvas_new"></a>

### new Canvas(config)
A class for initializing a canvas in webGL context


| Param | Type | Description |
| --- | --- | --- |
| config | <code>Object</code> | configuration object |
| config.height | <code>number</code> | The height of the canvas element |
| config.width | <code>number</code> | The width of the canvas element |
| config.element | <code>string</code> | The id of the canvas element to initialize |
| config.color | [<code>Vector4</code>](#Vector4) | The initial background color Vector4(r, g, b, a) |

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

<a name="Text2D"></a>

## Text2D
**Kind**: global class  
<a name="new_Text2D_new"></a>

### new Text2D(config)
A class for rendering 2D text


| Param | Type | Description |
| --- | --- | --- |
| config | <code>Object</code> | configuration object |
| config.canvas | [<code>Canvas</code>](#Canvas) | The canvas to draw the text on |
| config.font | <code>string</code> | The font string for the text (20px Arial) |
| config.text | <code>string</code> | The content of the rendered text |
| config.origin | [<code>Vector2</code>](#Vector2) | The origin point of the text Vector2(0, 1) |
| config.position | [<code>Vector2</code>](#Vector2) | The position of the text in pixels |
| config.color | [<code>Vector4</code>](#Vector4) | The text color Vector4(r, g, b, a) |

<a name="Material"></a>

## Material
**Kind**: global class  
<a name="new_Material_new"></a>

### new Material(config)
A class for creating a material


| Param | Type | Description |
| --- | --- | --- |
| config | <code>Object</code> | configuration object |
| config.context | <code>string</code> | The webgl context for the shader |
| config.type | <code>string</code> | The type of material to create (flat) |

<a name="GeometryBuffer"></a>

## GeometryBuffer
**Kind**: global class  
<a name="new_GeometryBuffer_new"></a>

### new GeometryBuffer(config)
A class for creating a geometry buffer .


| Param | Type | Description |
| --- | --- | --- |
| config | <code>Object</code> | configuration object |
| config.context | <code>Context</code> | The webgl context |
| config.vertices | <code>Array</code> | Clip space vertex data to bind to the buffer [x, y, r, g, b] |
| config.program | [<code>ShaderProgram</code>](#ShaderProgram) | ShaderProgram to add buffer attributes to |

<a name="degrees"></a>

## degrees(radians)
A function to convert radians to degrees

**Kind**: global function  

| Param | Type |
| --- | --- |
| radians | <code>number</code> | 

<a name="radians"></a>

## radians(degrees)
A function to convert degrees to radians

**Kind**: global function  

| Param | Type |
| --- | --- |
| degrees | <code>number</code> | 

