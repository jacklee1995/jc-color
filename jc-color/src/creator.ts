import type { RgbColorChannels } from ".";
import { ColorText, TextUnit } from "./console";

// TODO: How to get the function name from the inside. 
const setBgColor = (unit: TextUnit) => {
  return {
    blackBg: (): TextUnit => { unit.bgColor = "black"; return unit },
    navyBg: (): TextUnit => { unit.bgColor = "navy"; return unit },
    darkblueBg: (): TextUnit => { unit.bgColor = "darkblue"; return unit },
    mediumblueBg: (): TextUnit => { unit.bgColor = "mediumblue"; return unit },
    blueBg: (): TextUnit => { unit.bgColor = "blue"; return unit },
    darkgreenBg: (): TextUnit => { unit.bgColor = "darkgreen"; return unit },
    greenBg: (): TextUnit => { unit.bgColor = "green"; return unit },
    tealBg: (): TextUnit => { unit.bgColor = "teal"; return unit },
    darkcyanBg: (): TextUnit => { unit.bgColor = "darkcyan"; return unit },
    deepskyblueBg: (): TextUnit => { unit.bgColor = "deepskyblue"; return unit },
    darkturquoiseBg: (): TextUnit => { unit.bgColor = "darkturquoise"; return unit },
    mediumspringgreenBg: (): TextUnit => { unit.bgColor = "mediumspringgreen"; return unit },
    limeBg: (): TextUnit => { unit.bgColor = "lime"; return unit },
    springgreenBg: (): TextUnit => { unit.bgColor = "springgreen"; return unit },
    aquaBg: (): TextUnit => { unit.bgColor = "aqua"; return unit },
    cyanBg: (): TextUnit => { unit.bgColor = "cyan"; return unit },
    midnightblueBg: (): TextUnit => { unit.bgColor = "midnightblue"; return unit },
    dodgerblueBg: (): TextUnit => { unit.bgColor = "dodgerblue"; return unit },
    lightseagreenBg: (): TextUnit => { unit.bgColor = "lightseagreen"; return unit },
    forestgreenBg: (): TextUnit => { unit.bgColor = "forestgreen"; return unit },
    seagreenBg: (): TextUnit => { unit.bgColor = "seagreen"; return unit },
    darkslategrayBg: (): TextUnit => { unit.bgColor = "darkslategray"; return unit },
    limegreenBg: (): TextUnit => { unit.bgColor = "limegreen"; return unit },
    mediumseagreenBg: (): TextUnit => { unit.bgColor = "mediumseagreen"; return unit },
    turquoiseBg: (): TextUnit => { unit.bgColor = "turquoise"; return unit },
    royalblueBg: (): TextUnit => { unit.bgColor = "royalblue"; return unit },
    steelblueBg: (): TextUnit => { unit.bgColor = "steelblue"; return unit },
    mediumturquoiseBg: (): TextUnit => { unit.bgColor = "mediumturquoise"; return unit },
    darkslateblueBg: (): TextUnit => { unit.bgColor = "darkslateblue"; return unit },
    indigoBg: (): TextUnit => { unit.bgColor = "indigo"; return unit },
    darkolivegreenBg: (): TextUnit => { unit.bgColor = "darkolivegreen"; return unit },
    cadetblueBg: (): TextUnit => { unit.bgColor = "cadetblue"; return unit },
    cornflowerblueBg: (): TextUnit => { unit.bgColor = "cornflowerblue"; return unit },
    mediumaquamarineBg: (): TextUnit => { unit.bgColor = "mediumaquamarine"; return unit },
    dimgrayBg: (): TextUnit => { unit.bgColor = "dimgray"; return unit },
    slateblueBg: (): TextUnit => { unit.bgColor = "slateblue"; return unit },
    olivedrabBg: (): TextUnit => { unit.bgColor = "olivedrab"; return unit },
    slategrayBg: (): TextUnit => { unit.bgColor = "slategray"; return unit },
    lightslategrayBg: (): TextUnit => { unit.bgColor = "lightslategray"; return unit },
    mediumslateblueBg: (): TextUnit => { unit.bgColor = "mediumslateblue"; return unit },
    lawngreenBg: (): TextUnit => { unit.bgColor = "lawngreen"; return unit },
    chartreuseBg: (): TextUnit => { unit.bgColor = "chartreuse"; return unit },
    aquamarineBg: (): TextUnit => { unit.bgColor = "aquamarine"; return unit },
    maroonBg: (): TextUnit => { unit.bgColor = "maroon"; return unit },
    purpleBg: (): TextUnit => { unit.bgColor = "purple"; return unit },
    oliveBg: (): TextUnit => { unit.bgColor = "olive"; return unit },
    grayBg: (): TextUnit => { unit.bgColor = "gray"; return unit },
    lightskyblueBg: (): TextUnit => { unit.bgColor = "lightskyblue"; return unit },
    skyblueBg: (): TextUnit => { unit.bgColor = "skyblue"; return unit },
    bluevioletBg: (): TextUnit => { unit.bgColor = "blueviolet"; return unit },
    darkredBg: (): TextUnit => { unit.bgColor = "darkred"; return unit },
    darkmagentaBg: (): TextUnit => { unit.bgColor = "darkmagenta"; return unit },
    saddlebrownBg: (): TextUnit => { unit.bgColor = "saddlebrown"; return unit },
    darkseagreenBg: (): TextUnit => { unit.bgColor = "darkseagreen"; return unit },
    lightgreenBg: (): TextUnit => { unit.bgColor = "lightgreen"; return unit },
    mediumpurpleBg: (): TextUnit => { unit.bgColor = "mediumpurple"; return unit },
    darkvioletBg: (): TextUnit => { unit.bgColor = "darkviolet"; return unit },
    palegreenBg: (): TextUnit => { unit.bgColor = "palegreen"; return unit },
    darkorchidBg: (): TextUnit => { unit.bgColor = "darkorchid"; return unit },
    yellowgreenBg: (): TextUnit => { unit.bgColor = "yellowgreen"; return unit },
    siennaBg: (): TextUnit => { unit.bgColor = "sienna"; return unit },
    brownBg: (): TextUnit => { unit.bgColor = "brown"; return unit },
    darkgrayBg: (): TextUnit => { unit.bgColor = "darkgray"; return unit },
    lightblueBg: (): TextUnit => { unit.bgColor = "lightblue"; return unit },
    greenyellowBg: (): TextUnit => { unit.bgColor = "greenyellow"; return unit },
    paleturquoiseBg: (): TextUnit => { unit.bgColor = "paleturquoise"; return unit },
    lightsteelblueBg: (): TextUnit => { unit.bgColor = "lightsteelblue"; return unit },
    firebrickBg: (): TextUnit => { unit.bgColor = "firebrick"; return unit },
    darkgoldenrodBg: (): TextUnit => { unit.bgColor = "darkgoldenrod"; return unit },
    mediumorchidBg: (): TextUnit => { unit.bgColor = "mediumorchid"; return unit },
    rosybrownBg: (): TextUnit => { unit.bgColor = "rosybrown"; return unit },
    darkkhakiBg: (): TextUnit => { unit.bgColor = "darkkhaki"; return unit },
    indianredBg: (): TextUnit => { unit.bgColor = "indianred"; return unit },
    goldenrodBg: (): TextUnit => { unit.bgColor = "goldenrod"; return unit },
    palevioletredBg: (): TextUnit => { unit.bgColor = "palevioletred"; return unit },
    crimsonBg: (): TextUnit => { unit.bgColor = "crimson"; return unit },
    lavenderBg: (): TextUnit => { unit.bgColor = "lavender"; return unit },
    darksalmonBg: (): TextUnit => { unit.bgColor = "darksalmon"; return unit },
    palegoldenrodBg: (): TextUnit => { unit.bgColor = "palegoldenrod"; return unit },
    lightcoralBg: (): TextUnit => { unit.bgColor = "lightcoral"; return unit },
    aliceblueBg: (): TextUnit => { unit.bgColor = "aliceblue"; return unit },
    honeydewBg: (): TextUnit => { unit.bgColor = "honeydew"; return unit },
    wheatBg: (): TextUnit => { unit.bgColor = "wheat"; return unit },
    deeppinkBg: (): TextUnit => { unit.bgColor = "deeppink"; return unit },
    darkorangeBg: (): TextUnit => { unit.bgColor = "darkorange"; return unit },
    goldBg: (): TextUnit => { unit.bgColor = "gold"; return unit },
    peachpuffBg: (): TextUnit => { unit.bgColor = "peachpuff"; return unit },
    papayawhipBg: (): TextUnit => { unit.bgColor = "papayawhip"; return unit },
    powderblueBg: (): TextUnit => { unit.bgColor = "powderblue"; return unit },
    chocolateBg: (): TextUnit => { unit.bgColor = "chocolate"; return unit },
    tanBg: (): TextUnit => { unit.bgColor = "tan"; return unit },
    lightgrayBg: (): TextUnit => { unit.bgColor = "lightgray"; return unit },
    silverBg: (): TextUnit => { unit.bgColor = "silver"; return unit },
    mediumvioletredBg: (): TextUnit => { unit.bgColor = "mediumvioletred"; return unit },
    fuchsiaBg: (): TextUnit => { unit.bgColor = "fuchsia"; return unit },
    peruBg: (): TextUnit => { unit.bgColor = "peru"; return unit },
    thistleBg: (): TextUnit => { unit.bgColor = "thistle"; return unit },
    orchidBg: (): TextUnit => { unit.bgColor = "orchid"; return unit },
    gainsboroBg: (): TextUnit => { unit.bgColor = "gainsboro"; return unit },
    plumBg: (): TextUnit => { unit.bgColor = "plum"; return unit },
    burlywoodBg: (): TextUnit => { unit.bgColor = "burlywood"; return unit },
    lightcyanBg: (): TextUnit => { unit.bgColor = "lightcyan"; return unit },
    violetBg: (): TextUnit => { unit.bgColor = "violet"; return unit },
    khakiBg: (): TextUnit => { unit.bgColor = "khaki"; return unit },
    azureBg: (): TextUnit => { unit.bgColor = "azure"; return unit },
    beigeBg: (): TextUnit => { unit.bgColor = "beige"; return unit },
    whitesmokeBg: (): TextUnit => { unit.bgColor = "whitesmoke"; return unit },
    mintcreamBg: (): TextUnit => { unit.bgColor = "mintcream"; return unit },
    ghostwhiteBg: (): TextUnit => { unit.bgColor = "ghostwhite"; return unit },
    salmonBg: (): TextUnit => { unit.bgColor = "salmon"; return unit },
    sandybrownBg: (): TextUnit => { unit.bgColor = "sandybrown"; return unit },
    antiquewhiteBg: (): TextUnit => { unit.bgColor = "antiquewhite"; return unit },
    linenBg: (): TextUnit => { unit.bgColor = "linen"; return unit },
    lightgoldenrodyellowBg: (): TextUnit => { unit.bgColor = "lightgoldenrodyellow"; return unit },
    oldlaceBg: (): TextUnit => { unit.bgColor = "oldlace"; return unit },
    redBg: (): TextUnit => { unit.bgColor = "red"; return unit },
    magentaBg: (): TextUnit => { unit.bgColor = "magenta"; return unit },
    orangeredBg: (): TextUnit => { unit.bgColor = "orangered"; return unit },
    tomatoBg: (): TextUnit => { unit.bgColor = "tomato"; return unit },
    hotpinkBg: (): TextUnit => { unit.bgColor = "hotpink"; return unit },
    coralBg: (): TextUnit => { unit.bgColor = "coral"; return unit },
    lightsalmonBg: (): TextUnit => { unit.bgColor = "lightsalmon"; return unit },
    orangeBg: (): TextUnit => { unit.bgColor = "orange"; return unit },
    lightpinkBg: (): TextUnit => { unit.bgColor = "lightpink"; return unit },
    pinkBg: (): TextUnit => { unit.bgColor = "pink"; return unit },
    navajowhiteBg: (): TextUnit => { unit.bgColor = "navajowhite"; return unit },
    moccasinBg: (): TextUnit => { unit.bgColor = "moccasin"; return unit },
    bisqueBg: (): TextUnit => { unit.bgColor = "bisque"; return unit },
    mistyroseBg: (): TextUnit => { unit.bgColor = "mistyrose"; return unit },
    blanchedalmondBg: (): TextUnit => { unit.bgColor = "blanchedalmond"; return unit },
    lavenderblushBg: (): TextUnit => { unit.bgColor = "lavenderblush"; return unit },
    seashellBg: (): TextUnit => { unit.bgColor = "seashell"; return unit },
    cornsilkBg: (): TextUnit => { unit.bgColor = "cornsilk"; return unit },
    lemonchiffonBg: (): TextUnit => { unit.bgColor = "lemonchiffon"; return unit },
    floralwhiteBg: (): TextUnit => { unit.bgColor = "floralwhite"; return unit },
    snowBg: (): TextUnit => { unit.bgColor = "snow"; return unit },
    yellowBg: (): TextUnit => { unit.bgColor = "yellow"; return unit },
    lightyellowBg: (): TextUnit => { unit.bgColor = "lightyellow"; return unit },
    ivoryBg: (): TextUnit => { unit.bgColor = "ivory"; return unit },
    whiteBg: (): TextUnit => { unit.bgColor = "white"; return unit },
    bg: (color: RgbColorChannels | string) => {
      unit.bgColor = color;
      return unit
    },
    get _() {
      return unit;
    },
    print(){
      return unit.print()
    }
  }
}

