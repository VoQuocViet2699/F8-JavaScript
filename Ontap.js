
//chuyển chuổi thành mảng aray
//tìm kiếm vị trí 
// tìm kí tự
//tách 1 mang mới từ mảng gốc theo vị trí chỉ định
//thay thế 

//kiểm tra có phải array
// chuyển mảng thành chuổi
//thêm phần tử vào đầu
//thêm phần tử vào cúi
//xóa phần tử ở đầu
//xóa phần tử ở cúi
//nối 2 mảng
//tạo ta 1 bản sao theo vị trí chỉ định
//chọn vị trí , số lượng xóa , từ thêm bào
//search

// làm tròn số đên một vị trí thập phân chỉ định
// chuyển đổi số thành chuổi
// phân tích một chuổi và trả về 1 số nguyên
// phân tích một chuổi và trả về float
// kiểm tra giá trị có phải NaN hay không
// kiểm tra xem 1 giá trị có phải 1 số hữu hạn hay không
// method Math()

//khởi tạo funcion(có tham số)
//arguments
//Expression funcion
//Declaration function
//return

// pollyfill
// lặp với điều điện đúng
// for in - lặp qua key của đối tượng
// for of - lặp qua value của đối tượng
// while - lặp khi điều kiện đúng
// do/while - lặp ít nhất 1 lần

//tạo 1 object
//thêm key value vào object đã tạo
// xóa 1 cặp key value
//object property
//object contructor

// forEach duyệt qua từng phần tử của mảng
//  * every kiểm tra tất cả phần tử của mảng có thỏa mản điều kiện không
//  * some kiểm tra từng phần tử của mảng có thỏa mản điều kiện không
//  * find tìm kiếm 1 phần tử thỏa mãn điều kiện
//  * filter tìm kiếm tất cả phần tử thỏa mãn điều kiện
//  * map chỉnh sửa phàn tử trong mảng
//  * reduce
//callback
// var SumChan = function(arr, callback) {
//     var sum = 0;
//     for (var i = 0; i < arr.length; i++) {
//         if(arr[i] % 2 == 0) {
//         sum += arr[i]
//     }
    
// }
// return callback(sum)
// }
// var array = [1,2,3,4,5,6,7,8,9]

// var result = function(tong) {
//     console.log(tong)
// }

// SumChan(array,result)
// function arrToObj(arr) {
//     return arr.reduce((obj, currentValue) => {
//         obj[currentValue[0]] = currentValue[1];
//         return obj;
//     }, {});
// }
 
// // Expected results:
// var arr = [
//     ['name', 'Sơn Đặng'],
//     ['age', 18],
// ];
// console.log(arrToObj(arr)); // { name: 'Sơn Đặng', age: 18 }



function render(courses) {
    var items = courses.map(function(item) {
        return '<li>' + item + '</li>'
    }).join('')
    var ulElement = document.querySelector('.courses-list');
    ulElement.innerHTML = items;
    
}
var courses = ['HTML & CSS', 'Javascript', 'PHP', 'Java']
render(courses)

