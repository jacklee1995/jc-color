/*! *****************************************************************************
Copyright (c) 2023 李俊才 All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.

***************************************************************************** */


const regDecimalNumber = /^-?[1-9]\d*.?\d*$/;
const regOctalNumber = /^-?0\d*.?\d*$/;
const regHexadecimalNumber = /^-?0x\\?[1-9,A-F]*.?[1-9,A-F]*$/;


/**
 * 用一组正则测试一个字符串，当且仅当
 * 满足所有正则表达式时结果返回 true，否则返回 false
 * @param regs 一组正则表达式
 * @param text 被测试的文本
 */
function regTestAll(regs:RegExp[], text:string, debug:boolean=false): boolean{
  const ary = regs.map((reg)=>{
    return reg.test(text)
  })
  if(debug) {
    console.log(`------[debug for reg test]------ \nregs = ${regs} text = "${text}"`);
    console.log(ary,"=>",ary.some(x=>x));
  }
  return ary.every(x=>x);
}

/**
 * 用一组正则测试一个字符串，只要任意一个
 * 满足所有正则表达式时结果返回 true，否则返回 false
 * @param regs 一组正则表达式
 * @param text 被测试的文本
 */
function regTestAny(regs:RegExp[], text:string, debug:boolean=false): boolean{
  const ary = regs.map((reg)=>{
    return reg.test(text)
  })
  if(debug) {
    console.log(`------[debug for reg test]------ \nregs = ${regs} \ntext = "${text}"`);
    console.log(ary,"=>",ary.some(x=>x));
  }
  return ary.some(x=>x);
}

export {
  regDecimalNumber,
  regOctalNumber,
  regHexadecimalNumber,
  regTestAll,
  regTestAny
}