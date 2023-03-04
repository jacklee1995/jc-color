const regHexGeneral = /(^#[0-9A-F]{3,4,6,8}$)/i;
// 不包含透明度的十六进制颜色
const regHex3 = /^#[0-9A-F]{3}$/i;
const regHex6 = /^#[0-9A-F]{6}$/i;
const regHex = /(^#[0-9A-F]{3}$)|(^#[0-9A-F]{6}$)/i;
// 包含透明度的十六进制颜色
const regHex4 = /^#[0-9A-F]{4}$/i;
const regHex8 = /^#[0-9A-F]{8}$/i;

const regRgb = /^rgb\(\s*[0-2]?[0-9]?[0-9]\s*\,\s*[0-2]?[0-9]?[0-9]\s*\,\s*[0-2]?[0-9]?[0-9]\s*\)/i;


export {
  regHexGeneral,
  regHex3,
  regHex6,
  regHex4,
  regHex8,
  regHex,
  regRgb
}