import SliderInput from "./SliderInput";
import { Snippet, Switch } from "@nextui-org/react";

export default function EditorControls({ crosshair, handleInputChange }) {
    const handleOnCopy = () => {
        const text = crosshair.getConfig();
        navigator.clipboard.writeText(text);
    };

    const handleCopyClick = () => {
        const button = document.querySelector(".copy-btn button");
        button.click();
    };

    return (
        <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            <div>
                <div className="text-2xl mb-4">颜色</div>
                <div className="mb-4">
                    <SliderInput
                        value={crosshair.colorR}
                        name="colorR"
                        label="红色"
                        max={255}
                        onSliderChange={handleInputChange}
                    />
                </div>
                <div className="mb-4">
                    <SliderInput
                        value={crosshair.colorG}
                        name="colorG"
                        label="绿色"
                        max={255}
                        onSliderChange={handleInputChange}
                        G
                    />
                </div>
                <div className="mb-4">
                    <SliderInput
                        value={crosshair.colorB}
                        name="colorB"
                        label="蓝色"
                        max={255}
                        onSliderChange={handleInputChange}
                    />
                </div>
                <div>
                    <SliderInput
                        value={crosshair.linesOpacity}
                        name="linesOpacity"
                        label="瞄准线透明度"
                        step={0.1}
                        min={0}
                        max={1}
                        onSliderChange={handleInputChange}
                    />
                </div>
            </div>
            <div>
                <div className="text-2xl mb-4">瞄准线</div>
                <div className="mb-4">
                    <SliderInput
                        value={crosshair.linesWidth}
                        name="linesWidth"
                        label="瞄准线宽度"
                        max={500}
                        onSliderChange={handleInputChange}
                    />
                </div>
                <div className="mb-4">
                    <SliderInput
                        value={crosshair.linesHeight}
                        name="linesHeight"
                        label="瞄准线高度"
                        max={500}
                        onSliderChange={handleInputChange}
                    />
                </div>
                <div className="mb-8">
                    <SliderInput
                        value={crosshair.linesGap}
                        name="linesGap"
                        label="瞄准线间隙"
                        min={-3}
                        max={20}
                        onSliderChange={handleInputChange}
                    />
                </div>
                <Switch
                    color="default"
                    defaultSelected={crosshair.linesBorder}
                    onValueChange={(value) => handleInputChange(value, "linesBorder")}
                >
                    描边
                </Switch>
            </div>
            <div>
                <div className="text-2xl mb-4">中央点</div>
                <div className="mb-4">
                    <SliderInput
                        value={crosshair.dotOpacity}
                        name="dotOpacity"
                        label="中央点透明度"
                        step={0.1}
                        min={0}
                        max={1}
                        onSliderChange={handleInputChange}
                    />
                </div>
                <div>
                    <SliderInput
                        value={crosshair.dotBorderOpacity}
                        name="dotBorderOpacity"
                        label="中央点描边透明度"
                        step={0.1}
                        min={0}
                        max={1}
                        onSliderChange={handleInputChange}
                    />
                </div>
            </div>
            <div>

                <div className="mb-2">
                    <Snippet
                        hideSymbol
                        variant="bordered"
                        fullWidth
                        disableTooltip={true}
                        onCopy={handleOnCopy}
                        onClick={handleCopyClick}
                        className="copy-btn cursor-pointer transition-all hover:border-white"
                    >复制配置参数
                    </Snippet>
                </div>
                <div className="bg-[#2f210a] p-2 rounded-lg">
                    <p className="font-sans text-[#f5a524] text-xs">
                        在游戏中开启控制台，即可粘贴配置参数 (默认按键 F7)
                    </p>
                </div>
            </div>
        </div>
    );
}
