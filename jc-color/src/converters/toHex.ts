import { ValueError } from "@jcstdio/jc-utils";
import { regHex3 } from "../regs";
import { RgbColorChannels, isHSLColor, isRgbColor } from "../types";
import { rgbToChannels } from "./toChannels";

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
    const [h, s, l] = val.trim().replace(/[^\d,.]/g, "").split(",").map((val) => parseFloat(val));
    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    const m = l - c / 2;
    let [r, g, b] = [0, 0, 0];
    if (h >= 0 && h < 60) {
        [r, g, b] = [c, x, 0];
    } else if (h >= 60 && h < 120) {
        [r, g, b] = [x, c, 0];
    } else if (h >= 120 && h < 180) {
        [r, g, b] = [0, c, x];
    } else if (h >= 180 && h < 240) {
        [r, g, b] = [0, x, c];
    } else if (h >= 240 && h < 300) {
        [r, g, b] = [x, 0, c];
    } else if (h >= 300 && h < 360) {
        [r, g, b] = [c, 0, x];
    }
    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);

    const _countHex = (c: number) => {
        const hex = c.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    };
    return `#${_countHex(r)}${_countHex(g)}${_countHex(b)}`;
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