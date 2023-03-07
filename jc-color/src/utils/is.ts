const _is = (val: unknown, type: string) => {
  return Object.prototype.toString.call(val) === `[object ${type}]`;
};

const isBoolean = (val: unknown): val is boolean => {
  return _is(val, "Boolean");
};

const isString = (val: unknown): val is string => {
  return _is(val, "String");
};

/**判断是否是数字，不包括字符串等表示的数字 */
const isNumber = (val: unknown): val is number => {
  return _is(val, "Number");
}

/**判断一个数字是否是奇数 */
const isOddNumber = (val:number) => {
  return val%2!==0
}

/**判断一个数字是否是偶数数 */
const isEvenNumber = (val:number) => {
  return val%2===0
}

const isNumberStr = (val: string):boolean => {
  return /^\d*\.?\d*$/.test(val)
}

const isInt = (val: unknown): boolean => {
  if (isNumber(val)) {
    if (/^\d*\d$/.test(val.toString())) {
      return true;
    }
  }else if(isString(val) && isNumberStr(val)){
    return /^\d*\d$/.test(val)
  }
  return false;
};

const isObject = (val: any): val is Record<any, any> => {
  return val !== null && _is(val, "Object");
};

const isArray = (val: any): val is Array<any> => {
  return val && Array.isArray(val);
};

const isFunction = (val: unknown): val is Function => {
  return typeof val === "function";
};

const isMap = (val: unknown): val is Map<any, any> => {
  return _is(val, "Map");
};

const isRegExp = (val: unknown): val is RegExp => {
  return _is(val, "RegExp");
};

function isPromise<T = any>(val: unknown): val is Promise<T> {
  return (
    _is(val, "Promise") &&
    isObject(val) &&
    isFunction(val.then) &&
    isFunction(val.catch)
  );
}

interface PromiseLike<T> {
  then<TResult1 = T, TResult2 = never>(
    onfulfilled?:
      | ((value: T) => TResult1 | PromiseLike<TResult1>)
      | undefined
      | null,
    onrejected?:
      | ((reason: any) => TResult2 | PromiseLike<TResult2>)
      | undefined
      | null
  ): PromiseLike<TResult1 | TResult2>;
}

function isPromiseLike<T>(val: any): val is PromiseLike<T> {
  return (
    (val !== null && typeof val === "object") ||
    (typeof val === "function" && typeof val.then === "function")
  );
}

const isUrl = (path: string): boolean => {
  const reg = /^http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/;
  return reg.test(path);
};

export {
  isBoolean,
  isString,
  isNumber,
  isOddNumber,
  isEvenNumber,
  isNumberStr,
  isInt,
  isObject,
  isArray,
  isFunction,
  isMap,
  isRegExp,
  isPromise,
  isPromiseLike,
  isUrl,
};
