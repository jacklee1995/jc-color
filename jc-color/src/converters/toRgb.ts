import { ValueError } from "@jcstdio/jc-utils";
import { RgbColorChannels, isHexColor } from "../types";
import { hexToChannels, hslToChannels, rgbToChannels } from "./toChannels";

/**
 * 将颜色管道对象转换为 以rgb格式表示的 颜色字符串
 */
function channelsToRgb(channels: RgbColorChannels): string {
  return `rgb(${channels.red},${channels.green},${channels.blue})`;
}


/**
 * 将 hex颜色字符串转 换为 Rgb颜色字符串
 * @param val 一个表示 hex 颜色的字符串
 * @returns 以 rgb 颜色格式表示的字符串
 */
function hexToRgb(val: string): string {
  if(isHexColor(val)){
    const channels = hexToChannels(val)
    return channelsToRgb(channels)
  }else{
    throw ValueError('param val must be a hex color string')
  }
}

/**
 * 将 hsl颜色字符串转 换为 Rgb颜色字符串
 * @param val 一个表示 hsl 颜色的字符串
 */
function hslToRgb(val: string): string {
  const channels = hslToChannels(val)
  return channelsToRgb(channels)
}


export {
  channelsToRgb,
  hexToRgb,
  hslToRgb
}


