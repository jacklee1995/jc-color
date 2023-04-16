/** @module platform 
 * @description
 * #### platform (Module)
 * 清屏
 * if(modes.clear){
 * res += styles['clear'];
 * }
 *
*/

 /**
  * @private
  */
 function hasDomAndWin() { 
 }

 /**
  * @private
  */
 function hasProcessObj() { 
 }

 /**
  * @typedef {"Node" | "Browser" | "Electron";} Platform
  * @description 
  * 
  */

 /**
  * 
  * @return {Platform} 
  * @private
  */
 function getPlatform() { 
 }

 /**
  * @constant {string} styles
  * 
  * @private
  */
     var styles = ''
 /**
  * @param {Record<DisplatMode;;boolean>} modes
  * @param {TextUnit} that
  * 
  * @return {object} 
  * 
  *   Object detail:
  *     {
  *       let res = "";
  *       const cDefault = { red: -1, green: -1, blue: -1 };
  *       
  *       // 清屏
  *       if(modes.clear){
  *         res += styles['clear'];
  *       }
  *     
  *       // 清理以前单元的影响
  *       res += styles['remove_all']
  *       // 再设置亮（粗）暗（加灰）
  *       if(modes.bold){res += styles['bold']}
  *       else if(modes.dark){res += styles['dark']}
  *       
  *       // 再设置样式
  *       if(modes.italic){res += styles['italic']}
  *       if(modes.underline){res += styles['underline']}
  *       if(modes.underline_double){res += styles['underline_double']}
  *       if(modes.glimmer){res += styles['glimmer']}
  *       if(modes.reverse){res += styles['reverse']}
  *       if(modes.hidden){res += styles['hidden']}
  *       if(modes.delete){res += styles['delete']}
  *       if(modes.overline){res += styles['overline']}
  *       
  *       // 再设置颜色
  *       // 前景色
  *       if(that.foreColor !== cDefault){
  *         // 使用反色
  *         if(that.modes.inverseFore){
  *           res += `\x1B[1;${ColorTypeCode.frColor};2;${255-parseInt(that.foreColor.red.toString())};${255-parseInt(that.foreColor.green.toString(),10)};${255-parseInt(that.foreColor.blue.toString(),10)}m`;
  *         }else{
  *           res += `\x1B[1;${ColorTypeCode.frColor};2;${parseInt(that.foreColor.red.toString())};${parseInt(that.foreColor.green.toString(),10)};${parseInt(that.foreColor.blue.toString(),10)}m`;
  *         }
  *       }
  *       // 背景色
  *       if(that.bgColor !== cDefault){
  *         // 使用反色
  *         if(that.modes.inverseBg){
  *           res += `\x1B[1;${ColorTypeCode.bgClolr};2;${255-parseInt(that.bgColor.red.toString())};${255-parseInt(that.bgColor.green.toString())};${255-parseInt(that.bgColor.blue.toString())}m`;
  *         }
  *         else{
  *           res += `\x1B[1;${ColorTypeCode.bgClolr};2;${parseInt(that.bgColor.red.toString())};${parseInt(that.bgColor.green.toString())};${parseInt(that.bgColor.blue.toString())}m`;
  *         }
  *       }
  *       
  *       // 添加文本
  *       res += that.text;
  *     
  *       // 最后处理样式结束标志
  *       if(that.endstyle){res += `\x1B[0m`;}
  *       return res
  *     }
  * @private
  */
 function countNodeStyle(modes, that) { 
 }

 /**
  * @param {TextUnit} that
  * 
  * @return {object} 
  * 
  *   Object detail:
  *     {
  *       return {
  *         "Node": {
  *           "default": countNodeStyle(that.modes,that),
  *           "styless": `\x1B[0m${that.text}`,
  *         },
  *         "Browser": `%c${that.text}`
  *       }
  *     }
  * @private
  */
 function templates(that) { 
 }

