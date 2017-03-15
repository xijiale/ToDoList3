/**
 * Created by Administrator on 2017/3/14.
 */
define(function(require) {
    require('font-awesome-webpack');
    require('!style-loader!css-loader!./main.css');
    var todoList = require('./todolist');
    //console.log('main');
    todoList.init();
});