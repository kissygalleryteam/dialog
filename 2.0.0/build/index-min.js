/*!build time : 2014-04-04 12:53:40 AM*/
KISSY.add("kg/dialog/2.0.0/plugin/mask",function(a,b){function c(){this.isInit=!1}var d=b.all;return c.prototype.render=function(){var a=this,b=d('<div class="ks-dialog-mask"></div>');a.el=b.appendTo("body"),a.isInit=!0},c.prototype.show=function(){var a=this;a.isInit||a.render(),a.el&&a.el.show()},c.prototype.hide=function(){var a=this;a.el&&a.el.hide()},c},{requires:["node"]}),KISSY.add("kg/dialog/2.0.0/mini",function(a,b,c){function d(b){this.option=a.mix({},e,b),this.isInit=!1}var e=(b.all,new c,{mask:!0,title:"",content:"",buttons:[],trigger:null,classPrefix:"ks-dialog"}),f={box:'<div class="{{classPrefix}}"><div class="{{classPrefix}}-hd">{{title}}</div><div class="{{classPrefix}}-bd">{{content}}</div><div class="{{classPrefix}}-ft">{{buttons}}</div></div>',btn:'<a class="{{classPrefix}}-btn" href="javascript:;">{{name}}</a>'},g=function(a,b){var c=/{{([^{}]+)}}/g;return a.replace(c,function(a,c){return void 0===b[c]?"":b[c]})};return d.prototype.render=function(){var a=this,b=a.option,c=b.classPrefix,d="";b.buttons.forEach(function(a){d+=g(f.btn,{name:a.name,classPrefix:c})}),a.isInit=!0},d.prototype.show=function(){var a=this;a.isInit||a.render(),a.el&&a.el.show()},d.prototype.hide=function(){var a=this;a.el&&a.el.hide()},d},{requires:["node","./plugin/mask"]}),KISSY.add("kg/dialog/2.0.0/index",function(a,b){return b},{requires:["./mini"]});