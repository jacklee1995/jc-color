import { RgbColorChannels } from "../types";

/**
 * 将三位十六进制数颜色转换为 Rgb 颜色
 * @param val 
 * @returns 
 */
function hexToRgb(val: string): RgbColorChannels {
  return { red: 0, green: 0, blue: 0 };
}

function hslToRgb() { }
export {
  hexToRgb,
  hslToRgb
}