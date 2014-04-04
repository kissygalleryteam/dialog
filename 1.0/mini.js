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
        this.opts   = S.mix({}, def, opts);
        this.isInit = false;

        this.show();
    }

    /**
     * 初始化
     */
    Dialog.prototype.init = function() {
        var self = this,
            opts = self.opts,
            html;

        // 创建按钮
        self.createButtons();

        // 添加弹框
        html    = template(tpl.box, opts);
        self.el = $(html).appendTo($body);

        // 绑定事件
        self.bind();

        // 更改标识
        self.isInit = true;
    };

    /**
     * 创建按钮
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
     * 绑定事件
     */
    Dialog.prototype.bind = function() {
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
     * 显示弹框
     */
    Dialog.prototype.show = function() {
        var self = this;

        if (!self.isInit) {
            self.init();
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