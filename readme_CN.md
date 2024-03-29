# jc-color

<fieldset>
  <legend>关于 jc-color...</legend>
  <p><b>作者</b> : <a href="https://blog.csdn.net/qq_28550263?spm=1010.2135.3001.5343"><cite>李俊才 </cite></a></p>
  <p><b>邮箱</b> : <a href="mailto:291148484@163.com"><cite>291148484@163.com</cite></a></p>
  <p><b>版本</b> : <a>v0.0.6</a></p>
  <p><b>home</b> : <a href="http://thispage.tech:9680/jclee1995/jc-color">http://thispage.tech:9680/jclee1995/jc-color</a></p>
  <p><b>gitee</b> : <a href="https://gitee.com/jacklee1995/jc-color">https://gitee.com/jacklee1995/jc-color</a></p>
  <p><b>github</b> : <a href="https://github.com/jacklee1995/jc-color">https://github.com/jacklee1995/jc-color</a></p>

<b>简介</b> :  <p> jc-color 是一个 JavaScript/NodeJS 颜色工具，可以用于 <b>颜色类型转换</b>、<b>调色</b>、<b>控制台输出</b>。它不仅可以用于 <b>浏览器</b>，还可以用于  <b>NodeJS</b>。</p>
</fieldset><br>

中文 | [English](/readme.md "Click to jump to English document.")


