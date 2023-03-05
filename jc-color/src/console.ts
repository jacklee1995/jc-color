import { colorNames, colorsDict } from "./colors";
import { getPlatform, isString, noop, templates } from "./utils";
import { ColorTypeCode } from "./enums";

import type { ColorChannels, ColorNames, ColorTextUnit, DisplatMode, RGBColor } from "./types";
import { isHexColor, isRgbColor } from "./colorIs";
import { hexToChannels, rgbToChannels } from "./converter";

/**
 * 用于创建颜色单元
 *
 * 一个颜色单元包含了文本、前景色、背景色、前景模式、背景模式
 */
class TextUnit {
  private _text: string;
  private _foreColor: ColorChannels;
  private _bgColor: ColorChannels;
  private _foreMode: DisplatMode;
  private _bgMode: DisplatMode;
  // 用于控制默认样式
  private readonly _default = { red: -1, green: -1, blue: -1 };

  constructor(
    text: string = "",
    foreColor: ColorChannels | string = "default",
    bgColor: ColorChannels | string = "default",
    foreMode: DisplatMode = 2,
    bgMode: DisplatMode = 2
  ) {
    this._text = text;

    if (isString(foreColor)) {
      foreColor = foreColor.toLowerCase();
      if (foreColor === "default") {
        this._foreColor = this._default;
      } else if (colorNames.includes(foreColor)) {
        const _ = colorsDict[foreColor as ColorNames];
        this._foreColor = {
          red: _.red,
          green: _.green,
          blue: _.blue,
        };
      } else if (isHexColor(foreColor)) {
        this._foreColor = hexToChannels(foreColor);
      } else if (isRgbColor(foreColor)) {
        this._foreColor = rgbToChannels(foreColor);
      } else {
        this._foreColor = {
          red: 0,
          green: 0,
          blue: 0,
        };
      }
    } else {
      this._foreColor = foreColor;
    }

    if (isString(bgColor)) {
      bgColor = bgColor.toLowerCase();
      if (bgColor === "default") {
        this._bgColor = this._default;
      } else if (colorNames.includes(bgColor)) {
        const _ = colorsDict[bgColor as ColorNames];
        this._bgColor = {
          red: _.red,
          green: _.green,
          blue: _.blue,
        };
      } else if (isHexColor(bgColor)) {
        this._bgColor = hexToChannels(bgColor);
      } else if (isRgbColor(bgColor)) {
        this._bgColor = rgbToChannels(bgColor);
      } else {
        this._bgColor = {
          red: 0,
          green: 0,
          blue: 0,
        };
      }
    } else {
      this._bgColor = bgColor;
    }

    this._foreMode = foreMode;
    this._bgMode = bgMode;
  }
  get text(): string {
    return this._text;
  }
  get bgColor(): ColorChannels {
    return this._bgColor;
  }

  set bgColor(bgColor: ColorChannels | string) {
    if (isString(bgColor)) {
      bgColor = bgColor.toLowerCase();
      if (bgColor === "default") {
        this._bgColor = this._default;
      } else if (colorNames.includes(bgColor)) {
        const _ = colorsDict[bgColor as ColorNames];
        this._bgColor = {
          red: _.red,
          green: _.green,
          blue: _.blue,
        };
      } else if (isHexColor(bgColor)) {
        this._bgColor = hexToChannels(bgColor);
      } else if (isRgbColor(bgColor)) {
        this._bgColor = rgbToChannels(bgColor);
      } else {
        this._bgColor = {
          red: 0,
          green: 0,
          blue: 0,
        };
      }
    } else {
      this._bgColor = bgColor;
    }
  }

  get foreColor(): ColorChannels {
    return this._foreColor;
  }

  set foreColor(foreColor: ColorChannels | string) {
    if (isString(foreColor)) {
      foreColor = foreColor.toLowerCase();
      if (foreColor === "default") {
        this._foreColor = this._default;
      } else if (colorNames.includes(foreColor)) {
        const _ = colorsDict[foreColor as ColorNames];
        this._foreColor = {
          red: _.red,
          green: _.green,
          blue: _.blue,
        };
      } else if (isHexColor(foreColor)) {
        this._foreColor = hexToChannels(foreColor);
      } else if (isRgbColor(foreColor)) {
        this._foreColor = rgbToChannels(foreColor);
      } else {
        this._foreColor = {
          red: 0,
          green: 0,
          blue: 0,
        };
      }
    } else {
      this._foreColor = foreColor;
    }
  }

  get bgMode(): DisplatMode {
    return this._bgMode;
  }
  get foreMode(): DisplatMode {
    return this._foreMode;
  }
  get value() {
    return {
      str: this._text,
      background: this._bgColor,
      foreground: this._foreColor,
    };
  }

  get styleDescriptor() {
    let res = "";
    if (this._foreColor !== this._default) {
      res += `color:rgb(${this._foreColor.red},${this._foreColor.green},${this._foreColor.blue})`;
    }
    if (this._bgColor !== this._default) {
      res += `; background-color: rgb(${this._bgColor.red},${this._bgColor.green},${this._bgColor.blue})`;
    }
    return res
  }

  get __str__() {
    if (getPlatform() === "Node") {
      if (
        this._foreColor === this._default &&
        this._bgColor !== this._default
      ) {
        return templates(this).Node.fore;
      } else if (
        this._foreColor !== this._default &&
        this._bgColor === this._default
      ) {
        return templates(this).Node.back;
      } else if (
        this._foreColor === this._default &&
        this._bgColor === this._default
      ) {
        return templates(this).Node;
      }
      return templates(this).Node.fore_back;
    } else if (getPlatform() === "Browser") {
      return templates(this).Browser;
    }
    return templates(this).Browser;
  }

  public print():void {
    if (getPlatform() === "Node") {
      console.log(this.__str__);
    } else {
      console.log(this.__str__, this.styleDescriptor);
    }
  }
}




class ColorText extends Array<TextUnit> {
  constructor(...units: ColorTextUnit[]) {
    super();
    this.push(...units)
    
  }

  public push(
    ...units: ColorTextUnit[]
  ): number {
    
    if(units.length === 0){
      noop();
    }
    else if(units[0] instanceof TextUnit){
      units.forEach((unit: ColorTextUnit) => {
        if(unit instanceof TextUnit){
          super.push(unit)
        }else{
          super.push(
            new TextUnit(unit.text, unit.foreColor, unit.bgColor)
          )
        }
        
      });
    }else{
      units.forEach((unit) =>
      super.push(new TextUnit(unit.text, unit.bgColor, unit.foreColor))
    );
    }
    return this.length;
  }
  public add(...units: ColorTextUnit[]){
    this.push(...units)
  }

  get __str__():string {
    let res = "";
    this.forEach((unit) => (res += unit.__str__));
    return res;
  }

  print() {
    if (getPlatform() === "Node"){
      console.log(this.__str__);
    }else{
      const str = this.map((item: TextUnit)=>{
        return item.__str__
      }).join('');
      const style = this.map((item: TextUnit)=>{
        return item.styleDescriptor
      });
      console.log(str, ...style);
      
    }
  }
}

export { TextUnit, ColorText };
