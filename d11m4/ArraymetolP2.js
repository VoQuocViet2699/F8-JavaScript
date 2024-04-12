/**
 * forEach duyệt qua từng phần tử của mảng
 * every kiểm tra tất cả phần tử của mảng có thỏa mản điều kiện không
 * some kiểm tra từng phần tử của mảng có thỏa mản điều kiện không
 * find tìm kiếm 1 phần tử thỏa mãn điều kiện
 * filter tìm kiếm tất cả phần tử thỏa mãn điều kiện
 * map chỉnh sửa phàn tử trong mảng
 * reduce
 */

var source = [
  {
    id: 1,
    name: "Javascript",
    coin: 250,
  },
  {
    id: 2,
    name: "Java",
    coin: 100,
  },
  {
    id: 3,
    name: "Python",
    coin: 50,
  },
  {
    id: 4,
    name: "PHP",
    coin: 0,
  },
  {
    id: 5,
    name: "C++",
    coin: 0,
  },
  {
    id: 6,
    name: "C#",
    coin: 300,
  },
  {
    id: 7,
    name: "Java",
    coin: 0,
  },
];
source.forEach(function (something, idx) {
  console.log(idx, something);
});

var isFree = source.every(function (something, idx) {
  return something.coin > 0;
});
console.log(isFree);

var isFree = source.some(function (something, idx) {
  return something.coin > 0;
});
console.log(isFree);

var isFree = source.find(function (something, idx) {
  return something.name === "Java";
});
console.log(isFree);

var isFree = source.filter(function (something, idx) {
  return something.name === "Java";
});
console.log(isFree);

var newSource = source.map(function (source) {
  return {
    id: source.id,
    name: `Khóa học ${source.name}`,
    coin: `giá : ${source.coin}`,
  };
});
console.log(newSource);

var result = source.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue.coin;
}, 0);
console.log(result);
//nâng cao
var total = source.reduce((a, b) => a + b.coin, 0);
console.log(total);
//bài tập
var depth = [1, 2, [3, 4], 5, 6, [7, 8, 9]];
var flat = depth.reduce((a, b) => a.concat(b), []);
console.log(flat);

var arr = [
    {
        topic: 'FE',
        source: [
            {
                id: 1,
                name: "Javascript",
                coin: 250,
            },
            {
                id: 2,
                name: "Java",
                coin: 100,
            }
        ]
    },
    {
        topic: 'FE',
        source: [
            {
                id: 1,
                name: "Javascript",
                coin: 250,
            },
            {
                id: 2,
                name: "Java",
                coin: 100,
            }
        ]
    }
]

var outArr = arr.reduce((a , b) => a.concat(b.source), [])
console.log(outArr)

//includes kiểm tra trong mảng hoặc chuổi có phần tử cần tìm hay không
//call back : bạn định nghĩa funcion và truyền nó vào đối số của 1 funcion khác
function func(param) {
    param('hello')
} 
function callbackFunc(value){
    console.log(value)
}
func(callbackFunc)

//Định nghĩa lại một funcion map và cách hoạt động của callback
Array.prototype.map2 = function(callback) {
    var arraylenght = this.length;
    var outPut = [ ]
    for(var i = 0; i < arraylenght; i++){
        var result =  callback(this[i], i)
        outPut.push(result)
    }
    return outPut
}
var learn = [
    'Javascript',
    'Java',
    'Python',
    'PHP',
    'C++',
    'C#'
]

var htmls =  learn.map2(function(learns, idx){
    return `<h2>${learns}</h2>`
})

console.log(htmls.join(' '))

