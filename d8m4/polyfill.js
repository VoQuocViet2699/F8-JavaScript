// tự định nghĩa includes nếu như version không hỗ trợ và tương tự các method khác
if(!String.prototype.includes) {
    String.prototype.includes = function(search, start) {
        'use strict';
        if (typeof start!== 'number') {
            start = 0;
        }
        if (start + search.length > this.length) {
            return false;
        } else {
            return this.indexOf(search, start)!== -1;
        }
    };
}