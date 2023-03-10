import { createUnit, createText, geadientText, blue, lime, crimson, firebrick, print, red, fr } from 'jc-color'

// 例1：同一个文本单元对象的多次打印
createUnit("你好 JC Color ！---原文本", "red", "blue", {
    italic: true,   // 斜体
}).print()
.reverse("\n输出颜色反转效果，前景色和背景色将交换").print()
.remove_reverse("移除颜色反转").print()
.inverse("\n使用反色").print()
.remove_inverse("移除反色").print()
.remove_bgColor("移除背景色").print()
.delete("删除线").print()
.remove_italic("移除斜体").print()
.remove_delete("移除删除线").print()
.glimmer("闪烁，仅Node环境下终端获取焦点时有效").print()
.remove_glimmer("移除闪烁,更改前景色颜色为 mediumseagreen（内置颜色名）","mediumseagreen").print()
.bold("粗体/高亮体","default","default").print()
.remove_bold("清除粗体/高亮体").print()
.underline("增加下划线，恢复终端默认前景色，更改背景色为rgb颜色：rgb(60,143,247)","default","rgb(60,143,247)").print()
.underline_double("使用双下划线，如有单下划线未清空，看起来会像是被覆盖。使用终端默认前景色个背景色","default","default").print()
.remove_underline_double("仅清理了双下划线").print()
.remove_underline("清除单下划线").print()
.overline("\n上划线。为了看起来不像上一行文本的下划线，我们使用换行输出。").print()

// 例2：使用固定的单元样式模板
const info = createUnit("", "#cdcdcd");
const warn = createUnit("", "yellow");
const error = createUnit("", "red",);
const fatal = createUnit("", "#A205D6", "#FFAF2B");

info.print("\n[info] print your info messages.");
warn.print("[warn] print your warn messages.");
error.print("[error] print your error messages.");
fatal.print("[fatal] print your fatal messages.");


// 例3：使用 颜色名、fr()函数 创建对象
red("\n红字").print();
red("红字蓝底").blueBg().print();
fr("从十六进制颜色创建","#FB6D04").print();
fr("从rgb颜色创建","rgb(217,38,132)、颜色名背景色").chocolateBg().print();
fr("从颜色通道对象创建、十六进制背景色",{red: 113, green: 18, blue:237}).bg("#FFEC00").print();

// 例4：文本块对象
createText(createUnit("\nWelcome to ", "lime"), fr("JC Color","Red").goldenrodBg()).print();



// 例5：创建渐变色文字



geadientText(
    "输出一段渐变色文字：123456789",
    ["red", "blue","#EB6461","green","rgb(128, 80, 252)"],
).print()

geadientText(
    "输出一段渐变色背景的渐变色文字：123456789 123456789 123456789",
    ["red", "blue"],
    ["#43F5C0", "rgb(141,171,157)","yellow"],
).print()



geadientText(
  "输出一段闪烁的渐变色文字"
).glimmer().print()



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


// print('--------------------------------------------------')
// geadientText("Hello! Welcome to JC Color!").underline().italic().print()
// print('--------------------------------------------------')

// geadientText("This is a tool covering color calculation, processing and terminal output,",["red", "blue","#EB6461","green","rgb(128, 80, 252)"]).underline_double().print()
// geadientText("which is compatible with NodeJS and Web environment at the same time, and its functions in terminal printing are particularly rich, and there is no module dependence.",["#84FC2C","yellow"],["red", "blue","#EB6461","green"]).glimmer().print()

// createText(
//  "\nYou can use",
//   createUnit(" Hex、","#EB6461"),
//   createUnit(" Rgb to set the colors、","rgb(62, 122, 234)"),
//   " with 256 colors/true color support!",
//   createUnit("\nThis module contains more than one hundred built-in color names to set your color,","Yellow"),
//   createUnit(" You can use highlighting/bolding ").bold(),
//   createUnit("and also dark letters.").dark(),
//   "\nand also ",
//   blue("italics,").orangeBg().italic(),
//   createUnit("underline,","tomato").underline(),
//   createUnit(" double underline、","teal").underline_double(),
//   lime("glimmer fonts （alim only in Node）、").bg("#cdcdcd").glimmer(),
// ).print()

// crimson("\nYou can also use").blueBg().print()
// .reverse("reverse colors. That is, the foreground and background colors are exchanged.").print()

// blue("\nAnd inverse colors.").redBg().print()
// .inverseFore("which includes ieverse color of the foreground color").print().remove_inverseFore()
// .inverseBg("and also background color.").print().remove_inverseFore()
// .inverse("Of course, the background color and foreground color are inversed at the same time.").print()


// geadientText("You can also generate colors, make gradients, background gradients, and apply various effects in gradient text!").print()

// firebrick('\nEnjoy it!')


// import { fr } from 'jc-color';

// fr('some text.', '#D841B3').print();
// fr('some text.','#D841B3').yellowBg().print();
// fr('some text.', '#D841B3').bg('rgb(213,247,74)').print()