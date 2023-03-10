import { isBoolean, isFunction, isString, isNumber, isObject } from "./is";
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
        if(isFunction(__str__)){
          return __str__.apply(val);
        }
        return __str__.toString();
    }
  }
  return val.toString();
};


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
      let __int__ = Reflect.get(val, "__num__");
      if(isFunction(__int__)){
        return __int__.call();
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



export {
  noop,
  pass,
  str,
  int,
  exceptStringToRun,
  
}
