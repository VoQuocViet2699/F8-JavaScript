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

//Oject contructor
function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName = function() {
        return `${this.firstName} ${this.lastName}`
    }
}
 
var author = new User('viet', 'vo', 'avatar');
var user = new User('HUYEN', 'DANG' ,'AVATAR')

author.tittle = 'tiltle'
user.comment = 'comment'
console.log(author.getName())
console.log(user)

//Object prototype - basic
User.prototype.className = 'F8'
User.prototype.getClassName = function() {
    return this.className
}
//Date 
var date = new Date()
console.log(date)