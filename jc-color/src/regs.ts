const regHexGeneral = /(^#[0-9A-F]{3,4,6,8}$)/i;
// 不包含透明度的十六进制颜色
const regHex3 = /^#?[0-9A-F]{3}$/i;
const regHex6 = /^#?[0-9A-F]{6}$/i;
const regHex = /^#([0-9a-fA-F]{3}){1,2}$/i;
// 包含透明度的十六进制颜色
const regHex4 = /^#?[0-9A-F]{4}$/i;
const regHex8 = /^#?[0-9A-F]{8}$/i;

// rgb 颜色
// 如果不管空格，可以改成 /^rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)$/i
const regRgb = /^rgb\(\s*[0-2]?[0-9]?[0-9]\s*\,\s*[0-2]?[0-9]?[0-9]\s*\,\s*[0-2]?[0-9]?[0-9]\s*\)/i;
const regRgba = /^rgba\((\d{1,3}),(\d{1,3}),(\d{1,3}),(\d?\.?\d+)\)$/i;

// hsl 颜色
const regHsl = /^hsl\(\s*\d+(?:\.\d+)?\s*,\s*\d+%?\s*,\s*\d+%?\s*\)$/i; 
const regHsla = /^hsla\((\d{1,3}),(\d{1,3})%,(\d{1,3})%,(\d?\.?\d+)\)$/i; 

export {
  regHexGeneral,
  regHex3,
  regHex6,
  regHex4,
  regHex8,
  regHex,
  regRgb,
  regRgba,
  regHsl,
  regHsla
}