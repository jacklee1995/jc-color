import { ColorTypeCode, TextUnit } from "..";


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

const templates = (that:TextUnit) => {
  return {
    "Node": {
      "styless": `\x1B[0m${that.text}`,
      "fore": `\x1B[1;${ColorTypeCode.bgClolr};${that.bgMode};${that.bgColor.red};${that.bgColor.green};${that.bgColor.blue}m${that.text}\x1B[0m`,
      "back": `\x1B[1;${ColorTypeCode.frColor};${that.foreMode};${that.foreColor.red};${that.foreColor.green};${that.foreColor.blue}m${that.text}\x1B[0m`,
      "fore_back": `\x1B[1;${ColorTypeCode.bgClolr};${that.bgMode};${that.bgColor.red};${that.bgColor.green};${that.bgColor.blue};1;${ColorTypeCode.frColor};${that.foreMode};${that.foreColor.red};${that.foreColor.green};${that.foreColor.blue}m${that.text}\x1B[0m`,
    },
    "Browser": `%c${that.text}`
  }
}

export {
  getPlatform,
  templates
};
