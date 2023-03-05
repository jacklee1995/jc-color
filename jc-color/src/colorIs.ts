import { regHex, regHex3, regHex6, regRgb } from "./regs";
import { isNumber, isInt, isString } from "./utils";

function isHexColor(val: string|number): boolean {
  const str = val.toString().trim();
  return regHex.test(str);
}

function isHex3Color(val: string|number): boolean {
  const str = val.toString().trim();
  return regHex3.test(str);
}

function isHex6Color(val: string|number): boolean {
  const str = val.toString().trim();
  return regHex6.test(str);
}

function isRgbColor(val: string): boolean {
  const str = val.toString().trim();
  return regRgb.test(str);
}

export {
  isHexColor,
  isHex3Color,
  isHex6Color,
  isRgbColor
}