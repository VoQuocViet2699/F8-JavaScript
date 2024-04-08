/*
Chuỗi trong javascript 

1. Tạo chuỗi 
    - các cách tạo chuỗi
    - nên dùng cách nào? lý do?
    - kiểm tra datatype
2. Một số case sử dụng blacklash(\)
3. Xem độ dài chuỗi 
4. Chú ý độ dài khi viết code
5. Template string ES6    
*/

var fullName = "vo quoc viet"
console.log(fullName.length)
console.log(`Toi la ${fullName}`)

/**
 * Làm việc với chuỗi
 * keyword : javascript string method
 */

var myStr = "vo quoc viet"
//charAt(index) trả về kí tự tại chỉ mục đã chỉ định trong chuỗi
console.log(myStr.charAt(3))
//indexOf(substring) trả về chỉ mục lần xuất hiện dầu tiên của chuỗi con
//trong chuỗi hoặc -1 nếu không tìm thấy
console.log(myStr.indexOf("viet"))
//substring(startIndex, endIndex) : Trả về một chuỗi con của một chuỗi giữa các chỉ số đã chỉ định.
console.log(myStr.substring(3, 7))
//Split(separator) tách chuổi thành mảng dựa trên dấu phân cách được chỉ định
console.log(myStr.split(" "))
//replace(searchvalue, replacevalue) thay 1 giá trị được chỉ định bằng 1 giá trị khác
console.log(myStr.replace('vo' , 'tran'))
//concat nối chuổi