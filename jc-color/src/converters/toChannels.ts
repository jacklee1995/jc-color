import { colorNames, colorsDict } from "..";
import { regHex, regHex3, regHex6, regRgb } from "../regs";
import {
  ColorNames,
  RgbColorChannels,
  isHSLColor,
  whichColorStr,
} from "../types";
import { isObject, isString, ValueError } from "@jcstdio/jc-utils";

/**
 * 从 Hex颜色（3位） 表达式中提取到颜色通道
 * @param val 一个三位十六进制数表示的颜色，如 "#7F2"
 * @returns 颜色通道
 */
function hex3ToChannels(val: string): RgbColorChannels | null {
  if (regHex3.test(val)) {
    return {
      red: parseInt(val[1] + val[1], 16),
      green: parseInt(val[2] + val[2], 16),
      blue: parseInt(val[3] + val[3], 16),
    };
  }
  return null;
}

/**
 * 从 Hex颜色（6位） 表达式中提取到颜色通道
 * @param val 一个六位十六进制数表示的颜色值，如 "#9C6CD"
 * @returns 颜色通道
 */
function hex6ToChannels(val: string): RgbColorChannels | null {
  if (regHex6.test(val)) {
    return {
      red: parseInt(val.slice(1, 3), 16),
      green: parseInt(val.slice(3, 5), 16),
      blue: parseInt(val.slice(5, 7), 16),
    };
  }
  return null;
}

/**
 * 从 rgb(...) 表达式字符串中提取到颜色通道
 */
function rgbToChannels(val: string, strct = false): RgbColorChannels {
  let _ = val.trim();
  const res = {
    red: "",
    green: "",
    blue: "",
  };

  if (regRgb.test(_)) {
    [res.red, res.green, res.blue] = val.match(/[0-2]?[0-9]?[0-9]/gi) as any;
    return {
      red: parseInt(res.red, 10),
      green: parseInt(res.green, 10),
      blue: parseInt(res.blue, 10),
    };
  }

  if (strct) {
    throw ValueError(
      `Param value "${val}" could not be converted to color channels.`
    );
  }

  return {
    red: 0,
    green: 0,
    blue: 0,
  };
}

/**将 Hex 颜色（3或6位）字符串 转换为颜色通道 */
function hexToChannels(val: string, strct = false): RgbColorChannels {
  let hex3 = hex3ToChannels(val);
  if (hex3 !== null) {
    return hex3;
  } else {
    let hex6 = hex6ToChannels(val);
    if (hex6 !== null) {
      return hex6;
    }
  }
  if (strct) {
    throw ValueError(
      `Param value "${val}" could not be converted to color channels.`
    );
  }
  return {
    red: 0,
    green: 0,
    blue: 0,
  };
}

/**
 * 将一个字符串表示的颜色值转换为 RgbColorChannels 类型的颜色管道
 */
function hslToChannels(val: string): RgbColorChannels {
  if (isHSLColor(val)) {
    const hslRegex =
      /^hsl\(\s*(-?\d+)(?:deg)?\s*,\s*(\d+)%\s*,\s*(\d+)%\s*\)$/i;
    const match = val.match(hslRegex) as RegExpMatchArray;

    const h = parseInt(match[1], 10);
    const s = parseInt(match[2], 10) / 100;
    const l = parseInt(match[3], 10) / 100;

    const hue2rgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;

    const r = hue2rgb(p, q, h / 360 + 1 / 3);
    const g = hue2rgb(p, q, h / 360);
    const b = hue2rgb(p, q, h / 360 - 1 / 3);

    return {
      red: Math.round(r * 255),
      green: Math.round(g * 255),
      blue: Math.round(b * 255),
    };
  } else {
    throw ValueError(
      `The value of param val is ${val}, which is not a valid value. (except string)`
    );
  }
}

/**
 * 将一个颜色表达式转为颜色通道
 * - 该表达式既可以是一个字符串，又可以是一个 rgb 颜色通道
 */
function colorToChannel(
  color: string | RgbColorChannels,
  strict: boolean = false
): RgbColorChannels {
  if (isString(color)) {
    let _color = color.toLowerCase();
    // 内置颜色名
    if (colorNames.includes(_color)) {
      const _ = colorsDict[_color as ColorNames];
      return {
        red: _.red,
        green: _.green,
        blue: _.blue,
      };
    }
    // 十六进制
    else if (regHex.test(_color)) {
      return hexToChannels(_color);
    }
    // RGB函数
    else if (regRgb.test(_color)) {
      return rgbToChannels(_color);
    } else {
      throw ValueError(
        `String color param value "${_color}" is not a supported colorvalue`
      );
    }
  } else if (isObject(color)) {
    return {
      red: color.red,
      green: color.green,
      blue: color.blue,
    };
  } else if (strict) {
    throw ValueError(`Invalid color param ${color}`);
  } else {
    return {
      red: 0,
      green: 0,
      blue: 0,
    };
  }
}

