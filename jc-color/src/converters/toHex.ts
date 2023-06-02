import { ValueError } from "@jcstdio/jc-utils";
import { regHex3 } from "../regs";
import { RgbColorChannels, isHSLColor, isRgbColor } from "../types";
import { hslToRgbChannels, rgbToChannels } from "./toChannels";

/**
 * 将通道数据转三位十六进制数颜色
 * @param val
 * @returns
 */
function computHex3(val: RgbColorChannels): string {
    return val.red.toString(16) + val.green.toString(16) + val.blue.toString(16);
}

/**
 * 将通道数据转六位十六进制数颜色
 * @param val
 * @returns
 */
function computHex6(val: RgbColorChannels): string {
    return val.red.toString(16) + val.green.toString(16) + val.blue.toString(16);
}

/**
 * 将三位十六进制数颜色转换为六位十六进制数颜色
 * 暂未实现
 * @param val
 * @returns
 */
function hex3ToHex6(hex3: string): string {
    if (regHex3.test(hex3)) {
        const hex6 = hex3.replace(/^#?/, "#").split("").map((c) => c + c).join("");
        return hex6;
    } else {
        throw ValueError(`"${hex3}" is nat a valid 3-digit hexadecimal color string.`)
    }
}

/**
 * 将颜色管道对象转换为hex格式的颜色字符串
 * @param channels 
 */
function channelsToHex(channels: RgbColorChannels): string {
    const redHex = channels.red.toString(16).padStart(2, '0');
    const greenHex = channels.green.toString(16).padStart(2, '0');
    const blueHex = channels.blue.toString(16).padStart(2, '0');
    return `#${redHex}${greenHex}${blueHex}`;
}

/**
 * 将一个 hsl 颜色字符串 转换为一个 hex 颜色字符串
 * @param hsl 一个表示 hsl颜色的字符串，例如 `hsl(120,100%,75%)`
 */
function hslToHex(val: string): string {
    if (!isHSLColor(val)) {
        throw ValueError(`"${val}" is nat a valid hsl color string.`)
    }
    const { red, green, blue } = hslToRgbChannels(val);
    const hex = (red << 16) | (green << 8) | blue;
    return `#${hex.toString(16).padStart(6, '0')}`;
}



/**
 * 将一个 rgb 颜色字符串转换位一个 Hex 颜色字符串
 * @param val 一个表示给 rgb 颜色的字符串
 */
function rgbToHex(val: string): string {
    if (isRgbColor(val)) {
        const channels = rgbToChannels(val);
        return channelsToHex(channels)
    }else{
        throw ValueError(`"${val}" is nat a valid rgb color string.`)
    }
    
}

export {
    computHex3,
    computHex6,
    hex3ToHex6,
    channelsToHex,
    hslToHex,
    rgbToHex,
}