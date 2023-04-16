/** @module print 
 * @description
 * #### print (Module)
 * 用于创建颜色单元
 * 
 * class TextUnit {
 * private _text: string;
 * private _foreColor: RgbColorChannels;
 * private _bgColor: RgbColorChannels;
 * private _modes: Record<DisplatMode, boolean>;
 * private _endstyle: boolean; // 样式结束标志
 * 仅仅用于浏览器的标志
 * private _fontSize:number = -1;
 *
*/

 /**
  * 用于创建颜色单元
  * 
  * @private
  * @class
  * 
  */
 class TextUnit {
   /**
    * @param {string|number} [text = "",
foreColor]
    *         前景色和背景色反转（互换）
    * @param {false} inverseFore
    *         前景色求反色，若反转，则在反转的基础上求反色
    * @param {false} inverseBg
    *         背景色求反色，若反转，则在反转的基础上求反色
    * @param {false} bold
    * @param {false} clear
    * @param {false} dark
    * @param {false} delete
    * @param {false} glimmer
    * @param {false} hidden
    * @param {false} italic
    * @param {false} overline
    * @param {false} underline
    * @param {false} underline_double
    * @param {boolean} [},
endstyle = true]
    * @public
    */
   constructor(text, inverseFore, inverseBg, bold, clear, dark, delete, glimmer, hidden, italic, overline, underline, underline_double, },
endstyle) { 
   }

   /**
    * 
    * @return {string} 
    * @public
    */
   get() { 
       return ''
   }

   /**
    * 结束符
    * 
    * @public
    */
   get() { 
   }

   /**
    * @param {string} [text = this._text]
    * @public
    */
   remove_color(text) { 
   }

   /**
    * @param {string} [text = this._text]
    * @param {RgbColorChannels|string} [foreColor = this._foreColor]
    * @public
    */
   remove_bgColor(text, foreColor) { 
   }

   /**
    * @param {string} [text = this._text]
    * @param {RgbColorChannels|string} [bgColor = this._bgColor]
    * @public
    */
   remove_foreColor(text, bgColor) { 
   }

   /**
    * @param {string} [text = this._text]
    * @param {RgbColorChannels|string} [foreColor = this._foreColor]
    * @param {RgbColorChannels|string} [bgColor = this._bgColor]
    * @public
    */
   remove_italic(text, foreColor, bgColor) { 
   }

   /**
    * @param {string} [text = this._text]
    * @param {RgbColorChannels|string} [foreColor = this._foreColor]
    * @param {RgbColorChannels|string} [bgColor = this._bgColor]
    * @public
    */
   remove_bold(text, foreColor, bgColor) { 
   }

   /**
    * 移除闪烁
    * 
    * @param {string} [text = this._text]
    * @param {RgbColorChannels|string} [foreColor = this._foreColor]
    * @param {RgbColorChannels|string} [bgColor = this._bgColor]
    * @public
    */
   remove_glimmer(text, foreColor, bgColor) { 
   }

   /**
    * 重置背景色
    * 
    * @param {RgbColorChannels|string} [bgColor = this._bgColor]
    * @public
    */
   reBgColor(bgColor) { 
   }

   /**
    * 重置前景色
    * 
    * @param {RgbColorChannels|string} [foreColor = this._foreColor]
    * @public
    */
   reForeColor(foreColor) { 
   }

   /**
    * 移除隐藏
    * 
    * @param {string} [text = this._text]
    * @param {RgbColorChannels|string} [foreColor = this._foreColor]
    * @param {RgbColorChannels|string} [bgColor = this._bgColor]
    * @public
    */
   remove_hidden(text, foreColor, bgColor) { 
   }

   /**
    * 移除上划线
    * 
    * @param {string} [text = this._text]
    * @param {RgbColorChannels|string} [foreColor = this._foreColor]
    * @param {RgbColorChannels|string} [bgColor = this._bgColor]
    * @public
    */
   remove_overline(text, foreColor, bgColor) { 
   }

   /**
    * 移除颜色反转
    * 
    * @param {string} [text = this._text]
    * @param {RgbColorChannels|string} [foreColor = this._foreColor]
    * @param {RgbColorChannels|string} [bgColor = this._bgColor]
    * @public
    */
   remove_reverse(text, foreColor, bgColor) { 
   }

   /**
    * 移除前景色反色
    * 
    * @param {string} [text = this._text]
    * @param {RgbColorChannels|string} [foreColor = this._foreColor]
    * @param {RgbColorChannels|string} [bgColor = this._bgColor]
    * @public
    */
   remove_inverseFore(text, foreColor, bgColor) { 
   }

   /**
    * 移除背景色反色
    * 
    * @param {string} [text = this._text]
    * @param {RgbColorChannels|string} [foreColor = this._foreColor]
    * @param {RgbColorChannels|string} [bgColor = this._bgColor]
    * @public
    */
   remove_inverseBg(text, foreColor, bgColor) { 
   }

   /**
    * 移除反色
    * 
    * @param {string} [text = this._text]
    * @param {RgbColorChannels|string} [foreColor = this._foreColor]
    * @param {RgbColorChannels|string} [bgColor = this._bgColor]
    * @public
    */
   remove_inverse(text, foreColor, bgColor) { 
   }

   /**
    * 移除下划线
    * 
    * @param {string} [text = this._text]
    * @param {RgbColorChannels|string} [foreColor = this._foreColor]
    * @param {RgbColorChannels|string} [bgColor = this._bgColor]
    * @public
    */
   remove_underline(text, foreColor, bgColor) { 
   }

   /**
    * 移除双下划线
    * 
    * @param {string} [text = this._text]
    * @param {RgbColorChannels|string} [foreColor = this._foreColor]
    * @param {RgbColorChannels|string} [bgColor = this._bgColor]
    * @public
    */
   remove_underline_double(text, foreColor, bgColor) { 
   }

   /**
    * 移除删除线
    * 
    * @param {string} [text = this._text]
    * @param {RgbColorChannels|string} [foreColor = this._foreColor]
    * @param {RgbColorChannels|string} [bgColor = this._bgColor]
    * @public
    */
   remove_delete(text, foreColor, bgColor) { 
   }

   /**
    * 粗体
    * 
    * @param {string} [text = this._text]
    * @param {RgbColorChannels|string} [foreColor = this._foreColor]
    * @param {RgbColorChannels|string} [bgColor = this._bgColor]
    * @public
    */
   bold(text, foreColor, bgColor) { 
   }

   /**
    * 反转颜色：交换背景色和前景色
    * 
    * @param {string} [text = this._text]
    * @param {RgbColorChannels|string} [foreColor = this._foreColor]
    * @param {RgbColorChannels|string} [bgColor = this._bgColor]
    * @public
    */
   reverse(text, foreColor, bgColor) { 
   }

   /**
    * 前景色反色
    * 
    * @param {string} [text = this._text]
    * @param {RgbColorChannels|string} [foreColor = this._foreColor]
    * @param {RgbColorChannels|string} [bgColor = this._bgColor]
    * @public
    */
   inverseFore(text, foreColor, bgColor) { 
   }

   /**
    * 背景色反色
    * 
    * @param {string} [text = this._text]
    * @param {RgbColorChannels|string} [foreColor = this._foreColor]
    * @param {RgbColorChannels|string} [bgColor = this._bgColor]
    * @public
    */
   inverseBg(text, foreColor, bgColor) { 
   }

   /**
    * 反色：前景色和背景色同时反色
    * 
    * @param {string} [text = this._text]
    * @param {RgbColorChannels|string} [foreColor = this._foreColor]
    * @param {RgbColorChannels|string} [bgColor = this._bgColor]
    * @public
    */
   inverse(text, foreColor, bgColor) { 
   }

   /**
    * 闪烁
    * 
    * @param {string} [text = this._text]
    * @param {RgbColorChannels|string} [foreColor = this._foreColor]
    * @param {RgbColorChannels|string} [bgColor = this._bgColor]
    * @public
    */
   glimmer(text, foreColor, bgColor) { 
   }

   /**
    * 暗体
    * 
    * @param {string} [text = this._text]
    * @param {RgbColorChannels|string} [foreColor = this._foreColor]
    * @param {RgbColorChannels|string} [bgColor = this._bgColor]
    * @public
    */
   dark(text, foreColor, bgColor) { 
   }

   /**
    * 删除线
    * 
    * @param {string} [text = this._text]
    * @param {RgbColorChannels|string} [foreColor = this._foreColor]
    * @param {RgbColorChannels|string} [bgColor = this._bgColor]
    * @public
    */
   delete(text, foreColor, bgColor) { 
   }

   /**
    * 隐藏
    * 
    * @param {string} [text = this._text]
    * @param {RgbColorChannels|string} [foreColor = this._foreColor]
    * @param {RgbColorChannels|string} [bgColor = this._bgColor]
    * @public
    */
   hidden(text, foreColor, bgColor) { 
   }

   /**
    * 斜体
    * 
    * @param {string} [text = this._text]
    * @param {RgbColorChannels|string} [foreColor = this._foreColor]
    * @param {RgbColorChannels|string} [bgColor = this._bgColor]
    * @public
    */
   italic(text, foreColor, bgColor) { 
   }

   /**
    * 上划线
    * 
    * @param {string} [text = this._text]
    * @param {RgbColorChannels|string} [foreColor = this._foreColor]
    * @param {RgbColorChannels|string} [bgColor = this._bgColor]
    * @public
    */
   overline(text, foreColor, bgColor) { 
   }

   /**
    * 下划线
    * 
    * @param {string} [text = this._text]
    * @param {RgbColorChannels|string} [foreColor = this._foreColor]
    * @param {RgbColorChannels|string} [bgColor = this._bgColor]
    * @public
    */
   underline(text, foreColor, bgColor) { 
   }

   /**
    * 双下划线
    * 
    * @param {string} [text = this._text]
    * @param {RgbColorChannels|string} [foreColor = this._foreColor]
    * @param {RgbColorChannels|string} [bgColor = this._bgColor]
    * @public
    */
   underline_double(text, foreColor, bgColor) { 
   }

   /**
    * 获取背景色
    * 
    * 
    * @return {RgbColorChannels} 
    * @public
    */
   get() { 
   }

   /**
    * 设置背景色
    * 
    * @param {RgbColorChannels|string} bgColor
    * @public
    */
   set(bgColor) { 
   }

   /**
    * 获取前景色
    * 
    * 
    * @return {RgbColorChannels} 
    * @public
    */
   get() { 
   }

   /**
    * 设置前景色
    * 
    * @param {RgbColorChannels|string} foreColor
    * @public
    */
   set(foreColor) { 
   }

   /**
    * 获取字体大小：当前仅浏览器控制台支持
    * 
    * @public
    */
   get() { 
   }

   /**
    * 设置字体大小：当前仅浏览器控制台支持
    * 
    * @param {number} val
    * @public
    */
   set(val) { 
   }

   /**
    * @public
    */
   get() { 
   }

   /**
    * @param {TextUnit} [self = this]
    * 
    * @return {string} 
    * @private
    */
   styleDescriptor(self) { 
       return ''
   }

   /**
    * 
    * @return {Record<DisplatMode, boolean>} 
    * @public
    */
   get() { 
   }

   /**
    * @param {TextUnit} [self = this]
    * 
    * @return {string} 
    * @private
    */
   __str__(self) { 
       return ''
   }

   /**
    * @param {string} [_str = this._text]
    * @public
    */
   print(_str) { 
   }

 }

 /**
  * 
  * @private
  * @class
  * @extends Array<TextUnit>
  * 
  */
 class ColorText extends Array<TextUnit>{
   /**
    * @param {ColorTextUnit[]} ...units
    * @public
    */
   constructor() { 
   }

   /**
    * @param {ColorTextUnit[]} ...units
    * 
    * @return {number} 
    * @private
    */
   _pushUnit() { 
       return 0
   }

   /**
    * @param {any[]} ...args
    * @public
    */
   push() { 
   }

   /**
    * 获取背景色
    * 
    * 
    * @return {RgbColorChannels[]} 
    * @public
    */
   get() { 
   }

   /**
    * 设置背景色
    * 
    * @param {(RgbColorChannels|string)[]|RgbColorChannels|string} bgColor
    * @public
    */
   set(bgColor) { 
   }

   /**
    * 获取前景色
    * 
    * 
    * @return {RgbColorChannels[]} 
    * @public
    */
   get() { 
   }

   /**
    * 设置前景色
    * 
    * @param {(RgbColorChannels|string)[]|RgbColorChannels|string} foreColor
    * @public
    */
   set(foreColor) { 
   }

   /**
    * @param {ColorTextUnit[]} ...units
    * @public
    */
   add() { 
   }

   /**
    * 
    * @return {string} 
    * @private
    */
   node__str__() { 
       return ''
   }

   /**
    * @public
    */
   print() { 
   }

   /**
    * @public
    */
   bold() { 
   }

   /**
    * @public
    */
   remove_bold() { 
   }

   /**
    * @public
    */
   italic() { 
   }

   /**
    * @public
    */
   remove_italic() { 
   }

   /**
    * @public
    */
   delete() { 
   }

   /**
    * @public
    */
   remove_delete() { 
   }

   /**
    * @public
    */
   underline() { 
   }

   /**
    * @public
    */
   remove_underline() { 
   }

   /**
    * @public
    */
   underline_double() { 
   }

   /**
    * @public
    */
   remove_underline_double() { 
   }

   /**
    * @public
    */
   glimmer() { 
   }

   /**
    * @public
    */
   remove_glimmer() { 
   }

   /**
    * @public
    */
   reverse() { 
   }

   /**
    * @public
    */
   remove_reverse() { 
   }

   /**
    * @public
    */
   inverse() { 
   }

   /**
    * @public
    */
   remove_inverse() { 
   }

 }

 /**
  * 指定字符串和起止颜色，创建颜色梯度字符串
  * 
  * @param {string} str
  * @param {(string|RgbColorChannels)[]} [foreColors = ["#EB6461"]
  * @param {*} "#84FC2C","green"]
  * @param {(string|RgbColorChannels)[]} [bgColors = []]
  * @private
  */
 function gradientText(str, foreColors, "#84FC2C","green"], bgColors) { 
 }

 /**
  * @param {string} str
  * @param {(string|RgbColorChannels)[]} [foreColors = ["#EB6461"]
  * @param {*} "#84FC2C","green"]
  * @param {(string|RgbColorChannels)[]} [bgColors = []]
  * @private
  */
 function geadientText(str, foreColors, "#84FC2C","green"], bgColors) { 
 }

 /**
  * @param {any[]} ...args
  * @private
  */
 function print() { 
 }

 /**
  * 控制台清屏
  * 
  * @private
  */
 function cls() { 
 }

 /**
  * @private
  */
 function clsLine() { 
 }

