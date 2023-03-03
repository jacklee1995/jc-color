const regHexGeneral = /(^#[0-9A-F]{1-6}$)/i;
const regHex3 = /^#[0-9A-F]{3}$/i;
const regHex6 = /^#[0-9A-F]{6}$/i;
const regHex = /(^#[0-9A-F]{3}$)|(^#[0-9A-F]{6}$)/i;

const regRgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i

export {
  regHexGeneral,
  regHex3,
  regHex6,
  regHex,
  regRgb
}