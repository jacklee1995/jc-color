import { regHex } from "./regs";
import { isNumber, isInt, isString } from "./utils";

function isHexColor(val: string|number): boolean {
  const str = val.toString();
  return regHex.test(str);
}

function isRgbColor(val: string): boolean {
  
  return true
}

export {
  isHexColor,
  isRgbColor
}