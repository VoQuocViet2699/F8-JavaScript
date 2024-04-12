//bài tập forEach , reduce , find , filter như trên
Array.prototype.forEach2 = function(callback) {
    for(var idx in this) {
        if(this.hasOwnProperty(idx))//kiểm tra vòng lặp có duyệt qua proto hay không
        callback(this[idx],this);
    }
}

Array.prototype.filter2 = function(callback) {
    var outPut = [ ]
    for(var idx in this) {
        if(this.hasOwnProperty(idx))//kiểm tra vòng lặp có duyệt qua proto hay không
        if(callback(this[idx],this))
        outPut.push(this[idx])
    }
    return outPut
}

Array.prototype.some2 = function(callback) {
    for(var idx in this) {
        if(this.hasOwnProperty(idx))//kiểm tra vòng lặp có duyệt qua proto hay không
        if(callback(this[idx],this))
        return true
    }
    return false
}

Array.prototype.every2 = function(callback) {
    for(var idx in this) {
        if(this.hasOwnProperty(idx))//kiểm tra vòng lặp có duyệt qua proto hay không
        if(!callback(this[idx],this))
        return false
    }
    return true
}

var courses = [
    'javascript',
    'html',
    'css',
    'php',
    'java',
    'c++'
]

var sources = [
    {
        name : 'javascript',
        coin : 100
    },
    {
        name : 'html',
        coin : 200
    },
    {
        name : 'css',
        coin : 300
    }
]
courses.forEach2(function(course) {
    console.log(course)
})

var isFree = sources.filter2(function(source) {
    return source.coin >100
})
console.log(isFree)

var isStrue = sources.some2(function(source) {
    return source.coin >100
})
console.log(isStrue)

var isTrue = sources.every2(function(source) {
    return source.coin >= 100
})
console.log(isTrue)