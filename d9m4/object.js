var girlfriends = 'girlfriends'
var myObject = {
    namme: "vo quoc viet",
    age: 18,
    gender: "male",
    job: "programmer",
    [girlfriends] : 'dang nhu huyen',
    hobby: ["sing", "dancing", "reading"],
    hobbies: ["sing", "dancing", "reading"],
    hobbies: ["sing", "dancing", "reading"],
    getName : function() {
        return this.job
    }
}

//thêm 1 cặp key và value
myObject.email = "voquocviet0909@gmail.com"
var myKey = 'namme'
console.log(myObject[myKey])
console.log(myObject.getName())
//xóa 1 key
delete myObject.hobbies
console.log(myObject)
//function --> phương thức/method
//others --> thuộc tính/property