const inverse = (arr, flag) => {

    if (typeof flag != "number") {
        return arr.reverse();
    }

    let tmp = [];

    return (flag >= 0) ? arr.splice(0, flag).concat(arr.reverse()) :
        (tmp = arr.splice(flag), arr.reverse().concat(tmp));

};