/**
 * 将一组以字符串颜色转换为一组颜色管道
 * @param colors 一组颜色值，可以是字符串颜色或者管道颜色
 */
function colorsToChannels(
  ...colors: (string | RgbColorChannels)[]
): RgbColorChannels[] {
  let channels: RgbColorChannels[] = [];
  for (let index = 0; index < colors.length; index++) {
    channels.push(colorToChannel(colors[index]));
  }
  return channels;
}

/**
 * 用于将一个 rgba 颜色字符串转换为一组颜色管道
 * @param val
 */
function rgbaToChannels(val: string): RgbColorChannels {
  const colorArr = val.replace(/[^\d,.]/g, "").split(",");
  // Convert the color components to numbers and store them in an object
  const colorObj = {
    red: Number(colorArr[0]),
    green: Number(colorArr[1]),
    blue: Number(colorArr[2]),
    a: Number(colorArr[3]),
  };

  // Return the color object
  return colorObj;
}

/**
 * 用于将一个 hsla 颜色字符串转换为一组颜色管道
 * @param val
 */
function hslaToChannels(val: string): RgbColorChannels {
  const colorArr = val.replace(/[^\d,.]/g, "").split(",");

  // 将色调、饱和度和亮度组件转换为数字
  const hue = Number(colorArr[0]);
  const saturation = Number(colorArr[1]);
  const lightness = Number(colorArr[2]);

  const alpha = Number(colorArr[3]);
  const colorObj = { red: NaN, green: NaN, blue: NaN, a: alpha };

  const chroma = (1 - Math.abs(2 * lightness - 1)) * saturation;
  const huePrime = hue / 60;
  const x = chroma * (1 - Math.abs((huePrime % 2) - 1));
  let red = 0;
  let green = 0;
  let blue = 0;
  if (huePrime >= 0 && huePrime < 1) {
    red = chroma;
    green = x;
  } else if (huePrime >= 1 && huePrime < 2) {
    red = x;
    green = chroma;
  } else if (huePrime >= 2 && huePrime < 3) {
    green = chroma;
    blue = x;
  } else if (huePrime >= 3 && huePrime < 4) {
    green = x;
    blue = chroma;
  } else if (huePrime >= 4 && huePrime < 5) {
    red = x;
    blue = chroma;
  } else if (huePrime >= 5 && huePrime < 6) {
    red = chroma;
    blue = x;
  }
  const m = lightness - chroma / 2;
  colorObj.red = Math.round((red + m) * 255);
  colorObj.green = Math.round((green + m) * 255);
  colorObj.blue = Math.round((blue + m) * 255);

  return colorObj;
}

function stringColorToChannels(
  val: ColorNames | RgbColorChannels | string
): RgbColorChannels {
  if (isString(val)) {
    if (colorNames.includes(val)) {
      return colorsDict[val as ColorNames];
    } else {
      const colorType = whichColorStr(val);
      if (colorType === "none") {
        throw ValueError(`"${val}" is not a supported color string.`);
      } else if (colorType === "hex") {
        return hexToChannels(val);
      } else if (colorType === "hsl") {
        return hslToChannels(val);
      } else if (colorType === "rgb") {
        return rgbToChannels(val);
      } else if (colorType === "rgba") {
        return rgbaToChannels(val);
      } else if (colorType === "hsla") {
        return hslaToChannels(val);
      }
      throw ValueError(
        "function stringColorToChannels gots a wrong color string."
      );
    }
  } else {
    return val;
  }
}




function hslToRgbChannels(val: string): { red: number; green: number; blue: number } {
  const hslRegex = /^hsl\(\s*(-?\d+)(?:deg)?\s*,\s*(\d+)%\s*,\s*(\d+)%\s*\)$/i;
  const match = val.match(hslRegex);


  if(match){
    const h = parseInt(match[1], 10);
    const s = parseInt(match[2], 10) / 100;
    const l = parseInt(match[3], 10) / 100;
  
    const hue2rgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };
  
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
  
    const r = hue2rgb(p, q, h / 360 + 1 / 3);
    const g = hue2rgb(p, q, h / 360);
    const b = hue2rgb(p, q, h / 360 - 1 / 3);
  
    return {
      red: Math.round(r * 255),
      green: Math.round(g * 255),
      blue: Math.round(b * 255),
    };
  }else{
    throw ValueError("Invalid hsl color.")
    
  }

  
}

export {
  hex3ToChannels,
  hex6ToChannels,
  hexToChannels,
  rgbToChannels,
  hslToChannels,
  colorToChannel,
  colorsToChannels,
  stringColorToChannels,
  hslToRgbChannels
};
