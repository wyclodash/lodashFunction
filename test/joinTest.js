const expect = require('chai').expect
const _ = require('../index')

describe('lodash', function() {
  var array = [1,2,3];
  var test = _.join(array,' | ');

  describe('join', function() {
    it("_.join(array) equalTo [ 1 | 2 | 3 ]", function() {
      expect(test).to.deep.equal('1 | 2 | 3')
      // assert.deepStrictEqual(other, [1, 2, 3, [4]])
    });
    it("_.join(array) equalTo [ 1, 2, 3 ]", function() {
      expect(array).to.deep.equal([1,2,3])
      // assert.deepStrictEqual(array, [1]);
    });
  });
});