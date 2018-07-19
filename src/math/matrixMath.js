import Matrix  from './matrix';

export default {
  multiply : (m1, m2) => {
    if (m1.columns !== m2.rows) {
      throw new Error('You can only multiply matrices with compatible dimensions');
    }

    var result = [[]];

    for (var i = 0; i < m1.rows; i++) {
      result[i] = [];

      for (var j = 0; j < m2.columns; j++) {
        var sum = 0;

        for (var k = 0; k < m1.columns; k++) {
          sum += m2.values[k][j] * m1.values[i][k];
        }

        result[i][j] = sum;
      }
    }

    return new Matrix(result);
  }
}
