/**
 * 
 * Converts all elements in array into a string separated by separator.
 * 
 * @memberof _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to convert.
 * @param {String} [separator=','] The element separator.
 * @returns {String} Returns the joined string.
 * @example
 *
 * _.join(['a', 'b', 'c'],' | ')
 * // => 'a | b | c'
 *
 * _.join(['a', 'b', 'c'], '~');
 * // => 'a~b~c'
 */

function join(array,a){
    clist = ''
    clist = array.join(a)
    return clist
}

module.exports = join