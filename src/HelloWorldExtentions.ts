class HelloWorldExtentions extends egret.DisplayObjectContainer{
    public constructor(){
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStatge,this);
    }
    private onAddToStatge(event:egret.Event){
        // 打开性能面板
        // egret.Profiler.getInstance().run();
        console.log("Hello Egretasasa");
        var spr:egret.Sprite = new egret.Sprite();
        spr.graphics.beginFill(0xff0000);
        spr.graphics.drawRect(0,0,100,100);
        spr.graphics.endFill();
        this.addChild(spr);
    }
}