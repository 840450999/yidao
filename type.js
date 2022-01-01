function type(str) {
    return function(o) {
        return Object.prototype.toString.call(o) === "[object " + str + "]";
    }
}


var isArr = type("Array"),
    isFun = type("Function"),
    isNum = type("Number"),
    isObj = type("Object")


function isExist(Q) {
    return Q !== undefined && Q !== null;
}

function isUnExist(Q) {
    return Q === undefined || Q === null;
}
export {
    isArr,
    isFun,
    isNum,
    isObj,
    type,
    isUnExist,
    isExist
}