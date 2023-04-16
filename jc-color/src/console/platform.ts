import {  TextUnit } from "./print";
import { ColorTypeCode, DisplatMode } from "../types";


function hasDomAndWin() {
  if (typeof window !== "undefined" && typeof document !== "undefined") {
    return true;
  }
  return false;
}
function hasProcessObj() {
  if (typeof process !== "undefined") {
    return true;
  }
  return false;
}

declare type Platform = "Node" | "Browser" | "Electron";

function getPlatform():Platform {
  let dom = hasDomAndWin();
  let proc = hasProcessObj();
  if (dom && proc) {
    return "Electron"
  }else if (proc) {
    return "Node"
  }else{
    return "Browser"
  }
}

const styles = {
  remove_all       : '\x1B[0m',  // √取消下划线
  bold             : '\x1B[1m',  // √高亮
  dark             : '\x1B[2m',  // √暗色
  italic           : '\x1B[3m',  // √斜体
  underline        : '\x1B[4m',  // √下划线
  glimmer          : '\x1B[5m',  // √闪烁
  reverse          : '\x1B[7m',  // √反向
  hidden           : '\x1B[8m',  // √隐藏
  delete           : '\x1B[9m',  // √删除
  underline_double : '\x1B[21m', // √双下划线
  remove_bold      : '\x1B[22m', // √取消高亮
  remove_underline : '\x1B[24m', // √取消下划线
  remove_glimmer   : '\x1B[25m', // √取消闪烁
  remove_reverse   : '\x1B[27m', // √取消反向
  remove_hidden    : '\x1B[28m', // √取消隐藏
  remove_delete    : '\x1B[29m', // √取消删除线
  overline         : '\x1B[53m', // √上划线
  remove_overline  : '\x1B[55m', // √取消上划线
  clear            : '\x1B[2J',  // √清屏
}

const countNodeStyle = (modes:  Record<DisplatMode, boolean>, that:TextUnit) => {
  let res = "";
  const cDefault = { red: -1, green: -1, blue: -1 };
  
  // 清屏
  if(modes.clear){
    res += styles['clear'];
  }

  // 清理以前单元的影响
  res += styles['remove_all']
  // 再设置亮（粗）暗（加灰）
  if(modes.bold){res += styles['bold']}
  else if(modes.dark){res += styles['dark']}
  
  // 再设置样式
  if(modes.italic){res += styles['italic']}
  if(modes.underline){res += styles['underline']}
  if(modes.underline_double){res += styles['underline_double']}
  if(modes.glimmer){res += styles['glimmer']}
  if(modes.reverse){res += styles['reverse']}
  if(modes.hidden){res += styles['hidden']}
  if(modes.delete){res += styles['delete']}
  if(modes.overline){res += styles['overline']}
  
  // 再设置颜色
  // 前景色
  if(that.foreColor !== cDefault){
    // 使用反色
    if(that.modes.inverseFore){
      res += `\x1B[1;${ColorTypeCode.frColor};2;${255-parseInt(that.foreColor.red.toString())};${255-parseInt(that.foreColor.green.toString(),10)};${255-parseInt(that.foreColor.blue.toString(),10)}m`;
    }else{
      res += `\x1B[1;${ColorTypeCode.frColor};2;${parseInt(that.foreColor.red.toString())};${parseInt(that.foreColor.green.toString(),10)};${parseInt(that.foreColor.blue.toString(),10)}m`;
    }
  }
  // 背景色
  if(that.bgColor !== cDefault){
    // 使用反色
    if(that.modes.inverseBg){
      res += `\x1B[1;${ColorTypeCode.bgClolr};2;${255-parseInt(that.bgColor.red.toString())};${255-parseInt(that.bgColor.green.toString())};${255-parseInt(that.bgColor.blue.toString())}m`;
    }
    else{
      res += `\x1B[1;${ColorTypeCode.bgClolr};2;${parseInt(that.bgColor.red.toString())};${parseInt(that.bgColor.green.toString())};${parseInt(that.bgColor.blue.toString())}m`;
    }
  }
  
  // 添加文本
  res += that.text;

  // 最后处理样式结束标志
  if(that.endstyle){res += `\x1B[0m`;}
  return res
}

const templates = (that:TextUnit) => {
  return {
    "Node": {
      "default": countNodeStyle(that.modes,that),
      "styless": `\x1B[0m${that.text}`,
    },
    "Browser": `%c${that.text}`
  }
}

export {
  getPlatform,
  templates
};
