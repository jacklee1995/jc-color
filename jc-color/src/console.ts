import type { Color, DisplatMode } from "./types";
import { colorsDict } from "./colors";
import { RGBColor, ColorTypeCode } from "./types";

/**
 * 用于创建颜色单元
 * 
 * 一个颜色单元包含了文本、前景色、背景色、前景模式、背景模式
 */
class ColorUnit {
  private _text: string;
  private _foreColor: Color;
  private _bgColor: Color;
  private _foreMode: DisplatMode;
  private _bgMode: DisplatMode;

  constructor(
    text: string = "",
    foreColor: Color = colorsDict.white,
    bgColor: Color = colorsDict.black,
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
  get bgColor(): Color {
    return this._bgColor;
  }
  get foreColor(): Color {
    return this._foreColor;
  }
  get value() {
    return {
      str: this._text,
      background: this._bgColor,
      foreground: this._foreColor,
    };
  }
  get __str__() {
    return `\x1B[1;${ColorTypeCode.bgClolr};${this._bgMode};${this._bgColor.red};${this._bgColor.green};${this._bgColor.blue};1;${ColorTypeCode.frColor};${this._foreMode};${this._foreColor.red};${this._foreColor.green};${this._foreColor.blue}m${this._text}\x1B[0m`;
  }

  public print() {
    console.log(this.__str__);
  }
}

class ColorText extends Array<ColorUnit> {
  constructor(unit: ColorUnit) {
    super();
  }

  push(
    ...units: { text: string; bgColor: Color; foreColor: Color }[]
  ): number {
    units.forEach((unit) =>
      this.push(new ColorUnit(unit.text, unit.bgColor, unit.foreColor))
    );
    return this.length;
  }

  add(unit: ColorUnit) {}

  get __str__() {
    let res = "";
    this.forEach((unit) => (res += unit.__str__));
    return res;
  }
}


export { ColorUnit, ColorText };
