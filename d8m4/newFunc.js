function newFunct(message) {
    alert(message);
}
newFunct('vo quoc viet')
//arguments là 1 array
function writeLog() {
    var myString = ''
    for(var param of arguments) {
        myString += ` ${param} - `
    }
    console.log(myString)
}
writeLog("lop1" ,"lop2" ,"lop3" ,"lop4")
//return
function plus(a ,b) {
    return console.log(a *b)
}   
plus(9 ,5)
//Declaration function
function declaration(){
    console.log("declaration funcion")
}
//Expression funcion
var expression = function() {
    console.log("expression funcion")
}

//Arrow function học ở nâng cao