import { colorNames, colorsDict } from "..";
import { regHex, regHex3, regHex6, regRgb } from "../regs";
import { ColorNames, RgbColorChannels } from "../types";
import { isObject, isString, ValueError } from "../utils";


/**
 * 从 十六进制颜色（3位） 表达式中提取到颜色通道
 * @param val 一个三位十六进制数表示的颜色，如 "#7F2"
 * @returns 颜色通道
 */
function hex3ToChannels(val: string): RgbColorChannels | null {
    if (regHex3.test(val)) {
      return {
        red: parseInt(val[1].repeat(2).slice(0, 2), 16),
        green: parseInt(val[2].repeat(2).slice(2, 4), 16),
        blue: parseInt(val[3].repeat(2).slice(4, 6), 16),
      };
    }
    return null;
  }
  
  /**
   * 从 十六进制颜色（6位） 表达式中提取到颜色通道
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
 * 从 rgb() 表达式中提取到颜色通道
 * @param val rgb() 表达式
 * @param strct 
 * @returns 
 */
function rgbToChannels(val: string, strct = false): RgbColorChannels {
    let _ = val.trim();
    const res = {
      red: '',
      green: '',
      blue: '',
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

/**
 * 从 十六进制颜色（3或6位） 表达式中提取到颜色通道
 * @param val
 * @returns
 */
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
 * 暂未实现
 */
function hslToChannels() { }


/**
 * 将一个颜色表达式转为颜色通道
 * @param color 
 * @param strict 若为 true，当 color 不
 * @returns 
 */
function colorToChannel(color: string | RgbColorChannels, strict: boolean = false): RgbColorChannels {
  
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
        return hexToChannels(_color)
      }
      // RGB函数
      else if (regRgb.test(_color)) {
        return rgbToChannels(_color)
      } else {
        throw ValueError(`String color param value "${_color}" is not a supported colorvalue`)
      }
    }
    else if (isObject(color)) {
      return {
        red: color.red,
        green: color.green,
        blue: color.blue
      }
    } else if (strict) {
      throw ValueError(`Invalid color param ${color}`)
    } else {
      return {
        red: 0,
        green: 0,
        blue: 0,
      }
    }
  }

/**
 * 将一组以字符串颜色转换为一组颜色管道
 * @param colors 一组颜色值，可以是字符串颜色或者管道颜色
 * @returns 
 */
function colorsToChannels(...colors: (string | RgbColorChannels)[]): RgbColorChannels[] {
    let channels: RgbColorChannels[] = [];
    for (let index = 0; index < colors.length; index++) {
      channels.push(colorToChannel(colors[index]));
    }
    return channels
  }

export {
    hex3ToChannels,
    hex6ToChannels,
    hexToChannels,
    rgbToChannels,
    hslToChannels,
    colorToChannel,
    colorsToChannels,
}