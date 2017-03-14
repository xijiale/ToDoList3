/**
 * Created by Administrator on 2017/3/14.
 */
define(function(require) {
    require('./main.css');
    var todoList = require('./todoList');
    console.log('main');
    todoList.init();
});