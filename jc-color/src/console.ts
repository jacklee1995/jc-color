import { colorNames, colorsDict } from "./colors";
import { getPlatform, isNumber, isString, noop, templates } from "./utils";
import { ColorTypeCode } from "./enums";
import { creatGeadient } from "./gradient";
import type { RgbColorChannels, ColorNames, ColorTextUnit, DisplatMode, RGBColor } from "./types";
import { isHexColor, isRgbColor } from "./colorIs";
import { hexToChannels, rgbToChannels } from "./converter";
import { json } from "stream/consumers";

/**
 * 用于创建颜色单元
 */
class TextUnit {
  private _text: string;
  private _foreColor: RgbColorChannels;
  private _bgColor: RgbColorChannels;
  private _modes: Record<DisplatMode, boolean>;
  private _endstyle: boolean; // 样式结束标志
  // 仅仅用于浏览器的标志
  // private _browserModes:{
  //  size:number,
  // };


















  // 用于控制默认样式
  private readonly _default = { red: -1, green: -1, blue: -1 };

  constructor(
    text: string | number = "",
    foreColor: RgbColorChannels | string = "default",
    bgColor: RgbColorChannels | string = "default",
    modes: Record<DisplatMode, boolean> = {
      reverse: false,
      bold: false,
      clear: false,
      dark: false,
      delete: false,
      glimmer: false,
      hidden: false,
      italic: false,
      overline: false,
      underline: false,
      underline_double: false,
    },
    endstyle: boolean = true,
  ) {
    this._text = text.toString();
    this._endstyle = endstyle;
    this._modes = modes;
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
      // console.log("this._foreColor =",this._foreColor);
      
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
  }

  get text(): string {
    return this._text;
  }

  /**结束符 */
  get endstyle() {
    return this._endstyle;
  }

  remove_color(text: string = this._text,) {
    this.foreColor = "default";
    this.bgColor = "default";
    this._text = text;
    return this
  }

  remove_bgColor(
    text: string = this._text,
    foreColor: RgbColorChannels | string = this._foreColor
  ) {
    this.bgColor = "default";
    this._text = text;
    this.foreColor = foreColor;
    return this
  }

  remove_foreColor(
    text: string = this._text,
    bgColor: RgbColorChannels | string = this._bgColor
  ) {
    this.foreColor = "default";
    this._text = text;
    this.bgColor = bgColor;
    return this
  }

  remove_italic(
    text: string = this._text,
    foreColor: RgbColorChannels | string = this._foreColor,
    bgColor: RgbColorChannels | string = this._bgColor
  ) {
    this._modes.italic = false;
    this._text = text;
    this.foreColor = foreColor;
    this.bgColor = bgColor;
    return this
  }

  // remove_font_sytles(){
  //   this._modes.remove_all = true;
  //   return this
  // }

  remove_bold(
    text: string = this._text,
    foreColor: RgbColorChannels | string = this._foreColor,
    bgColor: RgbColorChannels | string = this._bgColor
  ) {
    // this._modes.remove_bold = true;
    this._modes.bold = false;
    this._text = text;
    this.foreColor = foreColor;
    this.bgColor = bgColor;
    return this
  }

  /**移除闪烁 */
  remove_glimmer(
    text: string = this._text,
    foreColor: RgbColorChannels | string = this._foreColor,
    bgColor: RgbColorChannels | string = this._bgColor
  ) {
    // this._modes.remove_glimmer = true;
    this._modes.glimmer = false;
    this._text = text;
    this.foreColor = foreColor;
    this.bgColor = bgColor;
    return this
  }

  /**重置背景色 */
  reBgColor(bgColor: RgbColorChannels | string = this._bgColor) {
    this.bgColor = bgColor;
    return this
  }

  /**重置前景色 */
  reForeColor(foreColor: RgbColorChannels | string = this._foreColor,) {
    this.foreColor = foreColor;
    return this
  }

