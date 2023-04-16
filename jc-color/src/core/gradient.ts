import { colorsToChannels} from "../converters";
import type { RgbColorChannels } from "../types";
import { ValueError, arithmeticProgression } from "@jcstdio/jc-utils";

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
function creatGeadientBase(color1: RgbColorChannels, color2: RgbColorChannels, insert: number, includeNum1: boolean=true, includeNum2: boolean=true): RgbColorChannels[] {
  const redFrom = color1.red;
  const greenFrom = color1.green;
  const blueFrom = color1.blue;
  const redEnd = color2.red;
  const greenEnd = color2.green;
  const blueEnd = color2.blue;
  const geadientRed = arithmeticProgression(redFrom, redEnd, insert, includeNum1, includeNum2);
  const geadientGreen = arithmeticProgression(greenFrom, greenEnd, insert, includeNum1, includeNum2);
  const geadientBlue = arithmeticProgression(blueFrom, blueEnd, insert, includeNum1, includeNum2);
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
    const _0 = channels[0]
    const res: RgbColorChannels[] = [
      {red:_0.red, green:_0.green, blue:_0.blue },
    ];
    // 每个坑位需要插入的颜色个数
    const prePosInserts = perStepNumbers(len, geadient);
    
    // 每两个管道之间插入颜色
    for( let i=0; i<len-1; i++ ){
      let fromChannel = channels[i];
      let toChannel = channels[i+1];  
      let inserts = prePosInserts[i]; // 该坑位需要插入的颜色数


      // console.log("\n----------------------------------------\n*fromChannel =",fromChannel);
      // console.log("*toChannel =",toChannel);
      
      
      // 每组默认不包含头尾获取 R、G、B 等差数列
      const reds = arithmeticProgression(fromChannel.red, toChannel.red, inserts, false, true);
      const greens = arithmeticProgression(fromChannel.green, toChannel.green, inserts, false, true);
      const blues = arithmeticProgression(fromChannel.blue, toChannel.blue, inserts, false, true);

      // console.log('\nreds =',reds);
      // console.log('\greens =',greens);
      // console.log('\blues =',blues);
      


      // 组合各组渐变色
      for(let j=0; j< reds.length; j++){
        res.push({
          red: reds[j],
          green: greens[j],
          blue: blues[j],
        })
      }
    }
    return res
  }
}

export {
  creatGeadientBase,
  creatGeadient
}