import { RgbColorChannels } from "../types";

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
function Hex3ToHex6(val: string): string {

    return "";
}


/**
 * 暂未实现
 */
function hslToHex() { }

/**
 * 暂未实现
 * @param rgb 将 rgb 颜色转换为
 * @returns 
 */
function rgbToHex(val: string): string {
    return "";
}

export {
    computHex3,
    computHex6,
    Hex3ToHex6,
    rgbToHex,
    hslToHex,
}