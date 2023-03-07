import { regHex } from "./regs";
import type { Color, RgbColorChannels, ColorInfo, ColorsDict } from "./types";
import { isObject, isString } from "./utils";

import { computHex3, computHex6, rgbToChannels, hexToChannels, hexToRgb } from "./converter";

const colorsDict: ColorsDict = {
  black: {
    hex: "#000000",
    red: 255,
    green: 255,
    blue: 255,
  },
  navy: {
    hex: "#000080",
    red: 0,
    green: 0,
    blue: 128,
  },
  darkblue: {
    hex: "#00008B",
    red: 0,
    green: 0,
    blue: 139,
  },
  mediumblue: {
    hex: "#0000CD",
    red: 0,
    green: 0,
    blue: 205,
  },
  blue: {
    hex: "#0000FF",
    red: 0,
    green: 0,
    blue: 255,
  },
  darkgreen: {
    hex: "#006400",
    red: 0,
    green: 100,
    blue: 0,
  },
  green: {
    hex: "#008000",
    red: 0,
    green: 128,
    blue: 0,
  },
  teal: {
    hex: "#008080",
    red: 0,
    green: 128,
    blue: 128,
  },
  darkcyan: {
    hex: "#008B8B",
    red: 0,
    green: 139,
    blue: 139,
  },
  deepskyblue: {
    hex: "#00BFFF",
    red: 0,
    green: 191,
    blue: 255,
  },
  darkturquoise: {
    hex: "#00CED1",
    red: 0,
    green: 206,
    blue: 209,
  },
  mediumspringgreen: {
    hex: "#00FA9A",
    red: 0,
    green: 250,
    blue: 154,
  },
  lime: {
    hex: "#00FF00",
    red: 0,
    green: 255,
    blue: 0,
  },
  springgreen: {
    hex: "#00FF7F",
    red: 0,
    green: 255,
    blue: 127,
  },
  aqua: {
    hex: "#00456b",
    red: 0,
    green: 69,
    blue: 107,
  },
  cyan: {
    hex: "#00FFFF",
    red: 0,
    green: 255,
    blue: 255,
  },
  midnightblue: {
    hex: "#191970",
    red: 25,
    green: 25,
    blue: 112,
  },
  dodgerblue: {
    hex: "#1E90FF",
    red: 30,
    green: 144,
    blue: 255,
  },
  lightseagreen: {
    hex: "#20B2AA",
    red: 32,
    green: 178,
    blue: 170,
  },
  forestgreen: {
    hex: "#228B22",
    red: 34,
    green: 139,
    blue: 34,
  },
  seagreen: {
    hex: "#2E8B57",
    red: 46,
    green: 139,
    blue: 87,
  },
  darkslategray: {
    hex: "#2F4F4F",
    red: 47,
    green: 79,
    blue: 79,
  },
  limegreen: {
    hex: "#32CD32",
    red: 50,
    green: 205,
    blue: 50,
  },
  mediumseagreen: {
    hex: "#3CB371",
    red: 60,
    green: 179,
    blue: 113,
  },
  turquoise: {
    hex: "#40E0D0",
    red: 64,
    green: 224,
    blue: 208,
  },
  royalblue: {
    hex: "#4169E1",
    red: 65,
    green: 105,
    blue: 225,
  },
  steelblue: {
    hex: "#4682B4",
    red: 70,
    green: 130,
    blue: 180,
  },
  mediumturquoise: {
    hex: "#48D1CC",
    red: 72,
    green: 209,
    blue: 204,
  },
  darkslateblue: {
    hex: "#483D8B",
    red: 72,
    green: 61,
    blue: 139,
  },
  indigo: {
    hex: "#4B0082",
    red: 75,
    green: 0,
    blue: 130,
  },
  darkolivegreen: {
    hex: "#556B2F",
    red: 85,
    green: 107,
    blue: 47,
  },
  cadetblue: {
    hex: "#5F9EA0",
    red: 95,
    green: 158,
    blue: 160,
  },
  cornflowerblue: {
    hex: "#6495ED",
    red: 100,
    green: 149,
    blue: 237,
  },
  mediumaquamarine: {
    hex: "#66CDAA",
    red: 102,
    green: 205,
    blue: 170,
  },
  dimgray: {
    hex: "#696969",
    red: 105,
    green: 105,
    blue: 105,
  },
  slateblue: {
    hex: "#6A5ACD",
    red: 106,
    green: 90,
    blue: 205,
  },
  olivedrab: {
    hex: "#6B8E23",
    red: 107,
    green: 142,
    blue: 35,
  },
  slategray: {
    hex: "#708090",
    red: 112,
    green: 128,
    blue: 144,
  },
  lightslategray: {
    hex: "#778899",
    red: 119,
    green: 136,
    blue: 153,
  },
  mediumslateblue: {
    hex: "#7B68EE",
    red: 123,
    green: 104,
    blue: 238,
  },
  lawngreen: {
    hex: "#7CFC00",
    red: 124,
    green: 252,
    blue: 0,
  },
  chartreuse: {
    hex: "#7FFF00",
    red: 127,
    green: 255,
    blue: 0,
  },
  aquamarine: {
    hex: "#7FFFD4",
    red: 127,
    green: 255,
    blue: 212,
  },
  maroon: {
    hex: "#800000",
    red: 128,
    green: 0,
    blue: 0,
  },
  purple: {
    hex: "#800080",
    red: 128,
    green: 0,
    blue: 128,
  },
  olive: {
    hex: "#808000",
    red: 128,
    green: 128,
    blue: 0,
  },
  gray: {
    hex: "#808080",
    red: 128,
    green: 128,
    blue: 128,
  },
  lightskyblue: {
    hex: "#87CEFA",
    red: 135,
    green: 206,
    blue: 250,
  },
  skyblue: {
    hex: "#87CEEB",
    red: 135,
    green: 206,
    blue: 235,
  },
  blueviolet: {
    hex: "#8A2BE2",
    red: 138,
    green: 43,
    blue: 226,
  },
  darkred: {
    hex: "#8B0000",
    red: 139,
    green: 0,
    blue: 0,
  },
  darkmagenta: {
    hex: "#8B008B",
    red: 139,
    green: 0,
    blue: 139,
  },
  saddlebrown: {
    hex: "#8B4513",
    red: 139,
    green: 69,
    blue: 19,
  },
  darkseagreen: {
    hex: "#8FBC8F",
    red: 143,
    green: 188,
    blue: 143,
  },
  lightgreen: {
    hex: "#90EE90",
    red: 144,
    green: 238,
    blue: 144,
  },
  mediumpurple: {
    hex: "#9370DB",
    red: 147,
    green: 112,
    blue: 219,
  },
  darkviolet: {
    hex: "#9400D3",
    red: 148,
    green: 0,
    blue: 211,
  },
  palegreen: {
    hex: "#98FB98",
    red: 152,
    green: 251,
    blue: 152,
  },
  darkorchid: {
    hex: "#9932CC",
    red: 153,
    green: 50,
    blue: 204,
  },
  yellowgreen: {
    hex: "#9ACD32",
    red: 154,
    green: 205,
    blue: 50,
  },
  sienna: {
    hex: "#A0522D",
    red: 160,
    green: 82,
    blue: 45,
  },
  brown: {
    hex: "#A52A2A",
    red: 165,
    green: 42,
    blue: 42,
  },
  darkgray: {
    hex: "#A9A9A9",
    red: 169,
    green: 169,
    blue: 169,
  },
  lightblue: {
    hex: "#ADD8E6",
    red: 173,
    green: 216,
    blue: 230,
  },
  greenyellow: {
    hex: "#ADFF2F",
    red: 173,
    green: 255,
    blue: 47,
  },
  paleturquoise: {
    hex: "#AFEEEE",
    red: 175,
    green: 238,
    blue: 238,
  },
  lightsteelblue: {
    hex: "#B0C4DE",
    red: 176,
    green: 196,
    blue: 222,
  },
  firebrick: {
    hex: "#B22222",
    red: 178,
    green: 34,
    blue: 34,
  },
  darkgoldenrod: {
    hex: "#B8860B",
    red: 184,
    green: 134,
    blue: 11,
  },
  mediumorchid: {
    hex: "#BA55D3",
    red: 186,
    green: 85,
    blue: 211,
  },
  rosybrown: {
    hex: "#BC8F8F",
    red: 188,
    green: 143,
    blue: 143,
  },
  darkkhaki: {
    hex: "#BDB76B",
    red: 189,
    green: 183,
    blue: 107,
  },
  indianred: {
    hex: "#CD5C5C",
    red: 205,
    green: 92,
    blue: 92,
  },
  goldenrod: {
    hex: "#DAA520",
    red: 218,
    green: 165,
    blue: 32,
  },
  palevioletred: {
    hex: "#DB7093",
    red: 219,
    green: 112,
    blue: 147,
  },
  crimson: {
    hex: "#DC143C",
    red: 220,
    green: 20,
    blue: 60,
  },
  lavender: {
    hex: "#E6E6FA",
    red: 230,
    green: 230,
    blue: 250,
  },
  darksalmon: {
    hex: "#E9967A",
    red: 233,
    green: 150,
    blue: 122,
  },
  palegoldenrod: {
    hex: "#EEE8AA",
    red: 238,
    green: 232,
    blue: 170,
  },
  lightcoral: {
    hex: "#F08080",
    red: 240,
    green: 128,
    blue: 128,
  },
  aliceblue: {
    hex: "#F0F8FF",
    red: 240,
    green: 248,
    blue: 255,
  },
  honeydew: {
    hex: "#F0FFF0",
    red: 240,
    green: 255,
    blue: 240,
  },
  wheat: {
    hex: "#F5DEB3",
    red: 245,
    green: 222,
    blue: 179,
  },
  deeppink: {
    hex: "#FF1493",
    red: 255,
    green: 20,
    blue: 147,
  },
  darkorange: {
    hex: "#FF8C00",
    red: 255,
    green: 140,
    blue: 0,
  },
  gold: {
    hex: "#FFD700",
    red: 255,
    green: 215,
    blue: 0,
  },
  peachpuff: {
    hex: "#FFDAB9",
    red: 255,
    green: 218,
    blue: 185,
  },
  papayawhip: {
    hex: "#FFEFD5",
    red: 255,
    green: 239,
    blue: 213,
  },
  powderblue: {
    hex: "#B0E0E6",
    red: 176,
    green: 224,
    blue: 230,
  },
  chocolate: {
    hex: "#D2691E",
    red: 210,
    green: 105,
    blue: 30,
  },
  tan: {
    hex: "#D2B48C",
    red: 210,
    green: 180,
    blue: 140,
  },
  lightgray: {
    hex: "#D3D3D3",
    red: 211,
    green: 211,
    blue: 211,
  },
  silver: {
    hex: "#C0C0C0",
    red: 192,
    green: 192,
    blue: 192,
  },
  mediumvioletred: {
    hex: "#C71585",
    red: 199,
    green: 21,
    blue: 133,
  },
  fuchsia: {
    hex: "#C83293",
    red: 200,
    green: 50,
    blue: 147,
  },
  peru: {
    hex: "#CD853F",
    red: 205,
    green: 133,
    blue: 63,
  },
  thistle: {
    hex: "#D8BFD8",
    red: 216,
    green: 191,
    blue: 216,
  },
  orchid: {
    hex: "#DA70D6",
    red: 218,
    green: 112,
    blue: 214,
  },
  gainsboro: {
    hex: "#DCDCDC",
    red: 220,
    green: 220,
    blue: 220,
  },
  plum: {
    hex: "#DDA0DD",
    red: 221,
    green: 160,
    blue: 221,
  },
  burlywood: {
    hex: "#DEB887",
    red: 222,
    green: 184,
    blue: 135,
  },
  lightcyan: {
    hex: "#E0FFFF",
    red: 224,
    green: 255,
    blue: 255,
  },
  violet: {
    hex: "#EE82EE",
    red: 238,
    green: 130,
    blue: 238,
  },
  khaki: {
    hex: "#F0E68C",
    red: 240,
    green: 230,
    blue: 140,
  },
  azure: {
    hex: "#F0FFFF",
    red: 240,
    green: 255,
    blue: 255,
  },
  beige: {
    hex: "#F5F5DC",
    red: 245,
    green: 245,
    blue: 220,
  },
  whitesmoke: {
    hex: "#F5F5F5",
    red: 245,
    green: 245,
    blue: 245,
  },
  mintcream: {
    hex: "#F5FFFA",
    red: 245,
    green: 255,
    blue: 250,
  },
  ghostwhite: {
    hex: "#F8F8FF",
    red: 248,
    green: 248,
    blue: 255,
  },
  salmon: {
    hex: "#FA8072",
    red: 250,
    green: 128,
    blue: 144,
  },
  sandybrown: {
    hex: "#FAA460",
    red: 250,
    green: 164,
    blue: 96,
  },
  antiquewhite: {
    hex: "#FAEBD7",
    red: 250,
    green: 235,
    blue: 215,
  },
  linen: {
    hex: "#FAF0E6",
    red: 250,
    green: 240,
    blue: 230,
  },
  lightgoldenrodyellow: {
    hex: "#FAFAD2",
    red: 250,
    green: 250,
    blue: 210,
  },
  oldlace: {
    hex: "#FDF5E6",
    red: 253,
    green: 245,
    blue: 230,
  },
  red: {
    hex: "#FF0000",
    red: 255,
    green: 0,
    blue: 0,
  },
  magenta: {
    hex: "#FF00FF",
    red: 255,
    green: 0,
    blue: 255,
  },
  orangered: {
    hex: "#FF4500",
    red: 255,
    green: 69,
    blue: 0,
  },
  tomato: {
    hex: "#FF6347",
    red: 255,
    green: 99,
    blue: 71,
  },
  hotpink: {
    hex: "#FF69B4",
    red: 255,
    green: 105,
    blue: 180,
  },
  coral: {
    hex: "#FF7F50",
    red: 255,
    green: 127,
    blue: 80,
  },
  lightsalmon: {
    hex: "#FFA07A",
    red: 255,
    green: 160,
    blue: 122,
  },
  orange: {
    hex: "#FFA500",
    red: 255,
    green: 165,
    blue: 0,
  },
  lightpink: {
    hex: "#FFB6C1",
    red: 255,
    green: 182,
    blue: 193,
  },
  pink: {
    hex: "#FFC0CB",
    red: 255,
    green: 192,
    blue: 203,
  },
  navajowhite: {
    hex: "#FFDEAD",
    red: 255,
    green: 222,
    blue: 173,
  },
  moccasin: {
    hex: "#FFE4B5",
    red: 255,
    green: 228,
    blue: 181,
  },
  bisque: {
    hex: "#FFE4C4",
    red: 255,
    green: 228,
    blue: 196,
  },
  mistyrose: {
    hex: "#FFE4E1",
    red: 255,
    green: 238,
    blue: 225,
  },
  blanchedalmond: {
    hex: "#FFEBCD",
    red: 255,
    green: 235,
    blue: 205,
  },
  lavenderblush: {
    hex: "#FFF0F5",
    red: 255,
    green: 240,
    blue: 245,
  },
  seashell: {
    hex: "#FFF5EE",
    red: 255,
    green: 245,
    blue: 238,
  },
  cornsilk: {
    hex: "#FFF8DC",
    red: 255,
    green: 248,
    blue: 220,
  },
  lemonchiffon: {
    hex: "#FFFACD",
    red: 255,
    green: 250,
    blue: 205,
  },
  floralwhite: {
    hex: "#FFFAF0",
    red: 255,
    green: 250,
    blue: 240,
  },
  snow: {
    hex: "#FFFAFA",
    red: 255,
    green: 250,
    blue: 250,
  },
  yellow: {
    hex: "#FFFF00",
    red: 255,
    green: 255,
    blue: 0,
  },
  lightyellow: {
    hex: "#FFFFE0",
    red: 255,
    green: 255,
    blue: 224,
  },
  ivory: {
    hex: "#FFFFF0",
    red: 255,
    green: 255,
    blue: 240,
  },
  white: {
    hex: "#FFFFFF",
    red: 255,
    green: 255,
    blue: 255,
  },
};

