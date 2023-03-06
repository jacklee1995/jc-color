import { TextUnit } from "./console";
import { ColorTypeCode } from "./enums";

declare type DisplatMode = 
  // | 'remove_all'       // 清除所有样式
  // | 'remove_bold'      // 取消粗体
  // | 'remove_underline' // 取消下划线
  // | 'remove_glimmer'   // 取消闪烁
  // | 'remove_reverse'   // 取消反向
  // | 'remove_hidden'    // 取消隐藏
  // | 'remove_delete'    // 取消删除
  // | 'remove_overline'  // 取消上划线
  | 'bold'             // 亮白色，粗体
  | 'dark'             // 暗色
  | 'italic'           // 斜体
  | 'underline'        // 下划线
  | 'glimmer'          // 闪烁
  | 'reverse'          // 反向
  | 'hidden'           // 隐藏
  | 'delete'           // 删除
  | 'underline_double' // 双下划线
//  | 'black'            // 黑色
//  | 'red'              // 红色
//  | 'green'            // 绿色
//  | 'yellow'           // 黄色
//  | 'blue'             // 蓝色
//  | 'magenta'          // 品红
//  | 'cyan'             // 青色
//  | 'white'            // 白色
//  | 'blackBG'          // 背景色为黑色
//  | 'redBG'            // 背景色为红色
//  | 'greenBG'          // 背景色为绿色
//  | 'yellowBG'         // 背景色为黄色
//  | 'blueBG'           // 背景色为蓝色
//  | 'magentaBG'        // 背景色为品红
//  | 'cyanBG'           // 背景色为青色
//  | 'whiteBG'          // 背景色为白色
  | 'overline'            // 上划线
  | 'clear'               // 清屏

declare type ColorInfo = { hex: string; red: number; green: number; blue: number }

declare type ColorNames = 
 | "black"
 | "navy"
 | "darkblue"
 | "mediumblue"
 | "blue"
 | "darkgreen"
 | "green"
 | "teal"
 | "darkcyan"
 | "deepskyblue"
 | "darkturquoise"
 | "mediumspringgreen"
 | "lime"
 | "springgreen"
 | "aqua"
 | "cyan"
 | "midnightblue"
 | "dodgerblue"
 | "lightseagreen"
 | "forestgreen"
 | "seagreen"
 | "darkslategray"
 | "limegreen"
 | "mediumseagreen"
 | "turquoise"
 | "royalblue"
 | "steelblue"
 | "mediumturquoise"
 | "darkslateblue"
 | "indigo"
 | "darkolivegreen"
 | "cadetblue"
 | "cornflowerblue"
 | "mediumaquamarine"
 | "dimgray"
 | "slateblue"
 | "olivedrab"
 | "slategray"
 | "lightslategray"
 | "mediumslateblue"
 | "lawngreen"
 | "chartreuse"
 | "aquamarine"
 | "maroon"
 | "purple"
 | "olive"
 | "gray"
 | "lightskyblue"
 | "skyblue"
 | "blueviolet"
 | "darkred"
 | "darkmagenta"
 | "saddlebrown"
 | "darkseagreen"
 | "lightgreen"
 | "mediumpurple"
 | "darkviolet"
 | "palegreen"
 | "darkorchid"
 | "yellowgreen"
 | "sienna"
 | "brown"
 | "darkgray"
 | "lightblue"
 | "greenyellow"
 | "paleturquoise"
 | "lightsteelblue"
 | "firebrick"
 | "darkgoldenrod"
 | "mediumorchid"
 | "rosybrown"
 | "darkkhaki"
 | "indianred"
 | "goldenrod"
 | "palevioletred"
 | "crimson"
 | "lavender"
 | "darksalmon"
 | "palegoldenrod"
 | "lightcoral"
 | "aliceblue"
 | "honeydew"
 | "wheat"
 | "deeppink"
 | "darkorange"
 | "gold"
 | "peachpuff"
 | "papayawhip"
 | "powderblue"
 | "chocolate"
 | "tan"
 | "lightgray"
 | "silver"
 | "mediumvioletred"
 | "fuchsia"
 | "peru"
 | "thistle"
 | "orchid"
 | "gainsboro"
 | "plum"
 | "burlywood"
 | "lightcyan"
 | "violet"
 | "khaki"
 | "azure"
 | "beige"
 | "whitesmoke"
 | "mintcream"
 | "ghostwhite"
 | "salmon"
 | "sandybrown"
 | "antiquewhite"
 | "linen"
 | "lightgoldenrodyellow"
 | "oldlace"
 | "red"
 | "magenta"
 | "orangered"
 | "tomato"
 | "hotpink"
 | "coral"
 | "lightsalmon"
 | "orange"
 | "lightpink"
 | "pink"
 | "navajowhite"
 | "moccasin"
 | "bisque"
 | "mistyrose"
 | "blanchedalmond"
 | "lavenderblush"
 | "seashell"
 | "cornsilk"
 | "lemonchiffon"
 | "floralwhite"
 | "snow"
 | "yellow"
 | "lightyellow"
 | "ivory"
 | "white"
 
declare type ColorChannels = Omit<ColorInfo, 'hex'>

declare type Color = ColorNames | ColorChannels

declare type ColorsDict = Record<ColorNames, ColorInfo>
/**
 * 0 - 终端默认设置;
 * 1 - 高亮显示;
 * 4 - 使用下划线;
 * 5 - 闪烁;
 * 7 - 反白显示;
 * 8 - 不可见;
 */


declare type RGBColor = {
  red: number;
  green: number;
  blue: number;
  mode: number;
  typecode: ColorTypeCode;
};

declare type ColorTextUnit = ({text: string, bgColor?: ColorChannels|string, foreColor?: ColorChannels|string} | TextUnit)

export { DisplatMode, ColorInfo, ColorNames, ColorChannels, Color, ColorsDict, ColorTypeCode, RGBColor, ColorTextUnit };
