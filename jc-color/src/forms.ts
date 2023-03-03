import { isInt } from "./utils";

class ColorBase {
  private _red:number=0
  private _green:number=0
  private _blue:number=0

  constructor(red: number = 0, green: number = 0, blue: number = 0) {
    isInt(red)
    
    this._red = red;
    this._green = green;
    this._blue = blue;
  }
  get red(): number { return this._red; }
  get green(): number { return this._green; }
  get blue(): number { return this._blue; }
  set red(value: number) { this._red = value; }
  set green(value: number) { this._green = value; }
  set blue(value: number) { this._blue = value; }


}

class ColorRGB extends ColorBase {
  
}