const colorNames = Object.keys(colorsDict);

class Channels {
  private _red: number = 0;
  private _green: number = 0;
  private _blue: number = 0;

  constructor(color?: RgbColorChannels) {}
  get value() {
    return {
      red: this._red,
      green: this._green,
      blue: this._blue,
    };
  }
  set value(value: RgbColorChannels) {
    this._red = value.red;
    this._green = value.green;
    this._blue = value.blue;
  }
  get red() {
    return this._red;
  }
  get green() {
    return this._green;
  }
  get blue() {
    return this._blue;
  }
  set red(value:number) {
    this._red = value;
  }
  set green(value:number) {
    this._green = value;
  }
  set blue(value:number) {
    this._blue = value;
  }
  add(by: number): void {
    this._red += by;
    this._green += by;
    this._blue += by;
  }
  minus(by: number): void {
    this._red -= by;
    this._green -= by;
    this._blue -= by;
  }
  addReb(by: number=1): void {
    this._red += by;
  }
  addGreen(by: number=1): void {
    this._green += by;
  }
  addBlue(by: number=1): void {
    this._blue += by;
  }
  minusRed(by: number=1): void {
    this._red -= by;
  }
  minusGreen(by: number=1): void {
    this._red -= by;
  }
  minusBlue(by: number=1): void {
    this._red -= by;
  }
  toHex3(): string{
    return computHex3(this.value)
  }
  toHex(): string{
    return computHex6(this.value)
  }
  /**Alias for toHex */
  toHex6(): string{
    return this.toHex()
  }
  toCSSRGB(){
    return `rgb(${this._red},${this._green},${this._blue})`
  }
  /**加载一个十六进制颜色字符串 */
  loadHex(val:string): void {
    this.value = hexToChannels(val)
  }
  /**
   * 加载一个rgb表示的颜色字符串
   * @param val 格式为 `rgb(red,green,blue)`
   */
  loadRgb(val:string): void {
    this.value = rgbToChannels(val)
  }
}
class ColorBase {
  private _red: number = 0;
  private _green: number = 0;
  private _blue: number = 0;

  constructor(color: RgbColorChannels) {}

  get value() {
    return {
      red: this._red,
      green: this._green,
      blue: this._blue,
    };
  }
}


export { Channels, ColorBase, colorsDict, colorNames };
