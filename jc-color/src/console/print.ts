import { colorNames, colorsDict } from "./colors";
import { isNumber, isNumberStr, isObject, isString, noop } from "../utils";
import { creatGeadient } from "../core";
import { isHexColor, isRgbChannels, isRgbColor } from "../types";
import { hexToChannels, rgbToChannels } from "../converters";
import { colorToChannel } from '../converters'
import { getPlatform, templates } from "./platform";
import { str } from "../utils";
import { themes } from "./themes";

import type { RgbColorChannels, ColorNames, ColorTextUnit, DisplatMode } from "../types";


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
  private _fontSize:number = -1;


  // 用于控制默认样式
  private readonly _default = { red: -1, green: -1, blue: -1 };

  constructor(
    text: string | number = "",
    foreColor: RgbColorChannels | string = "default",
    bgColor: RgbColorChannels | string = "default",
    modes: Record<DisplatMode, boolean> = {
      reverse: false,     // 前景色和背景色反转（互换）
      inverseFore: false, // 前景色求反色，若反转，则在反转的基础上求反色
      inverseBg: false,   // 背景色求反色，若反转，则在反转的基础上求反色
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

  /**移除颜色反转 */
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

  /**移除前景色反色 */
  remove_inverseFore(
    text: string = this._text,
    foreColor: RgbColorChannels | string = this._foreColor,
    bgColor: RgbColorChannels | string = this._bgColor
  ) {
    this._modes.inverseFore = false;
    this._text = text;
    this.foreColor = foreColor;
    this.bgColor = bgColor;
    return this
  }

  /**移除背景色反色 */
  remove_inverseBg(
    text: string = this._text,
    foreColor: RgbColorChannels | string = this._foreColor,
    bgColor: RgbColorChannels | string = this._bgColor
  ) {
    this._modes.inverseBg = false;
    this._text = text;
    this.foreColor = foreColor;
    this.bgColor = bgColor;
    return this
  }

  /**移除反色 */
  remove_inverse(
    text: string = this._text,
    foreColor: RgbColorChannels | string = this._foreColor,
    bgColor: RgbColorChannels | string = this._bgColor
  ) {
    this._modes.inverseFore = false;
    this._modes.inverseBg = false;
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

  /**反转颜色：交换背景色和前景色 */
  reverse(
    text: string = this._text,
    foreColor: RgbColorChannels | string = this._foreColor,
    bgColor: RgbColorChannels | string = this._bgColor
  ) {
    this._modes.reverse = true;
    this.foreColor = foreColor;
    this.bgColor = bgColor;
    this._text = text;
    return this;
  }

  /**前景色反色 */
  inverseFore(
    text: string = this._text,
    foreColor: RgbColorChannels | string = this._foreColor,
    bgColor: RgbColorChannels | string = this._bgColor
  ) {
    this._modes.inverseFore = true;
    this.foreColor = foreColor;
    this.bgColor = bgColor;
    this._text = text;
    return this;
  }

  /**背景色反色 */
  inverseBg(
    text: string = this._text,
    foreColor: RgbColorChannels | string = this._foreColor,
    bgColor: RgbColorChannels | string = this._bgColor
  ) {
    this._modes.inverseBg = true;
    this.foreColor = foreColor;
    this.bgColor = bgColor;
    this._text = text;
    return this;
  }

  /**反色：前景色和背景色同时反色 */
  inverse(
    text: string = this._text,
    foreColor: RgbColorChannels | string = this._foreColor,
    bgColor: RgbColorChannels | string = this._bgColor
  ) {
    this._modes.inverseFore = true;
    this._modes.inverseBg = true;
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

  /**
   * 获取字体大小：当前仅浏览器控制台支持
   */
  get size(){
    return this._fontSize
  }

  /**
   * 设置字体大小：当前仅浏览器控制台支持
   */
  set size(val: number){
    this._fontSize = val;
  }

  get value() {
    return {
      str: this._text,
      background: this._bgColor,
      foreground: this._foreColor,
      size: this._fontSize,
      bold: this._modes.bold,
      italic:this._modes.italic,
      delete: this._modes.delete,
      underline: this._modes.underline,
      underline_double: this._modes.underline_double,
      glimmer:this._modes.glimmer,
      hidden:this._modes.hidden,
      dark:this._modes.dark,
      reverse:this._modes.reverse,
      inverseFore:this._modes.inverseFore,
      inverseBg:this._modes.inverseBg
    };
  }

  private styleDescriptor(self:TextUnit=this):string {
    let decoration = "text-decoration:";
    if (self._modes.underline || self._modes.underline_double) {
      decoration += ' underline'
    }

    if (self._modes.overline) {
      decoration += ' overline';                          // 浏览器终端未实现
    }
    if (self._modes.glimmer) {
      decoration += ' blink';                             // 浏览器未实现
    }
    if (self._modes.delete) {
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
    if (self._foreColor !== self._default) {
      // 不反转
      if (!self._modes.reverse) {
        // 使用反色
        if (self._modes.inverseFore) {
          res += `color:rgb(${255 - self._foreColor.red},${255 - self._foreColor.green},${255 - self._foreColor.blue});`;
        }
        else {
          res += `color:rgb(${self._foreColor.red},${self._foreColor.green},${self._foreColor.blue});`;
        }
      }
      // 反转前景色成背景色
      else {
        // 使用反色
        if (self._modes.inverseFore) {
          res += `color:rgb(${255 - self._bgColor.red},${255 - self._bgColor.green},${255 - self._bgColor.blue});`;
        }
        else {
          res += `color:rgb(${self._bgColor.red},${self._bgColor.green},${self._bgColor.blue});`;
        }
      }

    }
    // 背景色
    if (self._bgColor !== self._default) {
      // 不反转
      if (!self._modes.reverse) {
        // 使用反色
        if (self._modes.inverseBg) {
          res += `background-color:rgb(${255 - self._bgColor.red},${255 - self._bgColor.green},${255 - self._bgColor.blue});`;
        } else {
          res += `background-color:rgb(${self._bgColor.red},${self._bgColor.green},${self._bgColor.blue});`;
        }
      }
      // 反转背景色成前景色
      else {
        // 使用反色
        if (self._modes.inverseBg) {
          res += `background-color:rgb(${255 - self._foreColor.red},${255 - self._foreColor.green},${255 - self._foreColor.blue});`;
        } else {
          res += `background-color:rgb(${self._foreColor.red},${self._foreColor.green},${self._foreColor.blue});`;
        }
      }
    }
    // 文字加粗
    if (self._modes.bold) {
      res += 'font-weight:bold;'
    }

    // 斜体
    if (self._modes.italic) {
      res += 'font-style:italic;';
    }

    // 解决浏览器未实现
    // 上划线
    if (self._modes.overline) {
      res += `border-top:1px solid rgb(${self._foreColor.red},${self._foreColor.green},${self._foreColor.blue});`
    }
    // 双下划线
    if (self._modes.underline_double) {
      res += `border-bottom:1px solid rgb(${self._foreColor.red},${self._foreColor.green},${self._foreColor.blue});`
    }

    // 仅用于浏览器的功能
    if(self._fontSize>0){
      res += `font-size:${parseInt(self._fontSize.toString(),10)}px`
    }
    return res
  }

  get modes(): Record<DisplatMode, boolean> {
    return this._modes
  }

  private __str__(self:TextUnit =this):string {
    if (getPlatform() === "Node") {
      return templates(self).Node.default
    }else{
      return templates(self).Browser;
    }
    
  }

  public print(_str: string = this._text) {
    this._text = _str;
    if (getPlatform() === "Node") {
      console.log(str(this));
    } else {
      console.log(str(this), this.styleDescriptor());
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

  /**获取背景色 */
  get bgColor(): RgbColorChannels[] {
    return this.map((unit: TextUnit) => {
      return unit.bgColor
    });
  }

  /**设置背景色 */
  set bgColor(bgColor: (RgbColorChannels | string)[] | RgbColorChannels | string) {
    // 单色
    if (isString(bgColor) || isRgbChannels(bgColor)) {
      this.forEach((unit: TextUnit) => {
        unit.bgColor = bgColor;
      })
    }
    // 多色
    else {
      if (this.length <= bgColor.length) {
        for (let i = 0; i < this.length; i++) {
          this[i].bgColor = bgColor[i]
        }
      }
      // 若颜色不够则仅设置前面的字符
      else {
        for (let i = 0; i < bgColor.length; i++) {
          this[i].bgColor = bgColor[i];
        }
      }
    }
  }

  /**获取前景色 */
  get foreColor(): RgbColorChannels[] {
    return this.map((unit: TextUnit) => {
      return unit.foreColor
    });
  }

  /**设置前景色 */
  set foreColor(foreColor: (RgbColorChannels | string)[] | RgbColorChannels | string) {
    // 单色
    if (isString(foreColor) || isRgbChannels(foreColor)) {
      this.forEach((unit: TextUnit) => {
        unit.foreColor = foreColor;
      })
    }
    // 多色
    else {
      if (this.length <= foreColor.length) {
        for (let i = 0; i < this.length; i++) {
          this[i].foreColor = foreColor[i]
        }
      }
      // 若颜色不够则仅设置前面的字符
      else {
        for (let i = 0; i < foreColor.length; i++) {
          this[i].foreColor = foreColor[i];
        }
      }
    }
  }
  
  public add(...units: ColorTextUnit[]) {
    this.push(...units)
  }

  private node__str__(): string {
    let res = "";
    this.forEach((unit) => (res += str(unit)));
    return res;
  }

  print() {
    if (getPlatform() === "Node") {
      console.log(this.node__str__());
    } 
    else {
      const _str = this.map((item: TextUnit) => {
        return str(item)
      }).join('');
      const style = this.map((item: TextUnit) => {
        const func = Reflect.get(item,'styleDescriptor');
        return func.apply(item)
      });
      console.log(_str, ...style);
    }
    return this
  }

  bold() {
    this.forEach((unit:TextUnit)=>{
      unit.bold();
    })
    return this
  }

  remove_bold() {
    this.forEach((unit:TextUnit)=>{
      unit.remove_bold();
    })
    return this
  }

  italic(){
    this.forEach((unit:TextUnit)=>{
      unit.italic();
    })
    return this
  }

  remove_italic(){
    this.forEach((unit:TextUnit)=>{
      unit.remove_italic();
    })
    return this
  }

  delete(){
    this.forEach((unit:TextUnit)=>{
      unit.delete();
    })
    return this
  }

  remove_delete(){
    this.forEach((unit:TextUnit)=>{
      unit.delete();
    })
    return this
  }

  underline(){
    this.forEach((unit:TextUnit)=>{
      unit.underline();
    })
    return this
  }

  remove_underline(){
    this.forEach((unit:TextUnit)=>{
      unit.remove_underline();
    })
    return this
  }

  underline_double(){
    this.forEach((unit:TextUnit)=>{
      unit.underline_double();
    })
    return this
  }

  remove_underline_double(){
    this.forEach((unit:TextUnit)=>{
      unit.remove_underline_double();
    })
    return this
  }

  glimmer() {
    this.forEach((unit:TextUnit)=>{
      unit.glimmer();
    })
    return this
  }

  remove_glimmer(){
    this.forEach((unit:TextUnit)=>{
      unit.remove_glimmer();
    })
    return this
  }

  reverse(){
    this.forEach((unit:TextUnit)=>{
      unit.reverse();
    })
    return this
  }

  remove_reverse(){
    this.forEach((unit:TextUnit)=>{
      unit.remove_reverse();
    })
    return this
  }

  inverse(){
    this.forEach((unit:TextUnit)=>{
      unit.inverse();
    })
    return this
  }

  remove_inverse(){
    this.forEach((unit:TextUnit)=>{
      unit.remove_inverse();
    })
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
  foreColors: (string | RgbColorChannels)[] = ["#EB6461", "#84FC2C", "green"],
  bgColors: (string | RgbColorChannels)[] = [],
) {
  const len = str.length;
  let ct = new ColorText();

  // 先处理文字
  for (let index = 0; index < len; index++) {
    const char = str[index];
    const u = new TextUnit(char);
    ct.push(u)
  }

  // 然后设置 前景色
  // 字符串表示单色
  if (isString(foreColors)) {
    ct.foreColor = colorToChannel(foreColors)
  }
  // 单色数组也是单色
  else if (foreColors.length === 1) {
    ct.foreColor = foreColors[0]
  }
  // 无颜色
  else if (foreColors.length === 0) {
    noop();
  }
  // 梯度颜色
  else {
    const foreChannels = creatGeadient(foreColors, len);
    for (let index = 0; index < len; index++) {
      ct[index].foreColor = foreChannels[index];
    }
  }

  // 再设置背景色
  if (isString(bgColors)) {
    ct.bgColor = colorToChannel(bgColors)
  }
  // 单色数组也是单色
  else if (bgColors.length === 1) {
    ct.bgColor = bgColors[0]
  }
  // 无颜色
  else if (bgColors.length === 0) {
    noop();
  }
  // 梯度颜色
  else {
    const foreChannels = creatGeadient(bgColors, len);
    for (let index = 0; index < len; index++) {
      ct[index].bgColor = foreChannels[index];
    }
  }
  return ct
}

function cls() {
  console.clear()
}
function clsLine() {
  console.log(`\x1B[K\x1B[3A`)
}

export { TextUnit, ColorText, geadientText, cls };