  /**移除隐藏 */
  remove_hidden(
    text: string = this._text,
    foreColor: RgbColorChannels | string = this._foreColor,
    bgColor: RgbColorChannels | string = this._bgColor
  ) {
    this._modes.hidden = false;
    this._text = text;
    this.foreColor = foreColor;
    this.bgColor = bgColor;
    return this
  }

  /**移除上划线 */
  remove_overline(
    text: string = this._text,
    foreColor: RgbColorChannels | string = this._foreColor,
    bgColor: RgbColorChannels | string = this._bgColor
  ) {
    // this._modes.remove_overline = true;
    this._modes.overline = false;
    this._text = text;
    this.foreColor = foreColor;
    this.bgColor = bgColor;
    return this
  }
  /**移除反转 */
  remove_reverse(
    text: string = this._text,
    foreColor: RgbColorChannels | string = this._foreColor,
    bgColor: RgbColorChannels | string = this._bgColor
  ) {
    this._modes.reverse = false;
    this._text = text;
    this.foreColor = foreColor;
    this.bgColor = bgColor;
    return this
  }

  /**移除下划线 */
  remove_underline(
    text: string = this._text,
    foreColor: RgbColorChannels | string = this._foreColor,
    bgColor: RgbColorChannels | string = this._bgColor
  ) {
    this._modes.underline = false;
    this._text = text;
    this.foreColor = foreColor;
    this.bgColor = bgColor;
    return this
  }

  /**移除双下划线 */
  remove_underline_double(
    text: string = this._text,
    foreColor: RgbColorChannels | string = this._foreColor,
    bgColor: RgbColorChannels | string = this._bgColor
  ) {
    this._modes.underline_double = false;
    this._text = text;
    this.foreColor = foreColor;
    this.bgColor = bgColor;
    return this
  }

  /**移除删除线 */
  remove_delete(
    text: string = this._text,
    foreColor: RgbColorChannels | string = this._foreColor,
    bgColor: RgbColorChannels | string = this._bgColor
  ) {
    this._modes.delete = false;
    this._text = text;
    this.foreColor = foreColor;
    this.bgColor = bgColor;
    return this
  }

  /**粗体 */
  bold(
    text: string = this._text,
    foreColor: RgbColorChannels | string = this._foreColor,
    bgColor: RgbColorChannels | string = this._bgColor
  ) {
    this._modes.bold = true;
    this.foreColor = foreColor;
    this.bgColor = bgColor;
    this._text = text;
    return this;
  }

  /**闪烁 */
  glimmer(
    text: string = this._text,
    foreColor: RgbColorChannels | string = this._foreColor,
    bgColor: RgbColorChannels | string = this._bgColor
  ) {
    this._modes.glimmer = true;
    this.foreColor = foreColor;
    this.bgColor = bgColor;
    this._text = text;
    return this;
  }

  // private _newTextUnit(...args: any[]){
  //   return new TextUnit(...args);
  // }

