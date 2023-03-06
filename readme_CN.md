# jc-color





<fieldset>
  <legend>关于 jc-color...</legend>
  <p><b>作者</b> : <a href="https://blog.csdn.net/qq_28550263?spm=1010.2135.3001.5343"><cite>李俊才 </cite></a></p>
  <p><b>邮箱</b> : <a href="mailto:291148484@163.com"><cite>291148484@163.com</cite></a></p>
  <p><b>github</b> : <a href="https://github.com/jacklee1995/jc-color">https://github.com/jacklee1995/jc-color</a></p>
  <b>简介</b> :  <p> jc-color 是一个 JavaScript/NodeJS 颜色工具，可以用于 <b>颜色类型转换</b>、<b>调色</b>、<b>控制台输出</b>。它不仅可以用于 <b>浏览器</b>，还可以用于  <b>NodeJS</b>。</p>
</fieldset><br>


中文 | [English](/readme.md "Click to jump to English document.")


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

## 2. 色彩相关概念

日常中人眼看到物体的不同颜色来源于物体对光的选择性吸收，当一个物体不吸收某个波长的光波时，这段光波将被物体反色，从而进入人的眼中。 生活中的不发光物体靠反射自己不吸收的光让我们感知颜色，对于显示器设备这类发光物体却恰恰相反，他们靠发出特定波长的光让我们感知颜色。光学中的任何颜色都是由三种最基本的颜色叠加形成的，这三种颜色称为所谓光的 **三原色**，由光的三原色相互叠加就可以得到各种颜色，包括白色。这三原色就包括 **红**（Red）、**绿**（Green）、**蓝**（Blue）。

## 3. 颜色的表示

### 3.1 小节概述

本小节介绍常用的颜色表示方法以及本模块中各种表示的用法和相互转换的方法。

### 3.2 通过 RGB 表示的颜色



### 3.3 通过十六进制数表示的颜色

## 4. 颜色的处理

### 4.1 本节概述

在这一小节介绍了颜色处理的相关方法。包括 、调色

## 5. 在控制台使用彩色文字

### 5.1 ColorUnit 对象

`ColorUnit` 对象是构成控制台彩色文本的组成颗粒，你可以通过给出前景色和背景色RGB值对象创建一个彩色文本单元。

```ts
import { createUnit } from 'jc-color'

const text = "我是一段蓝底红字的文本";        // 要在控制台打印的文本
const foreColor = {red:255,green:0,blue:0}; // 文本颜色
const bgColor = {red:0,green:255,blue:0};   // 背景色

const unit = createUnit(text, foreColor, bgColor)
unit.print();

```

这段代码 NodeJS 环境的终端中效果看起来是这样子的：

![1677849104561](image/readme_CN/1677849104561.png)

完全一样的代码还可以完美地被应用于浏览器地控制台，效果是这样的：

![1677943703060](image/readme_CN/1677943703060.png)


上面展示的代码中，我们通过指定 红、绿、蓝 三各颜色通道的数值来指定颜色，这显得比较麻烦。相对简单的方式是，采用附录中的预定义颜色（参见[附录. 预定义颜色名对照表](#F)）。例如：

```ts
import { createUnit } from 'jc-color'

const unit = createUnit("Hello JC Color", "gold", "teal");
unit.print();

```

这段代码在 NodeJS 和 浏览器 运行环境的终端打印效果也是一样的：

![1677984776087](image/readme_CN/1677984776087.png)

一种更加方便的方式是使用颜色名来创建 TextUnit 对象，这种方式下若颜色名不包含 **Bg** 后缀则表示前景色，反之表示背景色。例如：

```ts
import { lime } from 'jc-color'

const unit = lime('Hello JC Color').crimsonBg();
unit.print();
```
![1677992129991](image/readme_CN/1677992129991.png)

该方式总是从前景色开始，在以前景色命名地函数中传入文本内容后，调用背景色即可完成创建。在 VSCode 编辑器中，你可以很方便地根据编辑器提示选择一个背景色：

![1677992394973](image/readme_CN/1677992394973.png)

采用颜色名的方式让我们能够使用熟悉的单词快速地为终端文本进行着色而不用关心颜色的数量表达，但有时候我们仍然希望使用我们自己指定的颜色值来为文本着色。我们可以使用类似于CSS中 十六进制的颜色 和 RGB颜色 表示方法来表达我们希望使用的颜色字符串作为颜色值参数。例如：

```ts
import { createUnit } from 'jc-color'

const unit = createUnit("Hello JC Color", "#FFFF00", "rgb(128,0,255)");
unit.print();

```



在 NodeJS 和 浏览器 运行环境中的效果看起来是这样子的：

![1677985379251](image/readme_CN/1677985379251.png)

在自定义颜色这里，我们也可以通过一种很方便的方式和内部定义颜色混用。例如：

```ts
import { fr } from 'jc-color'

const unit1 = fr("JC Color", "#FB6D04")._;    // 空背景色，将采用终端默认值
const unit2 = fr("JC Color", "rgb(217,38,132)").chocolateBg(); // 使用 `rgb()` 模板指定颜色
const unit3 = fr("JC Color", {red: 113, green: 18, blue:237}).bg("#FFEC00"); // 使用十六进制数指定颜色

unit1.print();
unit2.print();
unit3.print();
```
![1678010791598](image/readme_CN/1678010791598.png)

### 5.2 ColorText 对象

在实际应用中，我们很多时候希望为同一行文本的不同部分使用不同样式，而 TextUnit 对象实例打印的文本的样式都是一样的。别急，赶紧使用 ColorText 对象。

---

# 附录. 预定义颜色名对照表

为了方便使用，`jc-color` 已经预先定义好了一些常见的颜色名。这些颜色名与CSS定义的颜色总体一致。各颜色名与对应的值如下：

| 颜色名         | 十六进制颜色值 | 颜色展示                                            |  | 颜色名               | 十六进制颜色值 | 颜色展示                                            |
| :------------- | :------------- | :-------------------------------------------------- |:-| :------------------- | :------------- | :-------------------------------------------------- |
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
