//1. xác định điểm dừng
//2. Logic handle => tạo ra điểm dừng
function countDown(num) {
    if(num > 0) {
        console.log(num)
        return countDown(num - 1);
    }
    return num
}
countDown(10)

var arr = [1, 2, 3, 4, 5]
function loop(start,  end, callback) {
    
}