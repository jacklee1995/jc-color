import { colorsDict } from "./colors"
import { getPlatform,templates } from "./utils"
import { ColorTypeCode } from './enums'

import type { ColorChannels, DisplatMode, RGBColor } from "./types";


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

  constructor(
    text: string = "",
    foreColor: ColorChannels = colorsDict.white,
    bgColor: ColorChannels = colorsDict.black,
    foreMode: DisplatMode = 2,
    bgMode: DisplatMode = 2
  ) {
    this._text = text;
    this._foreColor = foreColor;
    this._bgColor = bgColor;
    this._foreMode = foreMode;
    this._bgMode = bgMode;
  }
  get text(): string {
    return this._text;
  }
  get bgColor(): ColorChannels {
    return this._bgColor;
  }
  get foreColor(): ColorChannels {
    return this._foreColor;
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

  get css(){
    return `color:rgb(${this._foreColor.red},${this._foreColor.green},${this._foreColor.blue}); background-color: rgb(${this._bgColor.red},${this._bgColor.green},${this._bgColor.blue})`
  }

  get __str__() {
    if(getPlatform()==="Node"){
      return templates(this).Node
    }
    else if(getPlatform()==="Browser"){
      return templates(this).Browser
    }
    // return `\x1B[1;${ColorTypeCode.bgClolr};${this._bgMode};${this._bgColor.red};${this._bgColor.green};${this._bgColor.blue};1;${ColorTypeCode.frColor};${this._foreMode};${this._foreColor.red};${this._foreColor.green};${this._foreColor.blue}m${this._text}\x1B[0m`;
  }

  public print() {
    if(getPlatform()==="Node"){
      console.log(this.__str__);
    }else{
      console.log(this.__str__, this.css)
    }
    
  }
}

class ColorText extends Array<TextUnit> {
  constructor(unit: TextUnit) {
    super();
  }

  push(
    ...units: { text: string; bgColor: ColorChannels; foreColor: ColorChannels }[]
  ): number {
    units.forEach((unit) =>
      this.push(new TextUnit(unit.text, unit.bgColor, unit.foreColor))
    );
    return this.length;
  }

  add(unit: TextUnit) {}

  get __str__() {
    let res = "";
    this.forEach((unit) => (res += unit.__str__));
    return res;
  }
}


export { TextUnit, ColorText };
