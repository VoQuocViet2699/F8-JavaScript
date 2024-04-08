var myArr = ['a', 'b', 'c', 'd'] 
var arr = [1, 2, 3, 4, 5]
console.log(myArr)
//kiểm tra có phải array
console.log(Array.isArray(myArr))
console.log(myArr.length)
console.log(myArr[2])
//Làm việc với array
//toString chuyển mảng thành chuổi
console.log(myArr.toString())
//join chuyển mảng thành chuổi
console.log(myArr.join(' ,'))
//push thêm 1 hoặc nhiều phần tử vào cuối mảng và trả về độ dài mới của mảng
console.log(myArr.push('5', '6', '7'))
//pop loại bỏ phần tử cuối và trả về phần tử đó
console.log(myArr.pop())
//shift loại bỏ phần tử đầu tiên và trả về phần tử đó
console.log(myArr.shift())
//uhshift Thêm một hoặc nhiều phần tử vào đầu mảng và trả về độ dài mới của mảng
console.log(myArr.unshift('6', '7', '8'))
//concat kết hợp hai hay nhiều mảng
console.log(myArr.concat(arr))
//slice trả về 1 bản sao của 1 phần mảng vào 1 mảng mới
console.log(myArr.slice(2, 6))
//splice xóa phẩn tử của mảng dựa theo vị trí chỉ định và chèn phần tử mới vào đó
console.log(myArr.splice(1, 0, "viet")) //('vị trí chỉ định', 'số lượng phần tử cần xóa', 'phần tử mới cần thêm vào')
//indexOf trả về chỉ mục đầu tiên mà tại đó phần tử đã cho có thẻ được tìm thấy trong mảng hoặc -1 nếu không có
console.log(myArr.indexOf('b'))
