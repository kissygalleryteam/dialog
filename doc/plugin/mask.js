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
     * render
     */
    Mask.prototype.render = function() {
        var self = this,
            $tpl = $('<div class="ks-dialog-mask"></div>');

        // 添加遮罩
        self.el = $tpl.appendTo('body');

        // 更改标识
        self.isInit = true;
    };

    /**
     * show
     */
    Mask.prototype.show = function() {
        var self = this;

        if (!self.isInit) {
            self.render();
        }

        self.el && self.el.show();
    };

    /**
     * hide
     */
    Mask.prototype.hide = function() {
        var self = this;

        self.el && self.el.hide();
    };

    return Mask;
}, {
    requires: ['node']
});