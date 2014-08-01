/**
 * @fileoverview 
 * @author 莫争<gaoli.gl@taobao.com>
 * @module dialog
 **/

KISSY.add(function(S, Node, Mask) {
    var $    = Node.all,
        mask = new Mask();

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
                 '<div class="{{classPrefix}}-ft">{{buttons}}</div>' +
             '</div>',

        btn: '<a class="{{classPrefix}}-btn" href="javascript:;">{{name}}</a>'

    };

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
    function Dialog(opt) {
        this.option = S.mix({}, def, opt);
        this.isInit = false;
    }

    /**
     * render
     */
    Dialog.prototype.render = function() {
        var self        = this,
            option      = self.option,
            classPrefix = option.classPrefix,
            buttonsHtml = '';

        // 拼装按钮
        option.buttons.forEach(function(btn, index) {
            buttonsHtml += template(tpl.btn, {
                name       : btn.name,
                classPrefix: classPrefix
            });
        });

        // 更改标识
        self.isInit = true;
    };

    /**
     * show
     */
    Dialog.prototype.show = function() {
        var self = this;

        if (!self.isInit) {
            self.render();
        }

        self.el && self.el.show();
    };

    /**
     * hide
     */
    Dialog.prototype.hide = function() {
        var self = this;

        self.el && self.el.hide();
    };

    return Dialog;
}, {
    requires: ['node', './plugin/mask']
});