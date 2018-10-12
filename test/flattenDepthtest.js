const expect = require('chai').expect
const _ = require('../index')

const other = _.flattenDepth([1, [2, [3, [4]], 5]], 1)

describe('test flattenDepth', () => {
    it('result should be [1, 2, [3, [4]], 5]', () => {
        expect(other).to.deep.equal([1, 2, [3, [4]], 5])
    })
})