  /**暗体 */
  dark(
    text: string = this._text,
    foreColor: RgbColorChannels | string = this._foreColor,
    bgColor: RgbColorChannels | string = this._bgColor
  ) {
    this._modes.dark = true;
    this.foreColor = foreColor;
    this.bgColor = bgColor;
    this._text = text;
    return this;
  }
  /**删除线 */
  delete(
    text: string = this._text,
    foreColor: RgbColorChannels | string = this._foreColor,
    bgColor: RgbColorChannels | string = this._bgColor
  ) {
    this._modes.delete = true;
    this.foreColor = foreColor;
    this.bgColor = bgColor;
    this._text = text;
    return this;
  }
  /**隐藏 */
  hidden(
    text: string = this._text,
    foreColor: RgbColorChannels | string = this._foreColor,
    bgColor: RgbColorChannels | string = this._bgColor
  ) {
    this._modes.hidden = true;
    this.foreColor = foreColor;
    this.bgColor = bgColor;
    this._text = text;
    return this;
  }
  /**斜体 */
  italic(
    text: string = this._text,
    foreColor: RgbColorChannels | string = this._foreColor,
    bgColor: RgbColorChannels | string = this._bgColor
  ) {
    this._modes.italic = true;
    this.foreColor = foreColor;
    this.bgColor = bgColor;
    this._text = text;
    return this;
  }
  /**上划线 */
  overline(
    text: string = this._text,
    foreColor: RgbColorChannels | string = this._foreColor,
    bgColor: RgbColorChannels | string = this._bgColor
  ) {
    this._modes.overline = true;
    this.foreColor = foreColor;
    this.bgColor = bgColor;
    this._text = text;
    return this;
  }
  /**下划线 */
  underline(
    text: string = this._text,
    foreColor: RgbColorChannels | string = this._foreColor,
    bgColor: RgbColorChannels | string = this._bgColor
  ) {
    this._modes.underline = true;
    this.foreColor = foreColor;
    this.bgColor = bgColor;
    this._text = text;
    return this;
  }
  /**双下划线 */
  underline_double(
    text: string = this._text,
    foreColor: RgbColorChannels | string = this._foreColor,
    bgColor: RgbColorChannels | string = this._bgColor
  ) {
    this._modes.underline_double = true;
    this.foreColor = foreColor;
    this.bgColor = bgColor;
    this._text = text;
    return this;
  }

  /**获取背景色 */
  get bgColor(): RgbColorChannels {
    return this._bgColor;
  }

