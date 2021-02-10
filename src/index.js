exports.min = function min(array) {
    if (!array || array.length < 1) {
        return 0;
    }
    return Math.min(...array);
};

exports.max = function max(array) {
    if (!array || array.length < 1) {
        return 0;
    }
    return Math.max(...array);
};

exports.avg = function avg(array) {
    if (!array || array.length < 1) {
        return 0;
    }
    let b = array.reduce((acc, el) => {
        return acc + el;
    }, 0);
    return (b / array.length).toFixed(2);
};
