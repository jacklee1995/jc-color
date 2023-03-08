import { regHex, regHex3, regHex6, regRgb } from "../converters";
import { isObject } from "../utils";
import { RgbaChannels, RgbColorChannels } from "./color";

function isHexColor(val: string|number): boolean {
  const str = val.toString().trim();
  return regHex.test(str);
}

function isHex3Color(val: string|number): boolean {
  const str = val.toString().trim();
  return regHex3.test(str);
}

function isHex6Color(val: string|number): boolean {
  const str = val.toString().trim();
  return regHex6.test(str);
}

function isRgbColor(val: string): boolean {
  const str = val.toString().trim();
  return regRgb.test(str);
}

function isRgbChannels(val:any): val is RgbColorChannels {
  if(isObject(val)){
    let ary = Object.getOwnPropertyNames(val);
    if(ary.includes('red') && ary.includes('green') && ary.includes('blue')){
      return true
    }
  }
  return false
}

function isRgbaChannels(val:any): val is RgbaChannels {
  if(isObject(val)){
    let ary = Object.getOwnPropertyNames(val);
    if(ary.includes('red') && ary.includes('green') && ary.includes('blue')){
      return true
    }
  }
  return false
}

export {
  isHexColor,
  isHex3Color,
  isHex6Color,
  isRgbColor,
  isRgbChannels,
  isRgbaChannels
}