**特征**
- **真彩色/256色** 支持；
- **跨运行时**，可以在浏览器、NodeJS运行时中运行，且效果比较统一；
- **无依赖模块**，不需要任何其它模块，可以完全独立使用。意味着你可以在无网络环境复制单个模块进行安装，而不要考虑层层依赖；
- **全面的预定义颜色**，囊括了全部一百四十多个CSS颜色名。这些颜色名不但可以作为表示颜色的值传给文本对象，也可以直接以将他们作为函数名来创建彩色单元；请参考[附录](#f)和WS3文档[《命名颜色》](https://drafts.csswg.org/css-color/#named-colors)、[《定义的命名颜色》](https://www.w3.org/TR/SVG11/types.html#ColorKeywords)
- **功能全面**，弥补了 chalk 模块在浏览器环境中无法使用 overline，在NodeJS中无法使用闪烁，不具备渐变色、反转色、反色输出功能。相对于 chalk 只能输出文本，jc-color 本身还是一个颜色处理模块，具备各种颜色的计算和处理函数，包括调色、颜色生成等等。在开发时，你不仅可以使用它在辅助进行颜色计算，还可以在终端边对某些效果预览。

> 本模块的基础是颜色处理与转换，可用于需要通过 JavaScript 来处理颜色的应用场景。虽然很多功能已经提供，但目前文档部分仍然在努力完善中。

<br>

## 1.安装

### 使用 npm 来安装

```shell
# use npm
npm install jc-color
# use yarn
yarn add jc-color
# use pnpm
pnpm install jc-color
```

## 2. 快速开始

### 2.1 颜色转换工具



这些转换器模块允许您在不同颜色值格式之间进行转换。例如，您可以将 RGB 颜色值转换为 ANSI 颜色值，将十六进制颜色值转换为 RGB 颜色值，将 RGB 颜色值转换为 HSL 颜色值等。


#### hex3ToChannels, hex6ToChannels, hexToChannels

这些函数用于将 3 位或 6 位十六进制颜色字符串、hsl颜色字符串转换为 RGB 通道。

```ts
import { hex3ToChannels, hex6ToChannels, hexToChannels, hslToRgbChannels } from 'jc-color';

const hex3 = '#f0c';
const hex6 = '#ff00cc';
const hsl = 'hsl(300, 100%, 50%)';

console.log(hex3ToChannels(hex3)); // { red: 255, green: 0, blue: 204 }
console.log(hex6ToChannels(hex6)); // { red: 255, green: 0, blue: 204 }
console.log(hexToChannels(hex3));  // { red: 255, green: 0, blue: 204 }
console.log(hslToRgbChannels(hsl)); // { red: 255, green: 0, blue: 255 }
```

#### rgbToChannels

这个函数将 RGB 颜色字符串转换为 RGB 通道。

```ts
import { rgbToChannels } from 'jc-color';

const rgb = 'rgb(255, 0, 204)';
console.log(rgbToChannels(rgb));  // { red: 255, green: 0, blue: 204 }
```

#### hslToChannels

这个函数将 HSL 颜色字符串转换为 HSL 通道。

```ts
import { hslToChannels } from 'jc-color';

const hsl = 'hsl(300, 100%, 50%)';
const hslChannels = hslToChannels(hsl); 
console.log(hslChannels);       // { red: 255, green: 0, blue: 255 }
```

#### channelsToHex

这个函数将 RGB 通道转换为 6 位十六进制颜色字符串。

```ts
import { channelsToHex } from 'jc-color';

const rgbChannels = { red: 255, green: 0, blue: 204 };
const hex = channelsToHex(rgbChannels);
console.log(hex);      // #ff00cc
```

#### rgbToHex

这个函数将 RGB 颜色字符串转换为 6 位十六进制颜色字符串。

```ts
import { rgbToHex } from 'jc-color';

const rgb = 'rgb(255, 0, 255)';
const hex = rgbToHex(rgb);
console.log(hex);      // #ff00ff
```


#### hexToRgb

这个函数将 6 位十六进制颜色字符串转换为 RGB 颜色字符串。

```ts
import { hexToRgb } from 'jc-color';

const hex1 = '#ff00cc';
const rgb1 = hexToRgb(hex1); 
console.log(rgb1);        // rgb(255,0,204)

const hex2 = '#ff00ff';
const rgb2 = hexToRgb(hex2); 
console.log(rgb2);        // rgb(255,0,255)
```


####  hslToHex

这个函数将 HSL 颜色字符串转换为 6 位十六进制颜色字符串。

```ts
import { hslToHex } from 'jc-color';
const hsl = 'hsl(300, 100%, 50%)';
const hex = hslToHex(hsl);
console.log(hex);  // #ff00ff
```

####  hexToHsl

这个函数将 6 位十六进制颜色字符串转换为 HSL 颜色字符串。

```ts
import { hexToHsl } from 'jc-color';
const hex = '#ff00cc';
const hsl = hexToHsl(hex);
console.log(hsl); // hsl(312, 100%, 50%)
```

#### channelsToHsl

这个函数将 RGB 通道转换为 HSL 通道。

```ts
import { channelsToHsl } from 'jc-color';
const rgbChannels = { red: 255, green: 0, blue: 204 };
const hslChannels = channelsToHsl(rgbChannels);
console.log(hslChannels); // hsl(312, 100%, 50%)
```

#### channelsToRgb

这个函数将 HSL 通道转换为 RGB 通道。

```ts
import { channelsToRgb } from 'jc-color';
const hslChannels = { red: 255, green: 0, blue: 204 };
const rgbChannels = channelsToRgb(hslChannels); 
console.log(rgbChannels);  // rgb(255,0,204)
```

#### hslToRgb

这个函数将 HSL 颜色字符串转换为 RGB 颜色字符串。

```ts
import { hslToRgb } from 'jc-color';
const hsl = 'hsl(300, 100%, 50%)';
const rgb = hslToRgb(hsl);
console.log(rgb); // rgb(255,0,255)
```



### 2.2 彩色终端工具


你可以依据下面的效果和代码，配合附录中的颜色表掌握在终端中的方法。

![1678271280478](image/readme_CN/1678271280478.gif)

```typescript
import { createUnit, createText, geadientText, blue, lime, crimson, firebrick, print } from 'jc-color'

print('--------------------------------------------------')
geadientText("你好呀！欢迎使用 JC Color！").underline().italic().print()
print('--------------------------------------------------')

geadientText("这是一款涵盖颜色计算、处理与终端输出的工具",["red", "blue","#EB6461","green","rgb(128, 80, 252)"]).underline_double().print()
geadientText("它同时兼容 NodeJS 与 Web 环境，在终端打印上的功能尤其丰富，并且没有任何模块依赖。",["#84FC2C","yellow"],["red", "blue","#EB6461","green"]).glimmer().print()

createText(
 "\n你可以使用",
  createUnit(" Hex、","#EB6461"),
  createUnit(" Rgb 来设置颜色、","rgb(62, 122, 234)"),
  " 具有 256色/真彩色 支持!",
  createUnit("\n这里包含了一百多个内置颜色名来设置你的颜色、","Yellow"),
  createUnit(" 可以使用高亮/加粗体、").bold(),
  createUnit(" 可以 暗体。").dark(),
  "\n还有 ",
  blue("斜体字、").orangeBg().italic(),
  createUnit(" 下划线、","tomato").underline(),
  createUnit(" 双下划线、","teal").underline_double(),
  lime("闪烁体（仅Node）、").bg("#cdcdcd").glimmer(),
).print()

crimson("\n你还可以使用").blueBg().print()
.reverse("反转色：前景色和背景色互换").print()

blue("\n以及反色：").redBg().print()
.inverseFore("包括前景色的反色").print().remove_inverseFore()
.inverseBg("和背景色的反色").print().remove_inverseFore()
.inverse("背景色和前景色同时反色").print()


geadientText("也可以生成颜色，制作渐变色、背景渐变色，并且在渐变色文本中应用各种效果！").print()

firebrick('\n尽情享用吧！')

```

这套代码不需要修改，可以直接使用于浏览器中：

![1678277687767](https://github.com/jacklee1995/jc-color/blob/master/image/readme_CN/1678277687767.png?raw=true)

当你通过颜色名创建颜色时，发现预置颜色名中的所有颜色均不满足你的要求，可以使用 `fr` 创建颜色：

```typescript
import { fr } from 'jc-color';

fr('some text.', '#D841B3').print();
fr('some text.','#D841B3').yellowBg().print();
fr('some text.', '#D841B3').bg('rgb(213,247,74)').print()
```

![1678272039676](https://github.com/jacklee1995/jc-color/blob/master/image/readme_CN/1678272039676.png?raw=true)

---

# 附录. 预定义颜色名对照表

为了方便使用，`jc-color` 已经预先定义好了一些常见的颜色名。这些颜色名与CSS定义的颜色总体一致。各颜色名与对应的值如下：

| 颜色名         | 十六进制颜色值 | 颜色展示                                                  |  | 颜色名               | 十六进制颜色值 | 颜色展示                                                  |
| :------------- | :------------- | :-------------------------------------------------------- | :- | :------------------- | :------------- | :-------------------------------------------------------- |
| black          | #000000        | <table><td bgcolor="#000000">`#000000`</td></table> |  | navy                 | #000080        | <table><td bgcolor="#000080">`#000080`</td></table> |
| darkblue       | #00008B        | <table><td bgcolor="#00008B">`#00008B`</td></table> |  | mediumblue           | #0000CD        | <table><td bgcolor="#0000CD">`#0000CD`</td></table> |
| blue           | #0000FF        | <table><td bgcolor="#0000FF">`#0000FF`</td></table> |  | darkgreen            | #006400        | <table><td bgcolor="#006400">`#006400`</td></table> |
| green          | #008000        | <table><td bgcolor="#008000">`#008000`</td></table> |  | teal                 | #008080        | <table><td bgcolor="#008080">`#008080`</td></table> |
| darkcyan       | #008B8B        | <table><td bgcolor="#008B8B">`#008B8B`</td></table> |  | deepskyblue          | #00BFFF        | <table><td bgcolor="#00BFFF">`#00BFFF`</td></table> |
| darkturquoise  | #00CED1        | <table><td bgcolor="#00CED1">`#00CED1`</td></table> |  | mediumspringgreen    | #00FA9A        | <table><td bgcolor="#00FA9A">`#00FA9A`</td></table> |
| lime           | #00FF00        | <table><td bgcolor="#00FF00">`#00FF00`</td></table> |  | springgreen          | #00FF7F        | <table><td bgcolor="#00FF7F">`#00FF7F`</td></table> |
| aqua           | #00FFFF        | <table><td bgcolor="#00FFFF">`#00FFFF`</td></table> |  | cyan                 | #00FFFF        | <table><td bgcolor="#00FFFF">`#00FFFF`</td></table> |
| midnightblue   | #191970        | <table><td bgcolor="#191970">`#191970`</td></table> |  | dodgerblue           | #1E90FF        | <table><td bgcolor="#1E90FF">`#1E90FF`</td></table> |
| lightseagreen  | #20B2AA        | <table><td bgcolor="#20B2AA">`#20B2AA`</td></table> |  | forestgreen          | #228B22        | <table><td bgcolor="#228B22">`#228B22`</td></table> |
| seagreen       | #2E8B57        | <table><td bgcolor="#2E8B57">`#2E8B57`</td></table> |  | darkslategray        | #2F4F4F        | <table><td bgcolor="#2F4F4F">`#2F4F4F`</td></table> |
| limegreen      | #32CD32        | <table><td bgcolor="#32CD32">`#32CD32`</td></table> |  | mediumseagreen       | #3CB371        | <table><td bgcolor="#3CB371">`#3CB371`</td></table> |
| turquoise      | #40E0D0        | <table><td bgcolor="#40E0D0">`#40E0D0`</td></table> |  | royalblue            | #4169E1        | <table><td bgcolor="#4169E1">`#4169E1`</td></table> |
| steelblue      | #4682B4        | <table><td bgcolor="#4682B4">`#4682B4`</td></table> |  | mediumturquoise      | #48D1CC        | <table><td bgcolor="#48D1CC">`#48D1CC`</td></table> |
| darkslateblue  | #483D8B        | <table><td bgcolor="#483D8B">`#483D8B`</td></table> |  | indigo               | #4B0082        | <table><td bgcolor="#4B0082">`#4B0082`</td></table> |
| darkolivegreen | #556B2F        | <table><td bgcolor="#556B2F">`#556B2F`</td></table> |  | cadetblue            | #5F9EA0        | <table><td bgcolor="#5F9EA0">`#5F9EA0`</td></table> |
| cornflowerblue | #6495ED        | <table><td bgcolor="#6495ED">`#6495ED`</td></table> |  | mediumaquamarine     | #66CDAA        | <table><td bgcolor="#66CDAA">`#66CDAA`</td></table> |
| dimgray        | #696969        | <table><td bgcolor="#696969">`#696969`</td></table> |  | slateblue            | #6A5ACD        | <table><td bgcolor="#6A5ACD">`#6A5ACD`</td></table> |
| olivedrab      | #6B8E23        | <table><td bgcolor="#6B8E23">`#6B8E23`</td></table> |  | slategray            | #708090        | <table><td bgcolor="#708090">`#708090`</td></table> |
| lightslategray | #778899        | <table><td bgcolor="#778899">`#778899`</td></table> |  | mediumslateblue      | #7B68EE        | <table><td bgcolor="#7B68EE">`#7B68EE`</td></table> |
| lawngreen      | #7CFC00        | <table><td bgcolor="#7CFC00">`#7CFC00`</td></table> |  | chartreuse           | #7FFF00        | <table><td bgcolor="#7FFF00">`#7FFF00`</td></table> |
| aquamarine     | #7FFFD4        | <table><td bgcolor="#7FFFD4">`#7FFFD4`</td></table> |  | maroon               | #800000        | <table><td bgcolor="#800000">`#800000`</td></table> |
| purple         | #800080        | <table><td bgcolor="#800080">`#800080`</td></table> |  | olive                | #808000        | <table><td bgcolor="#808000">`#808000`</td></table> |
| gray           | #808080        | <table><td bgcolor="#808080">`#808080`</td></table> |  | lightskyblue         | #87CEFA        | <table><td bgcolor="#87CEFA">`#87CEFA`</td></table> |
| skyblue        | #87CEEB        | <table><td bgcolor="#87CEEB">`#87CEEB`</td></table> |  | blueviolet           | #8A2BE2        | <table><td bgcolor="#8A2BE2">`#8A2BE2`</td></table> |
| darkred        | #8B0000        | <table><td bgcolor="#8B0000">`#8B0000`</td></table> |  | darkmagenta          | #8B008B        | <table><td bgcolor="#8B008B">`#8B008B`</td></table> |
| saddlebrown    | #8B4513        | <table><td bgcolor="#8B4513">`#8B4513`</td></table> |  | darkseagreen         | #8FBC8F        | <table><td bgcolor="#8FBC8F">`#8FBC8F`</td></table> |
| lightgreen     | #90EE90        | <table><td bgcolor="#90EE90">`#90EE90`</td></table> |  | mediumpurple         | #9370DB        | <table><td bgcolor="#9370DB">`#9370DB`</td></table> |
| darkviolet     | #9400D3        | <table><td bgcolor="#9400D3">`#9400D3`</td></table> |  | palegreen            | #98FB98        | <table><td bgcolor="#98FB98">`#98FB98`</td></table> |
| darkorchid     | #9932CC        | <table><td bgcolor="#9932CC">`#9932CC`</td></table> |  | yellowgreen          | #9ACD32        | <table><td bgcolor="#9ACD32">`#9ACD32`</td></table> |
| sienna         | #A0522D        | <table><td bgcolor="#A0522D">`#A0522D`</td></table> |  | brown                | #A52A2A        | <table><td bgcolor="#A52A2A">`#A52A2A`</td></table> |
| darkgray       | #A9A9A9        | <table><td bgcolor="#A9A9A9">`#A9A9A9`</td></table> |  | lightblue            | #ADD8E6        | <table><td bgcolor="#ADD8E6">`#ADD8E6`</td></table> |
| greenyellow    | #ADFF2F        | <table><td bgcolor="#ADFF2F">`#ADFF2F`</td></table> |  | paleturquoise        | #AFEEEE        | <table><td bgcolor="#AFEEEE">`#AFEEEE`</td></table> |
| lightsteelblue | #B0C4DE        | <table><td bgcolor="#B0C4DE">`#B0C4DE`</td></table> |  | firebrick            | #B22222        | <table><td bgcolor="#B22222">`#B22222`</td></table> |
| darkgoldenrod  | #B8860B        | <table><td bgcolor="#B8860B">`#B8860B`</td></table> |  | mediumorchid         | #BA55D3        | <table><td bgcolor="#BA55D3">`#BA55D3`</td></table> |
| rosybrown      | #BC8F8F        | <table><td bgcolor="#BC8F8F">`#BC8F8F`</td></table> |  | darkkhaki            | #BDB76B        | <table><td bgcolor="#BDB76B">`#BDB76B`</td></table> |
| indianred      | #CD5C5C        | <table><td bgcolor="#CD5C5C">`#CD5C5C`</td></table> |  | goldenrod            | #DAA520        | <table><td bgcolor="#DAA520">`#DAA520`</td></table> |
| palevioletred  | #DB7093        | <table><td bgcolor="#DB7093">`#DB7093`</td></table> |  | crimson              | #DC143C        | <table><td bgcolor="#DC143C">`#DC143C`</td></table> |
| lavender       | #E6E6FA        | <table><td bgcolor="#E6E6FA">`#E6E6FA`</td></table> |  | darksalmon           | #E9967A        | <table><td bgcolor="#E9967A">`#E9967A`</td></table> |
| palegoldenrod  | #EEE8AA        | <table><td bgcolor="#EEE8AA">`#EEE8AA`</td></table> |  | lightcoral           | #F08080        | <table><td bgcolor="#F08080">`#F08080`</td></table> |
| aliceblue      | #F0F8FF        | <table><td bgcolor="#F0F8FF">`#F0F8FF`</td></table> |  | honeydew             | #F0FFF0        | <table><td bgcolor="#F0FFF0">`#F0FFF0`</td></table> |
| wheat          | #F5DEB3        | <table><td bgcolor="#F5DEB3">`#F5DEB3`</td></table> |  | deeppink             | #FF1493        | <table><td bgcolor="#FF1493">`#FF1493`</td></table> |
| darkorange     | #FF8C00        | <table><td bgcolor="#FF8C00">`#FF8C00`</td></table> |  | gold                 | #FFD700        | <table><td bgcolor="#FFD700">`#FFD700`</td></table> |
| peachpuff      | #FFDAB9        | <table><td bgcolor="#FFDAB9">`#FFDAB9`</td></table> |  | papayawhip           | #FFEFD5        | <table><td bgcolor="#FFEFD5">`#FFEFD5`</td></table> |
| powderblue     | #B0E0E6        | <table><td bgcolor="#B0E0E6">`#B0E0E6`</td></table> |  | chocolate            | #D2691E        | <table><td bgcolor="#D2691E">`#D2691E`</td></table> |
| tan            | #D2B48C        | <table><td bgcolor="#D2B48C">`#D2B48C`</td></table> |  | lightgray            | #D3D3D3        | <table><td bgcolor="#D3D3D3">`#D3D3D3`</td></table> |
| silver         | #C0C0C0        | <table><td bgcolor="#C0C0C0">`#C0C0C0`</td></table> |  | mediumvioletred      | #C71585        | <table><td bgcolor="#C71585">`#C71585`</td></table> |
| fuchsia        | #C83293        | <table><td bgcolor="#C83293">`#C83293`</td></table> |  | peru                 | #CD853F        | <table><td bgcolor="#CD853F">`#CD853F`</td></table> |
| thistle        | #D8BFD8        | <table><td bgcolor="#D8BFD8">`#D8BFD8`</td></table> |  | orchid               | #DA70D6        | <table><td bgcolor="#DA70D6">`#DA70D6`</td></table> |
| gainsboro      | #DCDCDC        | <table><td bgcolor="#DCDCDC">`#DCDCDC`</td></table> |  | plum                 | #DDA0DD        | <table><td bgcolor="#DDA0DD">`#DDA0DD`</td></table> |
| burlywood      | #DEB887        | <table><td bgcolor="#DEB887">`#DEB887`</td></table> |  | lightcyan            | #E0FFFF        | <table><td bgcolor="#E0FFFF">`#E0FFFF`</td></table> |
| violet         | #EE82EE        | <table><td bgcolor="#EE82EE">`#EE82EE`</td></table> |  | khaki                | #F0E68C        | <table><td bgcolor="#F0E68C">`#F0E68C`</td></table> |
| azure          | #F0FFFF        | <table><td bgcolor="#F0FFFF">`#F0FFFF`</td></table> |  | beige                | #F5F5DC        | <table><td bgcolor="#F5F5DC">`#F5F5DC`</td></table> |
| whitesmoke     | #F5F5F5        | <table><td bgcolor="#F5F5F5">`#F5F5F5`</td></table> |  | mintcream            | #F5FFFA        | <table><td bgcolor="#F5FFFA">`#F5FFFA`</td></table> |
| ghostwhite     | #F8F8FF        | <table><td bgcolor="#F8F8FF">`#F8F8FF`</td></table> |  | salmon               | #FA8072        | <table><td bgcolor="#FA8072">`#FA8072`</td></table> |
| sandybrown     | #FAA460        | <table><td bgcolor="#FAA460">`#FAA460`</td></table> |  | antiquewhite         | #FAEBD7        | <table><td bgcolor="#FAEBD7">`#FAEBD7`</td></table> |
| linen          | #FAF0E6        | <table><td bgcolor="#FAF0E6">`#FAF0E6`</td></table> |  | lightgoldenrodyellow | #FAFAD2        | <table><td bgcolor="#FAFAD2">`#FAFAD2`</td></table> |
| oldlace        | #FDF5E6        | <table><td bgcolor="#FDF5E6">`#FDF5E6`</td></table> |  | red                  | #FF0000        | <table><td bgcolor="#FF0000">`#FF0000`</td></table> |
| magenta        | #FF00FF        | <table><td bgcolor="#FF00FF">`#FF00FF`</td></table> |  | orangered            | #FF4500        | <table><td bgcolor="#FF4500">`#FF4500`</td></table> |
| tomato         | #FF6347        | <table><td bgcolor="#FF6347">`#FF6347`</td></table> |  | hotpink              | #FF69B4        | <table><td bgcolor="#FF69B4">`#FF69B4`</td></table> |
| coral          | #FF7F50        | <table><td bgcolor="#FF7F50">`#FF7F50`</td></table> |  | lightsalmon          | #FFA07A        | <table><td bgcolor="#FFA07A">`#FFA07A`</td></table> |
| orange         | #FFA500        | <table><td bgcolor="#FFA500">`#FFA500`</td></table> |  | lightpink            | #FFB6C1        | <table><td bgcolor="#FFB6C1">`#FFB6C1`</td></table> |
| pink           | #FFC0CB        | <table><td bgcolor="#FFC0CB">`#FFC0CB`</td></table> |  | navajowhite          | #FFDEAD        | <table><td bgcolor="#FFDEAD">`#FFDEAD`</td></table> |
| moccasin       | #FFE4B5        | <table><td bgcolor="#FFE4B5">`#FFE4B5`</td></table> |  | bisque               | #FFE4C4        | <table><td bgcolor="#FFE4C4">`#FFE4C4`</td></table> |
| mistyrose      | #FFE4E1        | <table><td bgcolor="#FFE4E1">`#FFE4E1`</td></table> |  | blanchedalmond       | #FFEBCD        | <table><td bgcolor="#FFEBCD">`#FFEBCD`</td></table> |
| lavenderblush  | #FFF0F5        | <table><td bgcolor="#FFF0F5">`#FFF0F5`</td></table> |  | seashell             | #FFF5EE        | <table><td bgcolor="#FFF5EE">`#FFF5EE`</td></table> |
| cornsilk       | #FFF8DC        | <table><td bgcolor="#FFF8DC">`#FFF8DC`</td></table> |  | lemonchiffon         | #FFFACD        | <table><td bgcolor="#FFFACD">`#FFFACD`</td></table> |
| floralwhite    | #FFFAF0        | <table><td bgcolor="#FFFAF0">`#FFFAF0`</td></table> |  | snow                 | #FFFAFA        | <table><td bgcolor="#FFFAFA">`#FFFAFA`</td></table> |
| yellow         | #FFFF00        | <table><td bgcolor="#FFFF00">`#FFFF00`</td></table> |  | lightyellow          | #FFFFE0        | <table><td bgcolor="#FFFFE0">`#FFFFE0`</td></table> |
| ivory          | #FFFFF0        | <table><td bgcolor="#FFFFF0">`#FFFFF0`</td></table> |  | white                | #FFFFFF        | <table><td bgcolor="#FFFFFF">`#FFFFFF`</td></table> |
