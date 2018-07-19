/**
 * A class to represent a 3 dimensional square matrix
 * @class Matrix3
 * @param {number} values - An array of arrays containing the matrix values
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

  toArray() {
    return new Float32Array([].concat.apply([], this.values));
  }
};
