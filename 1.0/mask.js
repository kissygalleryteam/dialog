/**
 * @fileoverview
 * @author 莫争<gaoli.gl@taobao.com>
 * @module mask
 **/

KISSY.add(function(S, Node) {
    var $ = Node.all;

    /**
     * Mask
     */
    function Mask() {
        this.isInit = false;
    }

    /**
     * 初始化
     */
    Mask.prototype.init = function() {
        var self = this,
            html = '<div class="ks-dialog-mask"></div>';

        // 添加遮罩
        self.el = $(html).appendTo('body');

        // 更改标识
        self.isInit = true;
    };

    /**
     * 显示遮罩
     */
    Mask.prototype.show = function() {
        var self = this;

        if (!self.isInit) {
            self.init();
        }

        if (self.el) {
            self.el.show();
        }
    };

    /**
     * 隐藏遮罩
     */
    Mask.prototype.hide = function() {
        var self = this;

        if (self.el) {
            self.el.hide();
        }
    };

    return Mask;
}, {
    requires: ['node']
});