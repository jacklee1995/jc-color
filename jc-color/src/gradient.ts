import { colorNames, colorsDict } from "./colors";
import { hexToChannels, rgbToChannels } from "./converter";
import { regHex, regRgb } from './regs'
import type { ColorNames, RgbColorChannels } from "./types";
import { isString, isObject, ValueError, arithmeticProgression } from "./utils";

/**
 * 将一个颜色表达式转为颜色通道
 * @param color 
 * @param strict 若为 true，当 color 不
 * @returns 
 */
function colorToChannel(color: string | RgbColorChannels, strict: boolean = false): RgbColorChannels {
  
  if (isString(color)) {
    let _color = color.toLowerCase();
    if (colorNames.includes(_color)) {
      const _ = colorsDict[_color as ColorNames];
      return {
        red: _.red,
        green: _.green,
        blue: _.blue,
      };
    }
    else if (regHex.test(_color)) {
      return hexToChannels(_color)
    }
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




/**
 * 一个数组从 fromNum 个数 增加若干个数后有 toNum 个数
 * 计算在 fromNum-1 个坑位平均需要插入数的个数
 * @param fromNum 
 * @param toNum 
 * @param strict 
 * @returns 表示各个坑位需插入颜色的数量的数构成的数组
 * @example
 * ```ts
 * perStepNumbers(6,5)   // []
 * perStepNumbers(5,5)   // [0]
 * perStepNumbers(5,6)   // [1,0,0,0]
 * perStepNumbers(5,18)  // [4,3,3,3]
 * perStepNumbers(6,18)  // [3,3,2,2,2]
 * ```
 */
function perStepNumbers(fromNum: number, toNum: number, strict: boolean = false): number[] {
  if (fromNum > toNum) {
    if (strict) {
      throw ValueError('Gradient color number numst great than input color numbers')
    } else {
      return [];
    }
  } else if (fromNum === toNum) {
    return [0]
  } else {
    // 需要生成颜色的总量
    const generatedAmount = toNum - fromNum;
    // 需要填充的位置
    const posNum = fromNum - 1;

    let _ = generatedAmount % posNum;

    // 完全可以平均分配到每一个位置
    if (_ === 0) {
      let res = [];
      for (let i = 0; i < posNum; i++) {
        res.push(parseInt((generatedAmount / posNum).toString()))
      }
      return res
    } else {

      const more = generatedAmount % posNum;
      let res = [];
      for (let i = 0; i < posNum; i++) {
        res.push(parseInt((generatedAmount / posNum).toString()))
      }
      for (let i = 0; i < more; i++) {
        res[i]++;
      }
      return res
    }
  }
}



/**
 * 在两个颜色中间等间距插入若干个颜色
 * @param color1 启示颜色（包含）
 * @param color2 停止颜色（包含）
 * @param insert 要在中间插件的颜色个数
 */
function creatGeadientBase(color1: RgbColorChannels, color2: RgbColorChannels, insert: number): RgbColorChannels[] {
  const redFrom = color1.red;
  const greenFrom = color1.green;
  const blueFrom = color1.blue;
  const redEnd = color2.red;
  const greenEnd = color2.green;
  const blueEnd = color2.blue;
  const geadientRed = arithmeticProgression(redFrom, redEnd, insert);
  const geadientGreen = arithmeticProgression(greenFrom, greenEnd, insert);
  const geadientBlue = arithmeticProgression(blueFrom, blueEnd, insert);
  const res: RgbColorChannels[] = [];
  for (let index = 0; index < geadientRed.length; index++) {
    res.push({
      red:geadientRed[index],
      green:geadientGreen[index],
      blue:geadientBlue[index],
    })
  }
  return res
}


/**
 * 在一组颜色值之间创建颜色梯度，输出 geadient 个颜色值
 * @param colors 颜色数组，最少两个颜色
 * @param geadient 梯度颜色个数，即增加到的颜色个数
 */
function creatGeadient(colors:(string | RgbColorChannels)[], geadient: number, strict: boolean=false) {
  const len = colors.length;
  if(len < 2){
    throw ValueError(`Gradient color requires at least two values.`)
  }
  const channels = colorsToChannels(...colors);
  const fromNum = channels.length; // 原有颜色数
  if(fromNum > geadient){
    if(strict){
      throw ValueError(`The number of gradient colors cannot be less than the original color number.`)
    }
    else{
      return channels
    }
  }
  else if(fromNum === geadient) {
    return channels
  }
  else {
    let res: RgbColorChannels[] = [];
    // 每个坑位需要插入的颜色个数
    const prePosInserts = perStepNumbers(len, geadient);
    
    // 每两个管道之间插入颜色
    for( let i=0; i<len-1; i++ ){
      let fromChannel = channels[i];
      let toChannel = channels[i+1];  
      let inserts = prePosInserts[i]; // 该坑位需要插入的颜色数
      
      // 每组默认包含头不包含尾获取 R、G、B 等差数列
      const reds = arithmeticProgression(fromChannel.red, toChannel.red, inserts, true, false);
      const greens = arithmeticProgression(fromChannel.green, toChannel.green, inserts, true, false);
      const blues = arithmeticProgression(fromChannel.blue, toChannel.blue, inserts, true, false);
      
      // 组合各组渐变色
      for(let j=0; j< geadient-1; j++){
        res.push({
          red: reds[j],
          green: greens[j],
          blue: blues[j],
        })
      }
    }
    // 补上最后一位
    res.push(channels[len-1]);








    

    // console.log("res =",res);
    
    return res
  }
}



export {
  creatGeadient
}