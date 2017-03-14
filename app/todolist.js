/**
 * Created by Administrator on 2017/3/14.
 */
define(function (require,exports,module) {
    var $ = require('jquery');
    var data = require('./data');
    module.exports = {
        undoList:[],
        doneList:[],
        init:function () {
            console.log('init');
            this.bindUI();
            this.loadData();
        },
        loadData:function () {
            this.undoList = data.getData('undoList');
            $('#q1').text(this.undoList.length);
            for (var k = 0; k < this.undoList.length; k++) {
                var text4 = this.undoList[k];
                var htmlTempl4 = "<div class='arr'><input type='checkbox' class='inputtype r' id='selector' value="+text4+"><span>"+text4+"</span> <i class='fa fa-minus-circle d' aria-hidden='true' id='delete' data-value="+text4+"></i></div>";
                $('#task').append(htmlTempl4);

            }
            this.doneList = data.getData('doneList');
            $('#q2').text(this.doneList.length);
            for (var i = 0; i < this.doneList.length; i++) {
                var text5 = this.doneList[i];
                var htmlTempl5 = "<div class='array'><input type='checkbox' class='inputtype f' checked='checked' value="+text5+"><span>"+text5+"</span><i class='fa fa-minus-circle t' aria-hidden='true' data-value="+text5+"></i></div>";

                $('#taskl').append(htmlTempl5);

            }
        },
        bindUI:function () {
            var that = this;
            //添加
            $("#sub").on('click',function () {
                var text1  = $('.enter').val();
                if (!text1) {
                    alert("不能为空！");
                    return;
                }
                this.undoList.push(text1);
                data.add('undoList',this.undoList);
                this.loadData();
            }.bind(this))

            //删除undo
            $('.content').on('click','.d',function () {
                $(this).parent().remove();
                var text6 = $(this).attr('data-value');
                data.remove('undoList',text6);
                $('.f').parent().remove();
                $('.d').parent().remove();
                that.loadData();
            })

            //勾选
            $('.content').on('click','.r',function () {
                $(this).parent().remove();
                var text2 = $(this).val();
                that.doneList.push(text2);
                data.add('doneList',that.doneList);
                data.remove('undoList',text2);
                $('.f').parent().remove();
                $('.d').parent().remove();
                that.loadData();
            })

            //删除done
            $('.content').on('click','.t',function () {
                $(this).parent().remove();
                var text7 = $(this).attr('data-value');
                data.remove('doneList',text7);
                $('.f').parent().remove();
                $('.d').parent().remove();
                that.loadData();
            })

            //勾选取消
            $('.content').on('change','.f',function () {
                $(this).parent().remove();
                var text3 = $(this).val();
                that.undoList.push(text3);
                data.add('undoList',that.undoList);
                data.remove('doneList',text3);
                $('.f').parent().remove();
                $('.d').parent().remove();
                that.loadData();
            })

        }

    }
})