  /**设置背景色 */
  set bgColor(bgColor: RgbColorChannels | string) {
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

  /**获取前景色 */
  get foreColor(): RgbColorChannels {
    return this._foreColor;
  }

  /**设置前景色 */
  set foreColor(foreColor: RgbColorChannels | string) {
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

  get value() {
    return {
      str: this._text,
      background: this._bgColor,
      foreground: this._foreColor,
    };
  }

  get styleDescriptor() {
    let decoration = "text-decoration:";
    if (this._modes.underline || this._modes.underline_double) {
      decoration += ' underline'
    }

    if (this._modes.overline) {
      decoration += ' overline';                          // 浏览器终端未实现
    }
    if (this._modes.glimmer) {
      decoration += ' blink';                             // 浏览器未实现
    }
    if (this._modes.delete) {
      decoration += ' line-through'
    }
    if (decoration === "text-decoration:") {
      decoration += 'inherit;'
    } else {
      decoration += ';'
    }

    let res = "";
    res += decoration;

    // 前景色
    if (this._foreColor !== this._default) {
      // 正常前景色
      if (!this._modes.reverse) {
        res += `color:rgb(${this._foreColor.red},${this._foreColor.green},${this._foreColor.blue});`;
      }
      // 前景色的反色
      else {
        res += `color:rgb(${this._bgColor.red},${this._bgColor.green},${this._bgColor.blue});`;
      }

    }
    // 背景色
    if (this._bgColor !== this._default) {
      // 正常背景色
      if (!this._modes.reverse) {
        res += `background-color:rgb(${this._bgColor.red},${this._bgColor.green},${this._bgColor.blue});`;
      }
      // 背景色反色
      else {
        res += `background-color:rgb(${this._foreColor.red},${this._foreColor.green},${this._foreColor.blue});`;
      }
    }
    // 文字加粗
    if (this._modes.bold) {
      res += 'font-weight:bold;'
    }

    // 解决浏览器未实现
    // 上划线
    if (this._modes.overline) {
      res += `border-top:1px solid rgb(${this._foreColor.red},${this._foreColor.green},${this._foreColor.blue});`
    }
    // 双下划线
    if (this._modes.underline_double) {
      res += `border-bottom:1px solid rgb(${this._foreColor.red},${this._foreColor.green},${this._foreColor.blue});`
    }


    // console.log('res = "', res + "\"");
    return res
  }

  get modes(): Record<DisplatMode, boolean> {
    return this._modes
  }

  get node__str__() {
    return templates(this).Node.default
  }

  get broswer__str__() {
    return templates(this).Browser;
  }

  public print(str: string = this._text) {
    this._text = str;
    if (getPlatform() === "Node") {
      console.log(this.node__str__);
    } else {
      console.log(this.broswer__str__, this.styleDescriptor);
    }
    return this
  }
}




class ColorText extends Array<TextUnit> {
  constructor(...units: ColorTextUnit[]) {
    super();
    this.push(...units)

  }

  private _pushUnit(
    ...units: ColorTextUnit[]
  ): number {

    if (units.length === 0) {
      noop();
    }
    else if (units[0] instanceof TextUnit) {
      units.forEach((unit: ColorTextUnit) => {
        if (unit instanceof TextUnit) {
          super.push(unit)
        } else {
          super.push(
            new TextUnit(unit.text, unit.foreColor, unit.bgColor)
          )
        }

      });
    } else {
      units.forEach((unit) =>
        super.push(new TextUnit(unit.text, unit.bgColor, unit.foreColor))
      );
    }
    return this.length;
  }

  public push(...args: any[]) {
    for (let index = 0; index < args.length; index++) {
      const elem = args[index];
      if (elem instanceof TextUnit) {
        this._pushUnit(elem)
      }
      else if (elem instanceof ColorText) {
        elem.forEach(elem => this._pushUnit(elem))
      }
      else if (isString(elem) || isNumber(elem)) {
        this._pushUnit(new TextUnit(elem))
      }
      else {
        this._pushUnit(new TextUnit(elem.toString()))
      }
    }
    return this.length;
  }


  public add(...units: ColorTextUnit[]) {
    this.push(...units)
  }

  private node__str__(): string {
    let res = "";
    this.forEach((unit) => (res += unit.node__str__));
    return res;
  }

  private browser__str__(): string {
    return this.map((item: TextUnit) => {
      return item.broswer__str__
    }).join('');
  }

  print() {
    if (getPlatform() === "Node") {
      console.log(this.node__str__());
    } else {
      const str = this.map((item: TextUnit) => {
        return item.broswer__str__
      }).join('');
      const style = this.map((item: TextUnit) => {
        return item.styleDescriptor
      });
      console.log(str, ...style);
    }
    return this
  }
}

/**
 * 指定字符串和起止颜色，创建颜色梯度字符串
 * @param str 
 * @param foreColors 
 * @param bgColors 
 * @returns 颜色梯度字符串
 */
function geadientText(
  str: string,
  foreColors: (string | RgbColorChannels)[],
  bgColors: (string | RgbColorChannels)[] = [],
) {
  const len = str.length;
  let ct = new ColorText();
  // 定义了背景色梯度
  if (bgColors.length !== 0) {
    const foreChannels = creatGeadient(foreColors, len);
    const bgChannels = creatGeadient(bgColors, len);
    for (let index = 0; index < len - 1; index++) {
      const char = str[index];
      const foreColor = foreChannels[index];
      const bgColor = bgChannels[index];
      ct.push(
        new TextUnit(char, foreColor, bgColor)
      )
    }
  }
  // 未定义背景色梯度 
  else {
    const foreChannels = creatGeadient(foreColors, len);
    // console.log(foreChannels);
    
    for (let index = 0; index < len - 1; index++) {
      const char = str[index];
      const foreColor = foreChannels[index];
      // console.log("char, foreColor ===",char, foreColor);
      const u = new TextUnit(char, foreColor)
      // u.print()
      // console.log("\nforeColor =",foreColor);
      // console.log(`char: ${char}, fcolor:${JSON.stringify(u.foreColor)}, rgb(${foreColor.red},${foreColor.green},${foreColor.blue})`);
      // console.log(`char: ${char}, fcolor:${JSON.stringify(u.foreColor)}, bColor:${JSON.stringify(u.bgColor)}`);
      
      ct.push(u)
    }
  }

  return ct
}

export { TextUnit, ColorText, geadientText };