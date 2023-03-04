import { regHex3, regHex6, regRgb } from "./regs";
import { ColorChannels } from "./types";
import { ValueError } from "./utils";

/**
 * 三位十六进制颜色转通道值
 * @param val 一个三位十六进制数表示的颜色，如 "#7F2"
 * @returns 颜色通道
 */
function hex3ToChannels(val: string): ColorChannels | null {
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
 * 六位十六进制颜色转通道值
 * @param val 一个六位十六进制数表示的颜色值，如 "#9C6CD"
 * @returns 颜色通道
 */
function hex6ToChannels(val: string): ColorChannels | null {
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
 * 将十六进制颜色值用RGB通道表示
 * @param val
 * @returns
 */
function hexToChannels(val: string, strct = false): ColorChannels {
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

function rgbToChannels(val: string, strct = false): ColorChannels {
  let _ = val.trim();
  const res = {
    red: 0,
    green: 0,
    blue: 0,
  };

  if (regRgb.test(_)) {
    [res.red, res.green, res.blue] = val.match(/[0-2]?[0-9]?[0-9]/gi) as any;
    return {
      red: res.red,
      green: res.green,
      blue: res.blue,
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
 * 将通道数据转三位十六进制数颜色
 * @param val
 * @returns
 */
function computHex3(val: ColorChannels): string {
  return val.red.toString(16) + val.green.toString(16) + val.blue.toString(16);
}

/**
 * 将通道数据转六位十六进制数颜色
 * @param val
 * @returns
 */
function computHex6(val: ColorChannels): string {
  return val.red.toString(16) + val.green.toString(16) + val.blue.toString(16);
}

/**
 * 将三位十六进制数颜色转换为六位十六进制数颜色
 * @param val
 * @returns
 */
function Hex3ToHex6(val: string): string {
  return "";
}

/**
 * 将三位十六进制数颜色转换为 Rgb 颜色
 * @param val 
 * @returns 
 */
function hexToRgb(val: string): ColorChannels {
  return { red: 0, green: 0, blue: 0 };
}

/**
 * 
 * @param rgb 将 rgb 颜色转换为
 * @returns 
 */
function rgbToHex(rgb: string): string {
  return "";
}

export {
  hex3ToChannels,
  hex6ToChannels,
  computHex3,
  computHex6,
  Hex3ToHex6,
  hexToChannels,
  rgbToChannels,
  hexToRgb,
  rgbToHex,
};
