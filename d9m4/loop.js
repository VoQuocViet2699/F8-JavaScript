/**
 * 1. for - lặp với điều điện đúng
 * 2. for in - lặp qua key của đối tượng
 * 3. for of - lặp qua value của đối tượng
 * 4. while - lặp khi điều kiện đúng
 * 5. do/while - lặp ít nhất 1 lần
 */
for (var i = 1; i <= 10; i++) {
  console.log(i);
}
var myArr = [1, 2, 3, 4, 5, 6, 7]

for (var i = 0; i < myArr.length; i++) {
  console.log(myArr[i]);
}

var myInfro = {
  name: "vo quoc viet",
  age: 23,
};

for (var key in myInfro) {
  console.log(key, myInfro[key])
}

for (var value of Object.keys(myInfro)) {
    console.log(myInfro[value], value)
}

var Arr = [
    [1,2],
    [3,4],
    [5,6],
    [7,8],
    [9,10]
]

for(var i = 0 ; i < Arr.length ; i++){
    for(var  j = 0 ; j <Arr[i].length ; j++){
        console.log(Arr[i][j])
    }

}