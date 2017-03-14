/**
 * Created by Administrator on 2017/3/14.
 */
define (function (require,exports,module) {
    var $ = require('jquery');
    module.exports = {
        add:function (key,value) {
            window.localStorage.setItem(key,value);
        },
        remove:function (key,value) {
            Array.prototype.removeByValue = function(val) {
                for(var i=0; i<this.length; i++) {
                    if(this[i] == val) {
                        this.splice(i, 1);
                        break;
                    }
                }
            }
            var arr = window.localStorage.getItem(key).split(',');
            arr.removeByValue(value);

            window.localStorage.setItem(key,arr);
        },
        getData:function (key) {
            if(window.localStorage.getItem(key))
                return window.localStorage.getItem(key).split(',')
            else
                return [];
        },
    }
});
