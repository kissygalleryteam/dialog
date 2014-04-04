/**
 * @fileoverview 
 * @author 莫争<gaoli.gl@taobao.com>
 * @module dialog
 **/

KISSY.add(function(S, Node, Mask) {
    var $     = Node.all,
        $body = $('body');

    // 默认配置
    var def = {
        mask       : true,
        title      : '',
        content    : '',
        buttons    : [],
        trigger    : null,
        classPrefix: 'ks-dialog'
    };

    // 模板集合
    var tpl = {

        box: '<div class="{{classPrefix}}">' +
                 '<div class="{{classPrefix}}-hd">{{title}}</div>'   +
                 '<div class="{{classPrefix}}-bd">{{content}}</div>' +
                 '<div class="{{classPrefix}}-ft">{{btnCont}}</div>' +
             '</div>',

        btn: '<a class="J_DialogBtn" href="javascript:;" data-index="{{index}}">{{name}}</a>'

    };

    // 遮罩实例
    var mask = new Mask();

    /**
     * 模板引擎
     * @param {String} text
     * @param {Object} data
     */
    var template = function(text, data) {
        var matcher = /{{([^{}]+)}}/g;

        return text.replace(matcher, function (match, name) {
            return (data[name] === undefined) ? '' : data[name];
        });
    };

    /**
     * Dialog
     */
    function Dialog(opts) {
        this.opts = S.mix({}, def, opts);
        this.init();
    }

    /**
     * 初始化
     */
    Dialog.prototype.init = function() {

    };

    /**
     * 创建按钮内容
     */
    Dialog.prototype.createButtons = function() {
        var self    = this,
            opts    = self.opts,
            buttons = opts.buttons,
            btnCont = '';

        buttons.forEach(function(btn, index) {
            btnCont += template(tpl.btn, {
                name : btn.name,
                index: index
            });
        });

        opts.btnCont = btnCont;
    };

    /**
     * 绑定按钮事件
     */
    Dialog.prototype.bindButtonsEvent = function() {
        var self    = this,
            opts    = self.opts,
            buttons = opts.buttons;

        self.el.delegate('click', '.J_DialogBtn', function(e) {
            var index = $(this).attr('data-index'),
                event = buttons[index].event;

            event && event.call(self, e);
        });
    };

    /**
     * 渲染弹框
     */
    Dialog.prototype.render = function() {
        var self = this,
            opts = self.opts,
            html;

        // 创建按钮内容
        self.createButtons();

        // 生成弹框元素
        html    = template(tpl.box, opts);
        self.el = $(html).appendTo($body);

        // 绑定按钮事件
        self.bindButtonsEvent();

        // 更改渲染标识
        self.isRendered = true;
    };

    /**
     * 显示弹框
     */
    Dialog.prototype.show = function() {
        var self = this;

        if (!self.isRendered) {
            self.render();
        }

        if (self.el) {
            self.el.show();
            self.opts.mask && mask.show();
        }
    };

    /**
     * 隐藏弹框
     */
    Dialog.prototype.hide = function() {
        var self = this;

        if (self.el) {
            self.el.hide();
            self.opts.mask && mask.hide();
        }
    };

    return Dialog;
}, {
    requires: ['node', './mask']
});