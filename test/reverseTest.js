const assert = require('assert')
const _ = require('../index')

describe('lodash', function() {
  describe('reverse', function() {
    it("_.reverse(['a', 'b', 'c']) equalTo [ 'c','b','a' ]", function() {
      assert.deepStrictEqual(_.reverse(['a', 'b', 'c']), [ 'c','b','a' ])
    });
    it("_.reverse(['1', '2', '3']) equalTo [ '3','2','1']", function() {
      assert.deepStrictEqual(_.reverse(['1', '2', '3']), [ '3','2','1'])
    });
    it("_.reverse(['1', '2', '3']) equalTo [ '1', '2', '3']", function() {
      assert.notDeepStrictEqual(_.reverse(['1', '2', '3']), [ '1', '2', '3'])
    });
  });
});