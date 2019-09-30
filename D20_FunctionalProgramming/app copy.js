function mapForEach(arr, fn) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(
            fn(arr[i])
        )
    };

    return newArr;
}


var arr1 = [1, 2, 3];
console.log(arr1);


var arr2 = mapForEach(arr1, function (item) {
    return item * 2;
})
console.log(arr2)


var arr3 = mapForEach(arr1, function (item) {
    return item > 2;
})
console.log(arr3)

var checkPastLimit = function (limiter, item) {
    return item > limiter;
}
var arr4 = mapForEach(arr1, noBind(1));
console.log(arr4);


function noBind(limiter){
    return checkPastLimit.bind(this, limiter);
}