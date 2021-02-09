/**
  * Переворачиваем массив
  * 
  * @param {array} arr - массив.
  * @param {flag} flag - число, до которого массив останется в неизменном виде, может отсутствовать, тогда
  * произойдет реверс всего массива.
  * @returns {reverse_arr}
  * @example
  * 
  * inverse([1,2,3,4,5]);
  * // => [5,4,3,2,1];
  */

const inverse = (arr, flag) => {

    if (typeof flag != "number") {
        return arr.reverse();
    }

    let tmp = [];

    return (flag >= 0) ? arr.splice(0, flag).concat(arr.reverse()) :
        (tmp = arr.splice(flag), arr.reverse().concat(tmp));

};
