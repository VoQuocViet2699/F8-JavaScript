// //JSON là một định dạng dữ liệu (chuỗi)
// //JavaScript Object Notation
// //JSON: number, boolean , null, array, object , string
// //Mã hóa / Giải mã
// //Encode / Decode
// //Stringify (từ javascript sang json) / Parse (từ json sang javascript)
// // var json = '["java", "json"]'
// // var json = '{"name" : "Việt", "age" : 22}'
// // var a = '1'
// // console.log( JSON.parse(a))

// //----------------------------------------------------------------

// //Promise(sync và async)
// //call back hell / pyramid of doom
// //có 3 trạng thái
// //1. pendding : đang chờ
// //2. fulfilled : thành công
// //3. rejected : thất bại
// var promise = new Promise(
//     //excutor
//     function(resolve, reject) {
//     //logic
//     //thành công : resolve()
//     //thất bại : reject()
// })

// promise
//     .then(function() {
//         //nêú resolve() được gọi
//     })
//     .catch(function() {
//         //nêú reject() được gọi
//     })
//     .finally(function() {
//         //1 trong 2 được gọi

//     })

// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// sleep(1000)
//     .then(() => {
//         console.log(1);
//         return sleep(1000);
//     })
//     .then(() => {
//         console.log(2);
//         return sleep(1000);
//     })
//     .then(() => {
//         console.log(3);
//         return sleep(1000);
//     });

// var promise1 = new Promise(function(resolve) {
//     setTimeout(function() {
//         resolve([1]);
//     },1000)
// })

// var promise2 = new Promise(function(resolve) {
//     setTimeout(function() {
//         resolve([2,3]);
//     },3000)
// })

// Promise.all([promise1,promise2])
//     .then(function([result1 ,result2]) {
//         console.log(result1.concat(result2));
//     })

///////////////////////////////////////////////////////////////
var users = [
  {
    id: 1,
    name: "Kim dan",
  },
  {
    id: 2,
    name: "nhu huyen",
  },
  {
    id: 3,
    name: "quoc viet",
  },
];

var comments = [
  {
    id: 1,
    user_id: 1,
    content: "hi moi nguoi",
  },
  {
    id: 2,
    user_id: 2,
    content: "moi nguoi hi lai",
  },
];

function getComment() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(comments);
    }, 1000);
  });
}

function getUserById(userIds) {
  return new Promise(function (resolve) {
    var result = users.filter(function (user) {
      return userIds.includes(user.id);
    });
    resolve(result);
  });
}

getComment()
  .then(function (comments) {
    var userIds = comments.map(function (comment) {
      return comment.user_id;
    });
    return getUserById(userIds)
        .then(function (users) {
            return {
                user: users,
                comment: comments
            }
    });
  })
  .then(function (data) {
    console.log(data);
  });
