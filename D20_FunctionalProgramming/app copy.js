function mapForEach(arr, fn) {

    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(
            fn(arr[i] + (arr[i+1] || arr[0]))
        );
    };

    return newArr;
}

var arr1 = [1, 2, 3];
// console.log(arr1);

// var arr2 = mapForEach(arr1, function(item){
//     var n = item
//     if(item > 2){ this.item = item };

//     return this.item || 'ixi ' + n
// })
// console.log(arr2);

var arr3 = mapForEach(arr1, function(item){
    console.log(item)
})
console.log(arr3);