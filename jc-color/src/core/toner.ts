
import { isString } from "@jcstdio/jc-utils";
import { colorsDict } from "."
import type { Color, RgbColorChannels } from "../types"
import { stringColorToChannels } from "../converters";

/**
 * 颜色混合器
 * @param color1 第一个被混合的颜色
 * @param color2 第二个被混合的颜色
 * @param weight 混合权重
 * @returns 混合后的颜色，以颜色管道的形式返回
 */
function mixColor(color1: Color, color2: Color, weight: number): RgbColorChannels {
  let _color1:RgbColorChannels;
  let _color2:RgbColorChannels;
  if(isString(color1)){
    _color1 = stringColorToChannels(color1)
  }else{
    _color1 = color1
  }
  if(isString(color1)){
    _color2 = stringColorToChannels(color2)
  }else{
    _color2 = color2 as RgbColorChannels
  }
  const w1 = weight;
  const w2 = 1 - weight;
  const r = Math.round(_color1.red * w1 + _color2.red * w2);
  const g = Math.round(_color1.green * w1 + _color2.green * w2);
  const b = Math.round(_color1.blue * w1 + _color2.blue * w2);
  return {red:r,green:g,blue:b};
}

/**
 * 用一个颜色加量: 将一个颜色与白色混合
 * @param color 
 * @param weight 混合权重
 */
function tintColor(color: Color, weight: number) {
  return mixColor(colorsDict.white, color, weight)
}

/**
 * 用一个颜色增黑: 将一个颜色与白色混合
 * @param color 
 * @param weight 
 */
function shadeColor(color: Color,  weight: number) {
  return mixColor(colorsDict.black, color, weight)
}

export {
  mixColor,
  tintColor,
  shadeColor
}