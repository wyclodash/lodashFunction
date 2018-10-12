/**
 * 
 * Reverses array so that the first element becomes the last, the second element becomes the second to last, and so on.
 * 
 * @memberof _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to modify.
 * @returns {Array} Returns array.
 * @example
 *
 * var array = [1, 2, 3];
 * 
 * _.reverse(array);
 * // => [3, 2, 1]
 * 
 * console.log(array);
 * // => [3, 2, 1]
 * 
 */


function reverse(array){
    clist = []
    clist = array.reverse()
    return clist
} 

module.exports = reverse