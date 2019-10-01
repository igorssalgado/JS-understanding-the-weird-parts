function mapForEach(arr, fn) {

    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(
            fn(arr[i])
        );
    };

    return newArr;
}

var arr1 = [1, 2, 3];
console.log(arr1);

// var arr2 = mapForEach(arr1, function(item){
//     var n = item
//     if(item > 2){ this.item = item };

//     return this.item || 'ixi ' + n
// })
// console.log(arr2);

// var arr3 = mapForEach(arr1, function(item){
//     console.log(item)
// })
// console.log(arr3);

var checkPastLimit = function(limiter, item) {
    return item > limiter;
}

var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 3))
console.log(arr4)

var checkPastLimitSimplified = function (limiter) {
    return function (limiter, item) {
        return item > limiter;
    }.bind(this, limiter);
};
var arr5 = mapForEach(arr1, checkPastLimitSimplified(2))
console.log(arr5)