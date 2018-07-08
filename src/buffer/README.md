<a name="ArrayBuffer"></a>

## ArrayBuffer
**Kind**: global class  
<a name="new_ArrayBuffer_new"></a>

### new ArrayBuffer(attributes, program, attribute)
A class for creating a geometry buffer.


| Param | Type | Description |
| --- | --- | --- |
| attributes | <code>Array</code> | An array of attributes to bind to the array buffer |
| program | <code>ShaderProgram</code> | ShaderProgram to add buffer attributes to |
| attribute | <code>Object</code> | an attribute config object |
| attribute.data | <code>Array</code> | Vertex data to bind to the buffer |
| attribute.elements | <code>int</code> | number of elements per attribute |
| attribute.name | <code>string</code> | The name of the shader attribute to attach the data to |
| attribute.normalize | <code>string</code> | boolean string to normalize values |
| attribute.type | <code>string</code> | The element type to bind to the buffer |

