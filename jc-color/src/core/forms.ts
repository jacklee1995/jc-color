import { computHex3, computHex6, hexToChannels, rgbToChannels } from "../converters";
import { RgbColorChannels, RgbaChannels } from "../types";

/**
 * 颜色通道对象
 */
class Channels {
  private _red: number = 0;
  private _green: number = 0;
  private _blue: number = 0;
  private _a: number = 1;

  constructor(color?: string|RgbColorChannels|RgbaChannels) {
    
  }

  public loadFromName(color:string) {

  }
  public loadFromChannels(val:RgbColorChannels){
    this._red = val.red;
    this._green = val.green;
    this._blue = val.blue;
  }
  public loadFromHexColor(val:string) {
    
  }
  public loadFromRgbColor(val:string) {

  }
  public loadFromRgbaColor(val:RgbaChannels) {
    this._red = val.red;
    this._green = val.green;
    this._blue = val.blue;
    this._a = val.a;
  }
  
  get value(): RgbColorChannels {
    return {
      red: this._red,
      green: this._green,
      blue: this._blue,
    };
  }
  set value(value: RgbColorChannels) {
    this._red = value.red;
    this._green = value.green;
    this._blue = value.blue;
  }
  get red() { return this._red;}
  set red(value:number) { this._red = value; }

  get green() { return this._green;}
  set green(value:number) { this._green = value; }
  
  
  set blue(value:number) { this._blue = value; }

  get a() { return this._a; }
  set a(value:number) { this._a = value; }

  add(by: number): void {
    this._red += by;
    this._green += by;
    this._blue += by;
  }
  minus(by: number): void {
    this._red -= by;
    this._green -= by;
    this._blue -= by;
  }

  addReb(by: number=1): void {
    this._red += by;
  }

  addGreen(by: number=1): void {
    this._green += by;
  }

  addBlue(by: number=1): void {
    this._blue += by;
  }

  minusRed(by: number=1): void {
    this._red -= by;
  }

  minusGreen(by: number=1): void {
    this._red -= by;
  }

  minusBlue(by: number=1): void {
    this._red -= by;
  }

  toHex3(): string{
    return computHex3(this.value)
  }

  toHex(): string{
    return computHex6(this.value)
  }

  /**Alias for toHex */
  toHex6(): string{
    return this.toHex()
  }

  toCSSRGB(){
    return `rgb(${this._red},${this._green},${this._blue})`
  }
  /**加载一个十六进制颜色字符串 */
  loadHex(val:string): void {
    this.value = hexToChannels(val)
  }
  /**
   * 加载一个rgb表示的颜色字符串
   * @param val 格式为 `rgb(red,green,blue)`
   */
  loadRgb(val:string): void {
    this.value = rgbToChannels(val)
  }
}


// class ColorBase {
//   private _red:number=0
//   private _green:number=0
//   private _blue:number=0

//   constructor(red: number = 0, green: number = 0, blue: number = 0) {
//     isInt(red)
    
//     this._red = red;
//     this._green = green;
//     this._blue = blue;
//   }
//   get red(): number { return this._red; }
//   get green(): number { return this._green; }
//   get blue(): number { return this._blue; }
//   set red(value: number) { this._red = value; }
//   set green(value: number) { this._green = value; }
//   set blue(value: number) { this._blue = value; }


// }

export {
  Channels
}