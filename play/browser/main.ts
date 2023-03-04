import { TextUnit } from 'jc-color'

const text = "I am a red text on a blue background."; // Text to be printed on the console.
const foreColor = {red:255,green:0,blue:0};           // Text color
const bgColor = {red:0,green:255,blue:0};             // Background color

const unit = new TextUnit(text, foreColor, bgColor)
unit.print();