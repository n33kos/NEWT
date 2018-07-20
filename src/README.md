## Modules

<dl>
<dt><a href="#module_NEWT">NEWT</a></dt>
<dd><p>A module to assist WebGL development.</p>
</dd>
</dl>

## Classes

<dl>
<dt><a href="#Renderer">Renderer</a></dt>
<dd></dd>
<dt><a href="#Color">Color</a></dt>
<dd></dd>
<dt><a href="#Mesh">Mesh</a></dt>
<dd></dd>
<dt><a href="#Camera">Camera</a></dt>
<dd></dd>
<dt><a href="#Transform">Transform</a></dt>
<dd></dd>
<dt><a href="#Vector2">Vector2</a></dt>
<dd></dd>
<dt><a href="#Matrix3">Matrix3</a></dt>
<dd></dd>
<dt><a href="#Vector3">Vector3</a></dt>
<dd></dd>
<dt><a href="#Matrix">Matrix</a></dt>
<dd></dd>
<dt><a href="#Vector4">Vector4</a></dt>
<dd></dd>
<dt><a href="#Matrix4">Matrix4</a></dt>
<dd></dd>
<dt><a href="#Canvas">Canvas</a></dt>
<dd></dd>
<dt><a href="#Shader">Shader</a></dt>
<dd></dd>
<dt><a href="#ShaderProgram">ShaderProgram</a></dt>
<dd></dd>
<dt><a href="#Pyramid">Pyramid</a></dt>
<dd></dd>
<dt><a href="#Triangle">Triangle</a></dt>
<dd></dd>
<dt><a href="#Text2D">Text2D</a></dt>
<dd></dd>
<dt><a href="#Scene">Scene</a></dt>
<dd></dd>
<dt><a href="#Material">Material</a></dt>
<dd></dd>
<dt><a href="#ArrayBuffer">ArrayBuffer</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#radians">radians(degrees)</a></dt>
<dd><p>A function to convert degrees to radians</p>
</dd>
<dt><a href="#degrees">degrees(radians)</a></dt>
<dd><p>A function to convert radians to degrees</p>
</dd>
</dl>

<a name="module_NEWT"></a>

## NEWT
A module to assist WebGL development.

<a name="Renderer"></a>

## Renderer
**Kind**: global class  
<a name="new_Renderer_new"></a>

### new Renderer(config)
A class to render a scene


| Param | Type | Description |
| --- | --- | --- |
| config | <code>Object</code> | configuration object |
| config.scene | [<code>Scene</code>](#Scene) | Scene to render |
| config.context | <code>Context</code> | WebGL context to render to |

<a name="Color"></a>

## Color
**Kind**: global class  
<a name="new_Color_new"></a>

### new Color(r, g, b, a)
A class to contain color data


| Param | Type | Description |
| --- | --- | --- |
| r | <code>Float</code> | Red channel value (0-1) |
| g | <code>Float</code> | Green channel value (0-1) |
| b | <code>Float</code> | Blue channel value (0-1) |
| a | <code>Float</code> | Alpha channel value (0-1) |

<a name="Mesh"></a>

## Mesh
**Kind**: global class  
<a name="new_Mesh_new"></a>

### new Mesh(config)
A class to create a mesh object


| Param | Type | Description |
| --- | --- | --- |
| config | <code>Object</code> | configuration object |
| config.geometry | <code>Array</code> | Geometry for the mesh |
| config.material | [<code>Material</code>](#Material) | Material for the mesh |

<a name="Camera"></a>

## Camera
**Kind**: global class  
<a name="new_Camera_new"></a>

### new Camera()
A class for a scene camea

<a name="Transform"></a>

## Transform
**Kind**: global class  
<a name="new_Transform_new"></a>

### new Transform(config)
A class for object transform data


| Param | Type | Description |
| --- | --- | --- |
| config | <code>Object</code> | configuration object |
| config.position | [<code>Vector3</code>](#Vector3) | Transform position |
| config.rotation | [<code>Vector3</code>](#Vector3) | Transform Rotation |
| config.scale | [<code>Vector3</code>](#Vector3) | Transform Scale |
| config.origin | [<code>Vector3</code>](#Vector3) | Transform Origin |

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

<a name="Matrix3"></a>

## Matrix3
**Kind**: global class  
<a name="new_Matrix3_new"></a>

### new Matrix3(values)
A class to represent a 3 dimensional square matrix


| Param | Type | Description |
| --- | --- | --- |
| values | <code>number</code> | An array of arrays containing the matrix values |

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

<a name="Matrix"></a>

## Matrix
**Kind**: global class  
<a name="new_Matrix_new"></a>

### new Matrix()
A class containing matrix math functions

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

<a name="Matrix4"></a>

## Matrix4
**Kind**: global class  
<a name="new_Matrix4_new"></a>

### new Matrix4(values)
A class to represent a 4 dimensional square matrix


| Param | Type | Description |
| --- | --- | --- |
| values | <code>number</code> | An array of arrays containing the matrix values |

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

<a name="Pyramid"></a>

## Pyramid
**Kind**: global class  
<a name="new_Pyramid_new"></a>

### new Pyramid(vertices)
A class for creating a pyramid.


| Param | Type | Description |
| --- | --- | --- |
| vertices | <code>Object</code> | Vertices for the triangle geometry |

<a name="Triangle"></a>

## Triangle
**Kind**: global class  
<a name="new_Triangle_new"></a>

### new Triangle(vertices)
A class for creating a triangle.


| Param | Type | Description |
| --- | --- | --- |
| vertices | <code>Object</code> | Vertices for the triangle geometry |

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

<a name="Scene"></a>

## Scene
**Kind**: global class  
<a name="new_Scene_new"></a>

### new Scene(cameras, lights, objects)
A class to manage a scene


| Param | Type | Description |
| --- | --- | --- |
| cameras | <code>Array</code> | Array of scene cameras |
| lights | <code>Array</code> | Array of scene lights |
| objects | <code>Array</code> | Array of objects in the scene |

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
| config.diffuse | [<code>Color</code>](#Color) | the diffuse color for the material |
| config.shaderType | <code>string</code> | The shader type of material to create (flat) |
| config.vertexColorArray | <code>array</code> | An array of colors which correspond to the vertices in a mesh |

<a name="ArrayBuffer"></a>

## ArrayBuffer
**Kind**: global class  
<a name="new_ArrayBuffer_new"></a>

### new ArrayBuffer(attributes, program, attribute)
A class for creating an array buffer.


| Param | Type | Description |
| --- | --- | --- |
| attributes | <code>Array</code> | An array of attributes to bind to the array buffer |
| program | [<code>ShaderProgram</code>](#ShaderProgram) | ShaderProgram to add buffer attributes to |
| attribute | <code>Object</code> | an attribute config object |
| attribute.data | <code>Array</code> | Vertex data to bind to the buffer |
| attribute.elements | <code>int</code> | number of elements per attribute |
| attribute.name | <code>string</code> | The name of the shader attribute to attach the data to |
| attribute.normalize | <code>string</code> | boolean string to normalize values |
| attribute.type | <code>string</code> | The element type to bind to the buffer |

<a name="radians"></a>

## radians(degrees)
A function to convert degrees to radians

**Kind**: global function  

| Param | Type |
| --- | --- |
| degrees | <code>number</code> | 

<a name="degrees"></a>

## degrees(radians)
A function to convert radians to degrees

**Kind**: global function  

| Param | Type |
| --- | --- |
| radians | <code>number</code> | 

