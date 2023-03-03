import { isBoolean, isFunction, isString, isNumber } from "./is";
import { InputTypeError, ValueError } from "./exceptions";

const noop = (...params:any)=>{}
const pass = (param?:string)=>{
  param?console.log(`${param}`):noop();
}

const str = (item: any):string => {
  if(item === undefined){
    return "undefined"
  }else if(item===null){
    return "null"
  }
  return item.toString()
}

const int = (item: string|number|boolean|undefined|null) => {
  if(isNumber(item)){
    if(isNaN(item)){return 0}
    else{
      return item
    }
  }
  else if(item === undefined){return 0}
  else if(item === null){return 0}
  else if(isBoolean(item)){
    return item===true?1:0;
  }else if (isString(item)){
    return parseInt(item);
  }
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



export {
  noop,
  pass,
  str,
  int,
  exceptStringToRun,
  
}
