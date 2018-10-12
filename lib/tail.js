/**
 * 
 * Gets all but the first element of array.
 * 
 * @memberof _
 * @since 0.1.0
 * @category Array
 * @param {Array} array  The array to query.
 * @returns {Array} Returns the slice of array.
 * @example
 *
 * _.tail([1, 2, 3]);
 * // => [2, 3]
 */

function tail(array){
    clist = []
    for(i=1;i<array.length;i++){
        clist.push(array[i])
    }
    return clist
}

module.exports = tail