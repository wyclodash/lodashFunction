/**
 *Recursively flatten array up to depth times.
 * 
 * @memberof _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @param {Number} [depth=1] The values to exclude.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flattenDeep([1, [2, [3, [4]], 5]])
 * // => [1, 2, 3, 4, 5]
 *
 */

function flattenDepth(array, depth) {
    for(let i=0; i<depth; i++) {
            array = flatten(array)
    }
    return array
}

function flatten(arr) { 
    let y = []
    for(let i= 0;i<arr.length; i++) {
        if(Array.isArray(arr[i])) {
            for(let j=0; j<arr[i].length; j++) 
                y.push(arr[i][j])
        }
        else y.push(arr[i])
    }
    return y
}
  
  module.exports = flattenDepth