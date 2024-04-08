/**
 *Làm việc với number
 */
var myNumber = 99
var myNum = 3.1423468423
const str = "10"
//toFixed() làm tròn số đên một vị trí thập phân chỉ định
console.log(myNum.toFixed(2))
//toString() chuyển đổi số thành chuổi
console.log(myNumber.toString())
//ParseInt() phân tích một chuổi và trả về 1 số nguyên
console.log(parseInt(str))
//ParseFloat() phân tích một chuổi và trả về float
console.log(parseFloat(str))
//isNaN() kiểm tra giá trị có phải NaN hay không
console.log(isNaN(myNumber))
//isFinite() kiểm tra xem 1 giá trị có phải 1 số hữu hạn hay không
console.log(isFinite(234))
console.log(isFinite(Infinity))
//method Math()