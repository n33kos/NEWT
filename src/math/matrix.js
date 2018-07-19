/**
* A class for matrix calculations
* @class Matrix
*/

export default class {
  constructor(values = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ]) {
    this.columns = values.length;
    this.rows = values[0].length;
    this.values = values;
  }

  toWebGL() {
    return new Float32Array([].concat.apply([], this.values));
  }
};
