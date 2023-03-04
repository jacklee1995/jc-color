import { TextUnit } from '../../jc-color/dist/jc-color'

const text = "I am a red text on a blue background.";        // 要在控制台打印的文本
const foreColor = {red:255,green:0,blue:0}; // 文本颜色
const bgColor = {red:0,green:255,blue:0};   // 背景色

const unit = new TextUnit(text, foreColor, bgColor)
unit.print();