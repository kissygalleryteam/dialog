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
        this.isRendered = false;
    }

    /**
     * 渲染遮罩
     */
    Mask.prototype.render = function() {
        var self = this,
            html = '<div class="ks-dialog-mask"></div>';

        // 生成遮罩元素
        self.el = $(html).appendTo('body');

        // 更改渲染标识
        self.isRendered = true;
    };

    /**
     * 显示遮罩
     */
    Mask.prototype.show = function() {
        var self = this;

        if (!self.isRendered) {
            self.render();
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