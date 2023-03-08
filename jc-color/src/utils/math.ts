import { ValueError } from "./exceptions";

/**
 * 等差数列构造器
 * 
 * 从 num1 开始，到 num2 结束，中间插入 insert 个数构成等差数组
 * @param num1 起始数（包含）
 * @param num2 结束数（包含）
 * @param ctrl 中间要插入元素的个数
 * @param includeNum1 返回结果中是否包含 num1，默认为 true
 * @param includeNum2 返回结果中是否包含 num2，默认为 true
 * @example
 * ```ts
 * arithmeticProgression(1,9,3);   // [ 1, 3, 5, 7, 9 ]
 * arithmeticProgression(9,1,3);   // [ 9, 7, 5, 3, 1 ]
 * arithmeticProgression(-9,-1,3); // [ -9, -7, -5, -3, -1 ]
 * arithmeticProgression(-1,-9,3); // [ -1, -3, -5, -7, -9 ]
 * arithmeticProgression(-1,-9,0); // [ -1, -9 ]
 * arithmeticProgression(1,1,3);   // [ 1, 1, 1, 1, 1 ]
 * ```
 */
function arithmeticProgression(_num1: number|string, _num2: number|string, _insert: number|string, includeNum1:boolean=true, includeNum2:boolean=true) {
  const insert = parseInt(_insert.toString(), 10)
  if(insert<0){
    throw ValueError(`The value of parameter "insert" must be greater than 0, but got "${insert}"`)
  }

  const num1 = parseInt(_num1.toString(), 10)
  const num2 = parseInt(_num2.toString(), 10)

  const stageNum = insert + 1;
  const stage = (num2 - num1) / stageNum;
  const res = [];
  if(includeNum1){
    res.push(num1)
  }
  for(let i=0; i<insert; i++) {
    res.push(
      num1+(stage)*(i+1)
    )
  }
  if(includeNum2){
    res.push(num2)
  }
  
  return res
}
export {
  arithmeticProgression
}