//lấy element bằng id
var headnode = document.getElementById('id1')
console.log({
    element : headnode
})
//lấy element bằng class name
var classnode = document.getElementsByClassName('class1')
console.log(classnode)
//lấy element bằng tag name
var tagnode = document.getElementsByTagName('h2')
console.log(tagnode)
//lấy element bằng selector css
var selecnode = document.querySelector('class1:first-child')
console.log(selecnode)
//lấy element bằng colection html
var selecnodeall = document.querySelectorAll('.class1:first-child')
console.log(selecnodeall)
//lấy element form
console.log(document.forms)
//lấy element của thẻ a
console.log(document.anchors)

//từ document lấy đên class con của nó sau đố lấy các element con của class
var boxnode = document.querySelector('.box-1')
console.log(boxnode.querySelectorAll('li'))