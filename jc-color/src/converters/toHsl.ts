import { RgbColorChannels, RgbaChannels, isHexColor, isRgbColor } from "../types";
import { hexToChannels, rgbToChannels } from "./toChannels";
import { ValueError } from '@jcstdio/jc-utils'


/**
 * 将一个颜色管道转换为 hsl 颜色字符串
 * @param {{red: number, green: number, blue: number, a?: number}} color 
 * @returns hsl 颜色字符串
 */
function channelsToHsl(color: |RgbColorChannels|RgbaChannels): string {
  let red = color.red / 255;
  let green = color.green / 255;
  let blue = color.blue / 255;
  let max = Math.max(red, green, blue);
  let min = Math.min(red, green, blue);
  let hue = 0;
  let saturation = 0;
  let lightness = (max + min) / 2;
  let chroma = max - min;
  if (chroma !== 0) {
    saturation = chroma / (1 - Math.abs(2 * lightness - 1));
    if (max === red) {
      hue = ((green - blue) / chroma) % 6;
    } else if (max === green) {
      hue = (blue - red) / chroma + 2;
    } else {
      hue = (red - green) / chroma + 4;
    }
    hue *= 60;
    if (hue < 0) {
      hue += 360;
    }
  }
  let hslColor = `hsl(${hue.toFixed()}, ${(saturation * 100).toFixed()}%, ${(lightness * 100).toFixed()}%)`;
  return hslColor;
}

/**将一个表示 rgb 颜色的字符串转换为 hsl颜色字符串 */
function rgbToHsl(val:string): string {
  if(isRgbColor(val)){
    const channels  = rgbToChannels(val);
    return channelsToHsl(channels)
  }
  else{
    throw ValueError('param val must be a rgb color string')
  }
}
/**将一个表示 hel 颜色的字符串转换为 hsl颜色字符串 */
function hexToHsl(val:string): string {
  if(isHexColor(val)){
    const channels  = hexToChannels(val);
    return channelsToHsl(channels)
  }
  else{
    throw ValueError('param val must be a hex color string')
  }
}

export {
  rgbToHsl,
  hexToHsl,
  channelsToHsl
};
