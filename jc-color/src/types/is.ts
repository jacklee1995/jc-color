import { regHsl, regHex, regHex3, regHex6, regRgb, regHsla, regRgba } from "../converters";
import { isObject } from "@jcstdio/jc-utils";
import { RgbaChannels, RgbColorChannels } from "./color";

/**判断一个字符串是否是 hex 颜色 */
function isHexColor(val: string|number): boolean {
  const str = val.toString().trim();
  return regHex.test(str);
}

/**判断一个字符串是否是 3 位的 hex 颜色 */
function isHex3Color(val: string|number): boolean {
  const str = val.toString().trim();
  return regHex3.test(str);
}

/**判断一个字符串是否是 6 位的 hex 颜色 */
function isHex6Color(val: string|number): boolean {
  const str = val.toString().trim();
  return regHex6.test(str);
}

/**判断一个字符串是否表示 rgb 颜色 */
function isRgbColor(val: string): boolean {
  const str = val.toString().trim();
  return regRgb.test(str);
}

/**判断一个变量是否是 rgb 颜色管道 */
function isRgbChannels(val:any): val is RgbColorChannels {
  if(isObject(val)){
    let ary = Object.getOwnPropertyNames(val);
    if(ary.includes('red') && ary.includes('green') && ary.includes('blue')){
      return true
    }
  }
  return false
}

/**判断一个变量是否是 rgba 颜色管道 */
function isRgbaChannels(val:any): val is RgbaChannels {
  if(isObject(val)){
    let ary = Object.getOwnPropertyNames(val);
    if(ary.includes('red') && ary.includes('green') && ary.includes('blue')){
      return true
    }
  }
  return false
}

/**
 * 判断一个字符串是表示哪一种颜色
 * 
 * - 如 hex颜色（返回hex）、rgb颜色（返回rgb）、rgba颜色（返回rgba）
 * - hsl颜色（返回hsl）、hsla颜色（返回hsla）。
 * - 如果都不满足则返回 'none'。
 */
function whichColorStr(str:string) {
  if (regHex.test(str)) {
    return 'hex';
  }
  else if (regRgb.test(str)) {
    return 'rgb';
  }
  else if (regRgba.test(str)) {
    return 'rgba';
  }
  else if (regHsl.test(str)) {
    return 'hsl';
  }
  else if (regHsla.test(str)) {
    return 'hsla';
  }
  else {
    return 'none';
  }
} 

/**判断给定的字符串是表示 hsl 颜色 */
function isHSLColor(val: string) {
  const str = val.toString().trim();
  return regHsl.test(str)
}

export {
  isHexColor,
  isHex3Color,
  isHex6Color,
  isRgbColor,
  isRgbChannels,
  isRgbaChannels,
  isHSLColor,
  whichColorStr
}