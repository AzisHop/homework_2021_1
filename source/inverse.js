const inverse = (arr, flag) => {

    if (isNaN(flag)) {
        return arr.reverse();
    }

    if (flag >= 0) {
        return arr.splice(0, flag).concat(arr.reverse());
    } else {
        var tmp = arr.splice(flag);
        return arr.reverse().concat(tmp);
    }

};
