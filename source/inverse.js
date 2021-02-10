/**
  * Переворачиваем массив
  * 
  * @param {array} arr - массив.
  * @param {number} flag - число, до которого массив останется в неизменном виде, может отсутствовать, тогда
  * произойдет реверс всего массива.
  * @returns {array}
  * @example
  * 
  * inverse([1,2,3,4,5]);
  * // => [5,4,3,2,1];
  */

const inverse = (arr, flag) => {

    if (typeof flag !== "number") {
      return arr.reverse();
    }

    if (flag >= 0) {
      return arr.splice(0, flag).concat(arr.reverse());
    } else {
        const tmp = arr.splice(flag);
        return arr.reverse().concat(tmp);
    }

};
