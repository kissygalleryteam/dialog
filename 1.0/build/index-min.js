/*!build time : 2014-04-04 7:33:13 PM*/
KISSY.add("gallery/dialog/1.0/mask",function(a,b){function c(){this.isInit=!1}var d=b.all;return c.prototype.init=function(){var a=this,b='<div class="ks-dialog-mask"></div>';a.el=d(b).appendTo("body"),a.isInit=!0},c.prototype.show=function(){var a=this;a.isInit||a.init(),a.el&&a.el.show()},c.prototype.hide=function(){var a=this;a.el&&a.el.hide()},c},{requires:["node"]}),KISSY.add("gallery/dialog/1.0/mini",function(a,b,c){function d(b){this.opts=a.mix({},g,b),this.isInit=!1}var e=b.all,f=e("body"),g={mask:!0,title:"",content:"",buttons:[],trigger:null,classPrefix:"ks-dialog"},h={box:'<div class="{{classPrefix}}"><div class="{{classPrefix}}-hd">{{title}}</div><div class="{{classPrefix}}-bd">{{content}}</div><div class="{{classPrefix}}-ft">{{btnCont}}</div></div>',btn:'<a class="J_DialogBtn" href="javascript:;" data-index="{{index}}">{{name}}</a>'},i=new c,j=function(a,b){var c=/{{([^{}]+)}}/g;return a.replace(c,function(a,c){return void 0===b[c]?"":b[c]})};return d.prototype.init=function(){var a,b=this,c=b.opts;b.createButtons(),a=j(h.box,c),b.el=e(a).appendTo(f),b.bind(),b.isInit=!0},d.prototype.createButtons=function(){var a=this,b=a.opts,c=b.buttons,d="";c.forEach(function(a,b){d+=j(h.btn,{name:a.name,index:b})}),b.btnCont=d},d.prototype.bind=function(){var a=this,b=a.opts,c=b.buttons;a.el.delegate("click",".J_DialogBtn",function(b){var d=e(this).attr("data-index"),f=c[d].event;f&&f.call(a,b)})},d.prototype.show=function(){var a=this;a.isInit||a.init(),a.el&&(a.el.show(),a.opts.mask&&i.show())},d.prototype.hide=function(){var a=this;a.el&&(a.el.hide(),a.opts.mask&&i.hide())},d},{requires:["node","./mask"]}),KISSY.add("gallery/dialog/1.0/index",function(a,b){return b},{requires:["./mini"]});