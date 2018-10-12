const assert = require('assert')
const _ = require('../index')

describe('lodash', function() {
  describe('tail', function() {
    it("_.tail(['a']) equalTo [ '' ]", function() {
      assert.deepStrictEqual(_.tail('a'), [ ])
      });
    it("_.tail(['a', 'b', 'c', 'd']) equalTo [ 'b', 'c', 'd' ]", function() {
      assert.deepStrictEqual(_.tail(['a', 'b', 'c', 'd']), [ 'b', 'c', 'd' ])
    });
    it("_.tail(['1', '2', '3', '4']) equalTo [ '2', '3', '4']", function() {
      assert.deepStrictEqual(_.tail(['1', '2', '3', '4']), [ '2', '3', '4'])
    });
    it("_.tail(['1', '2', '3', '4']) notEqualTo [ '1', '2', '3', '4' ]", function() {
      assert.notDeepStrictEqual(_.tail(['1', '2', '3', '4']), [ '1', '2', '3', '4'])
    });
  });
});