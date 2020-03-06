

class LoadingUI extends egret.Sprite implements RES.PromiseTaskReporter {

    public constructor() {
        super();
        this.createView();
    }

    private textField: egret.TextField;

    private createView(): void {
        this.textField = new egret.TextField();
        this.addChild(this.textField);
        this.textField.y = 300;
        this.textField.width = 480
        this.textField.height = 100
        this.textField.x = (GameUtil.getStageWidth() - this.textField.width) / 2
        this.textField.y = (GameUtil.getStageHeight() - this.textField.height) / 2
        this.textField.textAlign = "center";
        this.textField.text = `Loading...0%`
    }

    public onProgress(current: number, total: number): void {
        let per = current * 100 / total
        this.textField.text = `Loading...${per.toFixed(0)}%`
    }
}
