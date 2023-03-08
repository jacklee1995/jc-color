
import { colorsDict } from "."
import type { Color } from "../types"


function mixColor(color1: Color, color2: Color, weight: number){

}

/**
 * 用一个颜色加量: 将一个颜色与白色混合
 * 暂未实现
 * @param color 
 * @param weight 
 * @returns 
 */
function tintColor(color: Color,  weight: number) {
    return mixColor(colorsDict.white, color, weight)
}

/**
 * 用一个颜色增黑: 将一个颜色与白色混合
 * 暂未实现
 * @param color 
 * @param weight 
 * @returns 
 */
function shadeColor(color: Color,  weight: number) {
    return mixColor(colorsDict.black, color, weight)
}

export {
  mixColor,
  tintColor,
  shadeColor
}