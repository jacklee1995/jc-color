import { isBoolean, isFunction, isString, isNumber, isObject, isArray } from "./is";
import { InputTypeError, ValueError } from "./exceptions";
import { regDecimalNumber, regHexadecimalNumber, regOctalNumber } from "./reg";

const noop = (...params:any)=>{}
const pass = (param?:string)=>{
  param?console.log(`${param}`):noop();
}

const str = (val: unknown): string => {
  if (val === undefined) {
    return "undefined";
  } else if (val === null) {
    return "null";
  } else if (isBoolean(val)) {
    return val ? "true" : "false";
  } else if (isObject(val)) {
    if(Reflect.has(val,"__str__")){
        const __str__ = Reflect.get(val,"__str__");
        if(isFunction(__str__)) {
          return __str__.apply(val);
        }
        return __str__.toString();
    }
  }
  return val.toString();
};


/**
 * 将数字、字符串、布尔值等转为 十进制整数
 *
 * 规则如下：
 * - 对于非数字NaN类型，转换为0；
 * - 对于其它数字，转为10进制整数；
 * - 对于 undefined 和 null，都转换为 0；
 * - 对于布尔类型，flase 转换为 0，true 转换为 1；
 * - 对于字符串类型
 *   - 如果字符串是普通十进制数字符串表示形式，则转换为数字返回；
 *   - 如果字符串中有且仅有一个小数点，其它为皆为数字字符串，则返回小数点前面部分数字字符串转换成的数字；
 *   - 如果是0开头的 8进制 格式的字符串，则视作将 8进制数 转换为 10进制整数 返回
 *   - 如果是0x开头的 16进制 格式的字符串，则视作将 16进制数 转换为 10进制整数 返回
 * - 对于对象类型，若有 __init__ 方法则调用其返回值进行返回，否则返回 NaN
 *
 * @param val
 * @returns
 */
const int = (val: unknown): number => {
  if (isNumber(val)) {
    if (isNaN(val)) {
      return 0;
    } else {
      return parseInt(val.toString(), 10);
    }
  } else if (val === undefined || val === null) {
    return 0;
  } else if (isBoolean(val)) {
    return val === true ? 1 : 0;
  } else if (isString(val)) {
    // 十进制
    if (regDecimalNumber.test(val)) {
      return parseInt((val.match(/^-?[1-9]\d*.?/) as any)[0].replace(".", ""), 10);
    } else if (regOctalNumber.test(val)) {
      return parseInt((val.match(/^-?0\d*.?/) as any)[0].replace(".", ""), 8);
    }
    // 十六进制
    else if (regHexadecimalNumber.test(val)) {
      return parseInt((val.match(/^-?0x\\?[1-9,A-F]*/) as any)[0], 16);
    } 
  }
  // 如果是对象，若存在则调用其 __int__ 方法
  // 当且仅当 __int__ 方法返回数字时，将其返回的数字返回
  else if (isObject(val)) {
    if (Reflect.has(val, "__num__")) {
      const __int__ = Reflect.get(val, "__num__");
      if(isFunction(__int__)) {
        return __int__.call(val);
      }else if (isNumber(__int__)) {
        return parseInt(__int__.toString());
      }
    }
    throw ValueError(
      `Invalid param "${val}", which can't be transformed into a int number`
    );
  }
  return parseInt(val);
};


const len = (val: unknown): number => {

  if(isString(val) || isArray(val) ) {
    return val.length;
  }

  else if(isObject(val)) {
    if(Reflect.has(val,"length")){
      const len = val.length;
      if(isNumber(len)){
        return len
      }
    }
    else if (Reflect.has(val, "__len__")) {
      const __len__ = Reflect.get(val, "__len__");
      if (isNumber(__len__)) {
        return parseInt(__len__.toString());
      }
      else if(isFunction(__len__)) {
        
        
        const res = __len__.call(val)
        if(isNumber(res)){
          return res
        }
      }
    }
    
  }
  return 0;
}

function exceptStringToRun(input: any, func:(...args: any) => any, ...args: any[]) {
  if(isString(input)){
    if(isFunction(func)){
      return func.apply({},args)
    }
    else {
      throw ValueError(`param "func" for exceptString must be a function.`)
    }
  }else{
    throw InputTypeError('string', typeof input);
  }
}

// TODO: Do browser compatibility processing
/**
 * 
 * @param args 
 * @example
 * ```ts
 * import { print, str } from 'jc-color'
 * 
 * print(`
 * some text....
 *  ${str(red('red text'))},
 *  ${str(green('green text'))}
 * `)
 * ```
 */
function print(...args: any[]): void {
  let _ = "";
  args.forEach((i)=>{
    _ += str(i)
  })

  console.log(_);
}

export {
  noop,
  pass,
  str,
  int,
  exceptStringToRun,
  print
}
