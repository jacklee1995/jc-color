import { createUnit, fr, red, createText, lime } from 'jc-color'

// 例1：同一个文本单元对象的多次打印
createUnit("Hello JC Color", "#FF0000", "blue", {
    reverse: true, // 颜色反转
    italic:true,   // 斜体
}).print()
.remove_reverse().print()                 // 移除颜色反转，再打印一次
.remove_bgColor()                         // 移除背景色
.delete("删除线").print()
.remove_italic("移除斜体").print()
.remove_delete("移除删除线").print()
.glimmer("闪烁，仅Node环境下终端获取焦点时有效").print()
.remove_glimmer("移除闪烁,更改前景色颜色为 mediumseagreen（内置颜色名）","mediumseagreen").print()
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
red("\n红字")._.print();
red("红字蓝底").blueBg().print();
fr("从十六进制颜色创建","#FB6D04")._.print();
fr("从rgb颜色创建","rgb(217,38,132)、颜色名背景色").chocolateBg().print();
fr("从颜色通道对象创建、十六进制背景色",{red: 113, green: 18, blue:237}).bg("#FFEC00").print();

// 例4：
createText(createUnit("\nWelcome to ", "lime"), fr("JC Color","Red").goldenrodBg()).print();