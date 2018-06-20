/**
 * A class for rendering 2D text
 * @class Text2D
 * @param {Object} config - configuration object
 * @param {Canvas} config.canvas - The canvas to draw the text on
 * @param {string} config.font - The font string for the text (20px Arial)
 * @param {string} config.text - The content of the rendered text
 * @param {Vector2} config.origin - The origin point of the text Vector2(0, 1)
 * @param {Vector2} config.position - The position of the text in pixels
 * @param {Vector4} config.color - The text color Vector4(r, g, b, a)
 */

export default class {
  constructor({
    canvas = null,
    color = null,
    font = null,
    position = null,
    text = null,
  }) {
    this.canvas   = canvas;
    this.color    = color;
    this.font     = font;
    this.position = position;
    this.text     = text;
  }

  draw() {
    canvas.context2D.font = this.font;
    canvas.context2D.fillStyle = `rgba(${this.color.x}, ${this.color.y}, ${this.color.z}, ${this.color.w})`;
    canvas.context2D.fillText(this.text, this.position.x, this.position.y);
  }
}
