import { TextUnit } from "..";
import { ColorTypeCode } from "./enums";

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

declare type ColorInfo = { hex: string; red: number; green: number; blue: number }


 
/**rgba ?????? */
declare type RgbaChannels = { red: number; green: number; blue: number, a:number }
/**rgb ?????? */
declare type RgbColorChannels = Omit<RgbaChannels, 'a'>

declare type Color = ColorNames | RgbColorChannels

declare type ColorsDict = Record<ColorNames, ColorInfo>
/**
 * 0 - ??????????????????;
 * 1 - ????????????;
 * 4 - ???????????????;
 * 5 - ??????;
 * 7 - ????????????;
 * 8 - ?????????;
 */


declare type RGBColor = {
  red: number;
  green: number;
  blue: number;
  mode: number;
  typecode: ColorTypeCode;
};

declare type ColorTextUnit = ({text: string, bgColor?: RgbColorChannels|string, foreColor?: RgbColorChannels|string} | TextUnit)


export type {
  ColorNames,ColorInfo,RgbaChannels,RgbColorChannels,Color,ColorsDict,ColorTextUnit,RGBColor
}