function unitFromName(msg: string, foreColorName: RgbColorChannels | string) {
  const unit = new TextUnit(msg, foreColorName)
  return setBgColor(unit)
}

export function black(msg: string) { return unitFromName(msg, "black") }
export function navy(msg: string) { return unitFromName(msg, "navy") }
export function darkblue(msg: string) { return unitFromName(msg, "darkblue") }
export function mediumblue(msg: string) { return unitFromName(msg, "mediumblue") }
export function blue(msg: string) { return unitFromName(msg, "blue") }
export function darkgreen(msg: string) { return unitFromName(msg, "darkgreen") }
export function green(msg: string) { return unitFromName(msg, "green") }
export function teal(msg: string) { return unitFromName(msg, "teal") }
export function darkcyan(msg: string) { return unitFromName(msg, "darkcyan") }
export function deepskyblue(msg: string) { return unitFromName(msg, "deepskyblue") }
export function darkturquoise(msg: string) { return unitFromName(msg, "darkturquoise") }
export function mediumspringgreen(msg: string) { return unitFromName(msg, "mediumspringgreen") }
export function lime(msg: string) { return unitFromName(msg, "lime") }
export function springgreen(msg: string) { return unitFromName(msg, "springgreen") }
export function aqua(msg: string) { return unitFromName(msg, "aqua") }
export function cyan(msg: string) { return unitFromName(msg, "cyan") }
export function midnightblue(msg: string) { return unitFromName(msg, "midnightblue") }
export function dodgerblue(msg: string) { return unitFromName(msg, "dodgerblue") }
export function lightseagreen(msg: string) { return unitFromName(msg, "lightseagreen") }
export function forestgreen(msg: string) { return unitFromName(msg, "forestgreen") }
export function seagreen(msg: string) { return unitFromName(msg, "seagreen") }
export function darkslategray(msg: string) { return unitFromName(msg, "darkslategray") }
export function limegreen(msg: string) { return unitFromName(msg, "limegreen") }
export function mediumseagreen(msg: string) { return unitFromName(msg, "mediumseagreen") }
export function turquoise(msg: string) { return unitFromName(msg, "turquoise") }
export function royalblue(msg: string) { return unitFromName(msg, "royalblue") }
export function steelblue(msg: string) { return unitFromName(msg, "steelblue") }
export function mediumturquoise(msg: string) { return unitFromName(msg, "mediumturquoise") }
export function darkslateblue(msg: string) { return unitFromName(msg, "darkslateblue") }
export function indigo(msg: string) { return unitFromName(msg, "indigo") }
export function darkolivegreen(msg: string) { return unitFromName(msg, "darkolivegreen") }
export function cadetblue(msg: string) { return unitFromName(msg, "cadetblue") }
export function cornflowerblue(msg: string) { return unitFromName(msg, "cornflowerblue") }
export function mediumaquamarine(msg: string) { return unitFromName(msg, "mediumaquamarine") }
export function dimgray(msg: string) { return unitFromName(msg, "dimgray") }
export function slateblue(msg: string) { return unitFromName(msg, "slateblue") }
export function olivedrab(msg: string) { return unitFromName(msg, "olivedrab") }
export function slategray(msg: string) { return unitFromName(msg, "slategray") }
export function lightslategray(msg: string) { return unitFromName(msg, "lightslategray") }
export function mediumslateblue(msg: string) { return unitFromName(msg, "mediumslateblue") }
export function lawngreen(msg: string) { return unitFromName(msg, "lawngreen") }
export function chartreuse(msg: string) { return unitFromName(msg, "chartreuse") }
export function aquamarine(msg: string) { return unitFromName(msg, "aquamarine") }
export function maroon(msg: string) { return unitFromName(msg, "maroon") }
export function purple(msg: string) { return unitFromName(msg, "purple") }
export function olive(msg: string) { return unitFromName(msg, "olive") }
export function gray(msg: string) { return unitFromName(msg, "gray") }
export function lightskyblue(msg: string) { return unitFromName(msg, "lightskyblue") }
export function skyblue(msg: string) { return unitFromName(msg, "skyblue") }
export function blueviolet(msg: string) { return unitFromName(msg, "blueviolet") }
export function darkred(msg: string) { return unitFromName(msg, "darkred") }
export function darkmagenta(msg: string) { return unitFromName(msg, "darkmagenta") }
export function saddlebrown(msg: string) { return unitFromName(msg, "saddlebrown") }
export function darkseagreen(msg: string) { return unitFromName(msg, "darkseagreen") }
export function lightgreen(msg: string) { return unitFromName(msg, "lightgreen") }
export function mediumpurple(msg: string) { return unitFromName(msg, "mediumpurple") }
export function darkviolet(msg: string) { return unitFromName(msg, "darkviolet") }
export function palegreen(msg: string) { return unitFromName(msg, "palegreen") }
export function darkorchid(msg: string) { return unitFromName(msg, "darkorchid") }
export function yellowgreen(msg: string) { return unitFromName(msg, "yellowgreen") }
export function sienna(msg: string) { return unitFromName(msg, "sienna") }
export function brown(msg: string) { return unitFromName(msg, "brown") }
export function darkgray(msg: string) { return unitFromName(msg, "darkgray") }
export function lightblue(msg: string) { return unitFromName(msg, "lightblue") }
export function greenyellow(msg: string) { return unitFromName(msg, "greenyellow") }
export function paleturquoise(msg: string) { return unitFromName(msg, "paleturquoise") }
export function lightsteelblue(msg: string) { return unitFromName(msg, "lightsteelblue") }
export function firebrick(msg: string) { return unitFromName(msg, "firebrick") }
export function darkgoldenrod(msg: string) { return unitFromName(msg, "darkgoldenrod") }
export function mediumorchid(msg: string) { return unitFromName(msg, "mediumorchid") }
export function rosybrown(msg: string) { return unitFromName(msg, "rosybrown") }
export function darkkhaki(msg: string) { return unitFromName(msg, "darkkhaki") }
export function indianred(msg: string) { return unitFromName(msg, "indianred") }
export function goldenrod(msg: string) { return unitFromName(msg, "goldenrod") }
export function palevioletred(msg: string) { return unitFromName(msg, "palevioletred") }
export function crimson(msg: string) { return unitFromName(msg, "crimson") }
export function lavender(msg: string) { return unitFromName(msg, "lavender") }
export function darksalmon(msg: string) { return unitFromName(msg, "darksalmon") }
export function palegoldenrod(msg: string) { return unitFromName(msg, "palegoldenrod") }
export function lightcoral(msg: string) { return unitFromName(msg, "lightcoral") }
export function aliceblue(msg: string) { return unitFromName(msg, "aliceblue") }
export function honeydew(msg: string) { return unitFromName(msg, "honeydew") }
export function wheat(msg: string) { return unitFromName(msg, "wheat") }
export function deeppink(msg: string) { return unitFromName(msg, "deeppink") }
export function darkorange(msg: string) { return unitFromName(msg, "darkorange") }
export function gold(msg: string) { return unitFromName(msg, "gold") }
export function peachpuff(msg: string) { return unitFromName(msg, "peachpuff") }
export function papayawhip(msg: string) { return unitFromName(msg, "papayawhip") }
export function powderblue(msg: string) { return unitFromName(msg, "powderblue") }
export function chocolate(msg: string) { return unitFromName(msg, "chocolate") }
export function tan(msg: string) { return unitFromName(msg, "tan") }
export function lightgray(msg: string) { return unitFromName(msg, "lightgray") }
export function silver(msg: string) { return unitFromName(msg, "silver") }
export function mediumvioletred(msg: string) { return unitFromName(msg, "mediumvioletred") }
export function fuchsia(msg: string) { return unitFromName(msg, "fuchsia") }
export function peru(msg: string) { return unitFromName(msg, "peru") }
export function thistle(msg: string) { return unitFromName(msg, "thistle") }
export function orchid(msg: string) { return unitFromName(msg, "orchid") }
export function gainsboro(msg: string) { return unitFromName(msg, "gainsboro") }
export function plum(msg: string) { return unitFromName(msg, "plum") }
export function burlywood(msg: string) { return unitFromName(msg, "burlywood") }
export function lightcyan(msg: string) { return unitFromName(msg, "lightcyan") }
export function violet(msg: string) { return unitFromName(msg, "violet") }
export function khaki(msg: string) { return unitFromName(msg, "khaki") }
export function azure(msg: string) { return unitFromName(msg, "azure") }
export function beige(msg: string) { return unitFromName(msg, "beige") }
export function whitesmoke(msg: string) { return unitFromName(msg, "whitesmoke") }
export function mintcream(msg: string) { return unitFromName(msg, "mintcream") }
export function ghostwhite(msg: string) { return unitFromName(msg, "ghostwhite") }
export function salmon(msg: string) { return unitFromName(msg, "salmon") }
export function sandybrown(msg: string) { return unitFromName(msg, "sandybrown") }
export function antiquewhite(msg: string) { return unitFromName(msg, "antiquewhite") }
export function linen(msg: string) { return unitFromName(msg, "linen") }
export function lightgoldenrodyellow(msg: string) { return unitFromName(msg, "lightgoldenrodyellow") }
export function oldlace(msg: string) { return unitFromName(msg, "oldlace") }
export function red(msg: string) { return unitFromName(msg, "red") }
export function magenta(msg: string) { return unitFromName(msg, "magenta") }
export function orangered(msg: string) { return unitFromName(msg, "orangered") }
export function tomato(msg: string) { return unitFromName(msg, "tomato") }
export function hotpink(msg: string) { return unitFromName(msg, "hotpink") }
export function coral(msg: string) { return unitFromName(msg, "coral") }
export function lightsalmon(msg: string) { return unitFromName(msg, "lightsalmon") }
export function orange(msg: string) { return unitFromName(msg, "orange") }
export function lightpink(msg: string) { return unitFromName(msg, "lightpink") }
export function pink(msg: string) { return unitFromName(msg, "pink") }
export function navajowhite(msg: string) { return unitFromName(msg, "navajowhite") }
export function moccasin(msg: string) { return unitFromName(msg, "moccasin") }
export function bisque(msg: string) { return unitFromName(msg, "bisque") }
export function mistyrose(msg: string) { return unitFromName(msg, "mistyrose") }
export function blanchedalmond(msg: string) { return unitFromName(msg, "blanchedalmond") }
export function lavenderblush(msg: string) { return unitFromName(msg, "lavenderblush") }
export function seashell(msg: string) { return unitFromName(msg, "seashell") }
export function cornsilk(msg: string) { return unitFromName(msg, "cornsilk") }
export function lemonchiffon(msg: string) { return unitFromName(msg, "lemonchiffon") }
export function floralwhite(msg: string) { return unitFromName(msg, "floralwhite") }
export function snow(msg: string) { return unitFromName(msg, "snow") }
export function yellow(msg: string) { return unitFromName(msg, "yellow") }
export function lightyellow(msg: string) { return unitFromName(msg, "lightyellow") }
export function ivory(msg: string) { return unitFromName(msg, "ivory") }
export function white(msg: string) { return unitFromName(msg, "white") }
export function fr(msg: string, color: RgbColorChannels | string) {
  return unitFromName(msg, color)
}

export function createUnit(...args: any[]) {
  return new TextUnit(...args);
}

export function createText(...args: any[]) {
  return new ColorText(...args);
}

// const template = `

// # 一级标题

// edfwq ad fc sed tgh rtg #{red} hes fdeg sr **tgoi eahr** gfer grla *iouh rnrt* tyh #{/red} wthg etrg hrth rrth

// ## 二级标题

// ### 三级标题

// `

export function print(...args: any[]) {
  const _ = new ColorText()
  for (let index in args) {
    _.push(args[index])
  }
  _.print()
}

export const h1 = () => {
  return
}
export const h2 = () => { }
export const h3 = () => { }
export const h4 = () => { }
export const h5 = () => { }
export const h6 = () => { }
export const  line = (num:number, contents:any, ) => {

}
export const timeLine = () => {

}

export const json = () => { }

export const trace = () => {}
export const debug = () => {}
export const info = () => {}
export const warn = () => {}
export const error = () => {}
export const fatal = () => {}