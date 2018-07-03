<a name="GeometryBuffer"></a>

## GeometryBuffer
**Kind**: global class  
<a name="new_GeometryBuffer_new"></a>

### new GeometryBuffer(config)
A class for creating a geometry buffer.


| Param | Type | Description |
| --- | --- | --- |
| config | <code>Object</code> | configuration object |
| config.context | <code>Context</code> | The webgl context |
| config.vertices | <code>Array</code> | Clip space vertex data to bind to the buffer [x, y, r, g, b] |
| config.program | <code>ShaderProgram</code> | ShaderProgram to add buffer attributes to |

<a name="Triangle"></a>

## Triangle
**Kind**: global class  
<a name="new_Triangle_new"></a>

### new Triangle(config)
A class for creating a triangle.


| Param | Type | Description |
| --- | --- | --- |
| config | <code>Object</code> | configuration object |
| config.A | <code>Context</code> | Vertex A |
| config.B | <code>Context</code> | Vertex B |
| config.C | <code>Context</code> | Vertex C |

