
import { colorsDict } from "./colors"
import type { Color } from "./types"

/**从一个颜色中获取其中红色值（0-255） */
function red(color: Color) {
  
}

/**从一个颜色中获取其中绿色值（0-255） */
function green(color: Color) {
  
}

/**从一个颜色中获取其中蓝色值（0-255） */
function blue(color: Color) {
  
}

function mixColor(color1: Color, color2: Color, weight: number){

}

/** 用一个颜色加量: 将一个颜色与白色混合 */
function tintColor(color: Color,  weight: number) {
    return mixColor(colorsDict.white, color, weight)
}

/** 用一个颜色增黑: 将一个颜色与白色混合 */
function shadeColor(color: Color,  weight: number) {
    return mixColor(colorsDict.black, color, weight)
}

