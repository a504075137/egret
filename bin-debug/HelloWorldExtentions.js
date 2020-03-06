var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var HelloWorldExtentions = (function (_super) {
    __extends(HelloWorldExtentions, _super);
    function HelloWorldExtentions() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStatge, _this);
        return _this;
    }
    HelloWorldExtentions.prototype.onAddToStatge = function (event) {
        // 打开性能面板
        // egret.Profiler.getInstance().run();
        console.log("Hello Egretasasa");
        var spr = new egret.Sprite();
        spr.graphics.beginFill(0xff0000);
        spr.graphics.drawRect(0, 0, 100, 100);
        spr.graphics.endFill();
        this.addChild(spr);
    };
    return HelloWorldExtentions;
}(egret.DisplayObjectContainer));
__reflect(HelloWorldExtentions.prototype, "HelloWorldExtentions");
//# sourceMappingURL=HelloWorldExtentions.js.map