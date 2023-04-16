/** @module creator 
 * @description
 * #### creator (Module)
 * TODO: How to get the function name from the inside.
 * const setBgColor = (unit: TextUnit) => {
 * return {
 * blackBg: (): TextUnit => { unit.bgColor = "black"; return unit },
 * navyBg: (): TextUnit => { unit.bgColor = "navy"; return unit },
 * darkblueBg: (): TextUnit => { unit.bgColor = "darkblue"; return unit },
 * mediumblueBg: (): TextUnit => { unit.bgColor = "mediumblue"; return unit },
 * blueBg: (): TextUnit => { unit.bgColor = "blue"; return unit },
 * darkgreenBg: (): TextUnit => { unit.bgColor = "darkgreen"; return unit },
 * greenBg: (): TextUnit => { unit.bgColor = "green"; return unit },
 * tealBg: (): TextUnit => { unit.bgColor = "teal"; return unit },
 * darkcyanBg: (): TextUnit => { unit.bgColor = "darkcyan"; return unit },
 * deepskyblueBg: (): TextUnit => { unit.bgColor = "deepskyblue"; return unit },
 * darkturquoiseBg: (): TextUnit => { unit.bgColor = "darkturquoise"; return unit },
 * mediumspringgreenBg: (): TextUnit => { unit.bgColor = "mediumspringgreen"; return unit },
 * limeBg: (): TextUnit => { unit.bgColor = "lime"; return unit },
 * springgreenBg: (): TextUnit => { unit.bgColor = "springgreen"; return unit },
 * aquaBg: (): TextUnit => { unit.bgColor = "aqua"; return unit },
 * cyanBg: (): TextUnit => { unit.bgColor = "cyan"; return unit },
 * midnightblueBg: (): TextUnit => { unit.bgColor = "midnightblue"; return unit },
 * dodgerblueBg: (): TextUnit => { unit.bgColor = "dodgerblue"; return unit },
 * lightseagreenBg: (): TextUnit => { unit.bgColor = "lightseagreen"; return unit },
 * forestgreenBg: (): TextUnit => { unit.bgColor = "forestgreen"; return unit },
 * seagreenBg: (): TextUnit => { unit.bgColor = "seagreen"; return unit },
 * darkslategrayBg: (): TextUnit => { unit.bgColor = "darkslategray"; return unit },
 * limegreenBg: (): TextUnit => { unit.bgColor = "limegreen"; return unit },
 * mediumseagreenBg: (): TextUnit => { unit.bgColor = "mediumseagreen"; return unit },
 * turquoiseBg: (): TextUnit => { unit.bgColor = "turquoise"; return unit },
 * royalblueBg: (): TextUnit => { unit.bgColor = "royalblue"; return unit },
 * steelblueBg: (): TextUnit => { unit.bgColor = "steelblue"; return unit },
 * mediumturquoiseBg: (): TextUnit => { unit.bgColor = "mediumturquoise"; return unit },
 * darkslateblueBg: (): TextUnit => { unit.bgColor = "darkslateblue"; return unit },
 * indigoBg: (): TextUnit => { unit.bgColor = "indigo"; return unit },
 * darkolivegreenBg: (): TextUnit => { unit.bgColor = "darkolivegreen"; return unit },
 * cadetblueBg: (): TextUnit => { unit.bgColor = "cadetblue"; return unit },
 * cornflowerblueBg: (): TextUnit => { unit.bgColor = "cornflowerblue"; return unit },
 * mediumaquamarineBg: (): TextUnit => { unit.bgColor = "mediumaquamarine"; return unit },
 * dimgrayBg: (): TextUnit => { unit.bgColor = "dimgray"; return unit },
 * slateblueBg: (): TextUnit => { unit.bgColor = "slateblue"; return unit },
 * olivedrabBg: (): TextUnit => { unit.bgColor = "olivedrab"; return unit },
 * slategrayBg: (): TextUnit => { unit.bgColor = "slategray"; return unit },
 * lightslategrayBg: (): TextUnit => { unit.bgColor = "lightslategray"; return unit },
 * mediumslateblueBg: (): TextUnit => { unit.bgColor = "mediumslateblue"; return unit },
 * lawngreenBg: (): TextUnit => { unit.bgColor = "lawngreen"; return unit },
 * chartreuseBg: (): TextUnit => { unit.bgColor = "chartreuse"; return unit },
 * aquamarineBg: (): TextUnit => { unit.bgColor = "aquamarine"; return unit },
 * maroonBg: (): TextUnit => { unit.bgColor = "maroon"; return unit },
 * purpleBg: (): TextUnit => { unit.bgColor = "purple"; return unit },
 * oliveBg: (): TextUnit => { unit.bgColor = "olive"; return unit },
 * grayBg: (): TextUnit => { unit.bgColor = "gray"; return unit },
 * lightskyblueBg: (): TextUnit => { unit.bgColor = "lightskyblue"; return unit },
 * skyblueBg: (): TextUnit => { unit.bgColor = "skyblue"; return unit },
 * bluevioletBg: (): TextUnit => { unit.bgColor = "blueviolet"; return unit },
 * darkredBg: (): TextUnit => { unit.bgColor = "darkred"; return unit },
 * darkmagentaBg: (): TextUnit => { unit.bgColor = "darkmagenta"; return unit },
 * saddlebrownBg: (): TextUnit => { unit.bgColor = "saddlebrown"; return unit },
 * darkseagreenBg: (): TextUnit => { unit.bgColor = "darkseagreen"; return unit },
 * lightgreenBg: (): TextUnit => { unit.bgColor = "lightgreen"; return unit },
 * mediumpurpleBg: (): TextUnit => { unit.bgColor = "mediumpurple"; return unit },
 * darkvioletBg: (): TextUnit => { unit.bgColor = "darkviolet"; return unit },
 * palegreenBg: (): TextUnit => { unit.bgColor = "palegreen"; return unit },
 * darkorchidBg: (): TextUnit => { unit.bgColor = "darkorchid"; return unit },
 * yellowgreenBg: (): TextUnit => { unit.bgColor = "yellowgreen"; return unit },
 * siennaBg: (): TextUnit => { unit.bgColor = "sienna"; return unit },
 * brownBg: (): TextUnit => { unit.bgColor = "brown"; return unit },
 * darkgrayBg: (): TextUnit => { unit.bgColor = "darkgray"; return unit },
 * lightblueBg: (): TextUnit => { unit.bgColor = "lightblue"; return unit },
 * greenyellowBg: (): TextUnit => { unit.bgColor = "greenyellow"; return unit },
 * paleturquoiseBg: (): TextUnit => { unit.bgColor = "paleturquoise"; return unit },
 * lightsteelblueBg: (): TextUnit => { unit.bgColor = "lightsteelblue"; return unit },
 * firebrickBg: (): TextUnit => { unit.bgColor = "firebrick"; return unit },
 * darkgoldenrodBg: (): TextUnit => { unit.bgColor = "darkgoldenrod"; return unit },
 * mediumorchidBg: (): TextUnit => { unit.bgColor = "mediumorchid"; return unit },
 * rosybrownBg: (): TextUnit => { unit.bgColor = "rosybrown"; return unit },
 * darkkhakiBg: (): TextUnit => { unit.bgColor = "darkkhaki"; return unit },
 * indianredBg: (): TextUnit => { unit.bgColor = "indianred"; return unit },
 * goldenrodBg: (): TextUnit => { unit.bgColor = "goldenrod"; return unit },
 * palevioletredBg: (): TextUnit => { unit.bgColor = "palevioletred"; return unit },
 * crimsonBg: (): TextUnit => { unit.bgColor = "crimson"; return unit },
 * lavenderBg: (): TextUnit => { unit.bgColor = "lavender"; return unit },
 * darksalmonBg: (): TextUnit => { unit.bgColor = "darksalmon"; return unit },
 * palegoldenrodBg: (): TextUnit => { unit.bgColor = "palegoldenrod"; return unit },
 * lightcoralBg: (): TextUnit => { unit.bgColor = "lightcoral"; return unit },
 * aliceblueBg: (): TextUnit => { unit.bgColor = "aliceblue"; return unit },
 * honeydewBg: (): TextUnit => { unit.bgColor = "honeydew"; return unit },
 * wheatBg: (): TextUnit => { unit.bgColor = "wheat"; return unit },
 * deeppinkBg: (): TextUnit => { unit.bgColor = "deeppink"; return unit },
 * darkorangeBg: (): TextUnit => { unit.bgColor = "darkorange"; return unit },
 * goldBg: (): TextUnit => { unit.bgColor = "gold"; return unit },
 * peachpuffBg: (): TextUnit => { unit.bgColor = "peachpuff"; return unit },
 * papayawhipBg: (): TextUnit => { unit.bgColor = "papayawhip"; return unit },
 * powderblueBg: (): TextUnit => { unit.bgColor = "powderblue"; return unit },
 * chocolateBg: (): TextUnit => { unit.bgColor = "chocolate"; return unit },
 * tanBg: (): TextUnit => { unit.bgColor = "tan"; return unit },
 * lightgrayBg: (): TextUnit => { unit.bgColor = "lightgray"; return unit },
 * silverBg: (): TextUnit => { unit.bgColor = "silver"; return unit },
 * mediumvioletredBg: (): TextUnit => { unit.bgColor = "mediumvioletred"; return unit },
 * fuchsiaBg: (): TextUnit => { unit.bgColor = "fuchsia"; return unit },
 * peruBg: (): TextUnit => { unit.bgColor = "peru"; return unit },
 * thistleBg: (): TextUnit => { unit.bgColor = "thistle"; return unit },
 * orchidBg: (): TextUnit => { unit.bgColor = "orchid"; return unit },
 * gainsboroBg: (): TextUnit => { unit.bgColor = "gainsboro"; return unit },
 * plumBg: (): TextUnit => { unit.bgColor = "plum"; return unit },
 * burlywoodBg: (): TextUnit => { unit.bgColor = "burlywood"; return unit },
 * lightcyanBg: (): TextUnit => { unit.bgColor = "lightcyan"; return unit },
 * violetBg: (): TextUnit => { unit.bgColor = "violet"; return unit },
 * khakiBg: (): TextUnit => { unit.bgColor = "khaki"; return unit },
 * azureBg: (): TextUnit => { unit.bgColor = "azure"; return unit },
 * beigeBg: (): TextUnit => { unit.bgColor = "beige"; return unit },
 * whitesmokeBg: (): TextUnit => { unit.bgColor = "whitesmoke"; return unit },
 * mintcreamBg: (): TextUnit => { unit.bgColor = "mintcream"; return unit },
 * ghostwhiteBg: (): TextUnit => { unit.bgColor = "ghostwhite"; return unit },
 * salmonBg: (): TextUnit => { unit.bgColor = "salmon"; return unit },
 * sandybrownBg: (): TextUnit => { unit.bgColor = "sandybrown"; return unit },
 * antiquewhiteBg: (): TextUnit => { unit.bgColor = "antiquewhite"; return unit },
 * linenBg: (): TextUnit => { unit.bgColor = "linen"; return unit },
 * lightgoldenrodyellowBg: (): TextUnit => { unit.bgColor = "lightgoldenrodyellow"; return unit },
 * oldlaceBg: (): TextUnit => { unit.bgColor = "oldlace"; return unit },
 * redBg: (): TextUnit => { unit.bgColor = "red"; return unit },
 * magentaBg: (): TextUnit => { unit.bgColor = "magenta"; return unit },
 * orangeredBg: (): TextUnit => { unit.bgColor = "orangered"; return unit },
 * tomatoBg: (): TextUnit => { unit.bgColor = "tomato"; return unit },
 * hotpinkBg: (): TextUnit => { unit.bgColor = "hotpink"; return unit },
 * coralBg: (): TextUnit => { unit.bgColor = "coral"; return unit },
 * lightsalmonBg: (): TextUnit => { unit.bgColor = "lightsalmon"; return unit },
 * orangeBg: (): TextUnit => { unit.bgColor = "orange"; return unit },
 * lightpinkBg: (): TextUnit => { unit.bgColor = "lightpink"; return unit },
 * pinkBg: (): TextUnit => { unit.bgColor = "pink"; return unit },
 * navajowhiteBg: (): TextUnit => { unit.bgColor = "navajowhite"; return unit },
 * moccasinBg: (): TextUnit => { unit.bgColor = "moccasin"; return unit },
 * bisqueBg: (): TextUnit => { unit.bgColor = "bisque"; return unit },
 * mistyroseBg: (): TextUnit => { unit.bgColor = "mistyrose"; return unit },
 * blanchedalmondBg: (): TextUnit => { unit.bgColor = "blanchedalmond"; return unit },
 * lavenderblushBg: (): TextUnit => { unit.bgColor = "lavenderblush"; return unit },
 * seashellBg: (): TextUnit => { unit.bgColor = "seashell"; return unit },
 * cornsilkBg: (): TextUnit => { unit.bgColor = "cornsilk"; return unit },
 * lemonchiffonBg: (): TextUnit => { unit.bgColor = "lemonchiffon"; return unit },
 * floralwhiteBg: (): TextUnit => { unit.bgColor = "floralwhite"; return unit },
 * snowBg: (): TextUnit => { unit.bgColor = "snow"; return unit },
 * yellowBg: (): TextUnit => { unit.bgColor = "yellow"; return unit },
 * lightyellowBg: (): TextUnit => { unit.bgColor = "lightyellow"; return unit },
 * ivoryBg: (): TextUnit => { unit.bgColor = "ivory"; return unit },
 * whiteBg: (): TextUnit => { unit.bgColor = "white"; return unit },
 * bg: (color: RgbColorChannels | string) => {
 * unit.bgColor = color;
 * return unit
 * },
 * get _() {
 * return unit;
 * },
 * print(){
 * return unit.print()
 * },
 * __str__(){
 * return str(unit)
 * }
 * }
 * }
 *
*/

 /**
  * TODO: How to get the function name from the inside.
  * 
  * @param {TextUnit} unit
  * 
  * @return {object} 
  * 
  *   Object detail:
  *     {
  *       return {
  *         blackBg: (): TextUnit => { unit.bgColor = "black"; return unit },
  *         navyBg: (): TextUnit => { unit.bgColor = "navy"; return unit },
  *         darkblueBg: (): TextUnit => { unit.bgColor = "darkblue"; return unit },
  *         mediumblueBg: (): TextUnit => { unit.bgColor = "mediumblue"; return unit },
  *         blueBg: (): TextUnit => { unit.bgColor = "blue"; return unit },
  *         darkgreenBg: (): TextUnit => { unit.bgColor = "darkgreen"; return unit },
  *         greenBg: (): TextUnit => { unit.bgColor = "green"; return unit },
  *         tealBg: (): TextUnit => { unit.bgColor = "teal"; return unit },
  *         darkcyanBg: (): TextUnit => { unit.bgColor = "darkcyan"; return unit },
  *         deepskyblueBg: (): TextUnit => { unit.bgColor = "deepskyblue"; return unit },
  *         darkturquoiseBg: (): TextUnit => { unit.bgColor = "darkturquoise"; return unit },
  *         mediumspringgreenBg: (): TextUnit => { unit.bgColor = "mediumspringgreen"; return unit },
  *         limeBg: (): TextUnit => { unit.bgColor = "lime"; return unit },
  *         springgreenBg: (): TextUnit => { unit.bgColor = "springgreen"; return unit },
  *         aquaBg: (): TextUnit => { unit.bgColor = "aqua"; return unit },
  *         cyanBg: (): TextUnit => { unit.bgColor = "cyan"; return unit },
  *         midnightblueBg: (): TextUnit => { unit.bgColor = "midnightblue"; return unit },
  *         dodgerblueBg: (): TextUnit => { unit.bgColor = "dodgerblue"; return unit },
  *         lightseagreenBg: (): TextUnit => { unit.bgColor = "lightseagreen"; return unit },
  *         forestgreenBg: (): TextUnit => { unit.bgColor = "forestgreen"; return unit },
  *         seagreenBg: (): TextUnit => { unit.bgColor = "seagreen"; return unit },
  *         darkslategrayBg: (): TextUnit => { unit.bgColor = "darkslategray"; return unit },
  *         limegreenBg: (): TextUnit => { unit.bgColor = "limegreen"; return unit },
  *         mediumseagreenBg: (): TextUnit => { unit.bgColor = "mediumseagreen"; return unit },
  *         turquoiseBg: (): TextUnit => { unit.bgColor = "turquoise"; return unit },
  *         royalblueBg: (): TextUnit => { unit.bgColor = "royalblue"; return unit },
  *         steelblueBg: (): TextUnit => { unit.bgColor = "steelblue"; return unit },
  *         mediumturquoiseBg: (): TextUnit => { unit.bgColor = "mediumturquoise"; return unit },
  *         darkslateblueBg: (): TextUnit => { unit.bgColor = "darkslateblue"; return unit },
  *         indigoBg: (): TextUnit => { unit.bgColor = "indigo"; return unit },
  *         darkolivegreenBg: (): TextUnit => { unit.bgColor = "darkolivegreen"; return unit },
  *         cadetblueBg: (): TextUnit => { unit.bgColor = "cadetblue"; return unit },
  *         cornflowerblueBg: (): TextUnit => { unit.bgColor = "cornflowerblue"; return unit },
  *         mediumaquamarineBg: (): TextUnit => { unit.bgColor = "mediumaquamarine"; return unit },
  *         dimgrayBg: (): TextUnit => { unit.bgColor = "dimgray"; return unit },
  *         slateblueBg: (): TextUnit => { unit.bgColor = "slateblue"; return unit },
  *         olivedrabBg: (): TextUnit => { unit.bgColor = "olivedrab"; return unit },
  *         slategrayBg: (): TextUnit => { unit.bgColor = "slategray"; return unit },
  *         lightslategrayBg: (): TextUnit => { unit.bgColor = "lightslategray"; return unit },
  *         mediumslateblueBg: (): TextUnit => { unit.bgColor = "mediumslateblue"; return unit },
  *         lawngreenBg: (): TextUnit => { unit.bgColor = "lawngreen"; return unit },
  *         chartreuseBg: (): TextUnit => { unit.bgColor = "chartreuse"; return unit },
  *         aquamarineBg: (): TextUnit => { unit.bgColor = "aquamarine"; return unit },
  *         maroonBg: (): TextUnit => { unit.bgColor = "maroon"; return unit },
  *         purpleBg: (): TextUnit => { unit.bgColor = "purple"; return unit },
  *         oliveBg: (): TextUnit => { unit.bgColor = "olive"; return unit },
  *         grayBg: (): TextUnit => { unit.bgColor = "gray"; return unit },
  *         lightskyblueBg: (): TextUnit => { unit.bgColor = "lightskyblue"; return unit },
  *         skyblueBg: (): TextUnit => { unit.bgColor = "skyblue"; return unit },
  *         bluevioletBg: (): TextUnit => { unit.bgColor = "blueviolet"; return unit },
  *         darkredBg: (): TextUnit => { unit.bgColor = "darkred"; return unit },
  *         darkmagentaBg: (): TextUnit => { unit.bgColor = "darkmagenta"; return unit },
  *         saddlebrownBg: (): TextUnit => { unit.bgColor = "saddlebrown"; return unit },
  *         darkseagreenBg: (): TextUnit => { unit.bgColor = "darkseagreen"; return unit },
  *         lightgreenBg: (): TextUnit => { unit.bgColor = "lightgreen"; return unit },
  *         mediumpurpleBg: (): TextUnit => { unit.bgColor = "mediumpurple"; return unit },
  *         darkvioletBg: (): TextUnit => { unit.bgColor = "darkviolet"; return unit },
  *         palegreenBg: (): TextUnit => { unit.bgColor = "palegreen"; return unit },
  *         darkorchidBg: (): TextUnit => { unit.bgColor = "darkorchid"; return unit },
  *         yellowgreenBg: (): TextUnit => { unit.bgColor = "yellowgreen"; return unit },
  *         siennaBg: (): TextUnit => { unit.bgColor = "sienna"; return unit },
  *         brownBg: (): TextUnit => { unit.bgColor = "brown"; return unit },
  *         darkgrayBg: (): TextUnit => { unit.bgColor = "darkgray"; return unit },
  *         lightblueBg: (): TextUnit => { unit.bgColor = "lightblue"; return unit },
  *         greenyellowBg: (): TextUnit => { unit.bgColor = "greenyellow"; return unit },
  *         paleturquoiseBg: (): TextUnit => { unit.bgColor = "paleturquoise"; return unit },
  *         lightsteelblueBg: (): TextUnit => { unit.bgColor = "lightsteelblue"; return unit },
  *         firebrickBg: (): TextUnit => { unit.bgColor = "firebrick"; return unit },
  *         darkgoldenrodBg: (): TextUnit => { unit.bgColor = "darkgoldenrod"; return unit },
  *         mediumorchidBg: (): TextUnit => { unit.bgColor = "mediumorchid"; return unit },
  *         rosybrownBg: (): TextUnit => { unit.bgColor = "rosybrown"; return unit },
  *         darkkhakiBg: (): TextUnit => { unit.bgColor = "darkkhaki"; return unit },
  *         indianredBg: (): TextUnit => { unit.bgColor = "indianred"; return unit },
  *         goldenrodBg: (): TextUnit => { unit.bgColor = "goldenrod"; return unit },
  *         palevioletredBg: (): TextUnit => { unit.bgColor = "palevioletred"; return unit },
  *         crimsonBg: (): TextUnit => { unit.bgColor = "crimson"; return unit },
  *         lavenderBg: (): TextUnit => { unit.bgColor = "lavender"; return unit },
  *         darksalmonBg: (): TextUnit => { unit.bgColor = "darksalmon"; return unit },
  *         palegoldenrodBg: (): TextUnit => { unit.bgColor = "palegoldenrod"; return unit },
  *         lightcoralBg: (): TextUnit => { unit.bgColor = "lightcoral"; return unit },
  *         aliceblueBg: (): TextUnit => { unit.bgColor = "aliceblue"; return unit },
  *         honeydewBg: (): TextUnit => { unit.bgColor = "honeydew"; return unit },
  *         wheatBg: (): TextUnit => { unit.bgColor = "wheat"; return unit },
  *         deeppinkBg: (): TextUnit => { unit.bgColor = "deeppink"; return unit },
  *         darkorangeBg: (): TextUnit => { unit.bgColor = "darkorange"; return unit },
  *         goldBg: (): TextUnit => { unit.bgColor = "gold"; return unit },
  *         peachpuffBg: (): TextUnit => { unit.bgColor = "peachpuff"; return unit },
  *         papayawhipBg: (): TextUnit => { unit.bgColor = "papayawhip"; return unit },
  *         powderblueBg: (): TextUnit => { unit.bgColor = "powderblue"; return unit },
  *         chocolateBg: (): TextUnit => { unit.bgColor = "chocolate"; return unit },
  *         tanBg: (): TextUnit => { unit.bgColor = "tan"; return unit },
  *         lightgrayBg: (): TextUnit => { unit.bgColor = "lightgray"; return unit },
  *         silverBg: (): TextUnit => { unit.bgColor = "silver"; return unit },
  *         mediumvioletredBg: (): TextUnit => { unit.bgColor = "mediumvioletred"; return unit },
  *         fuchsiaBg: (): TextUnit => { unit.bgColor = "fuchsia"; return unit },
  *         peruBg: (): TextUnit => { unit.bgColor = "peru"; return unit },
  *         thistleBg: (): TextUnit => { unit.bgColor = "thistle"; return unit },
  *         orchidBg: (): TextUnit => { unit.bgColor = "orchid"; return unit },
  *         gainsboroBg: (): TextUnit => { unit.bgColor = "gainsboro"; return unit },
  *         plumBg: (): TextUnit => { unit.bgColor = "plum"; return unit },
  *         burlywoodBg: (): TextUnit => { unit.bgColor = "burlywood"; return unit },
  *         lightcyanBg: (): TextUnit => { unit.bgColor = "lightcyan"; return unit },
  *         violetBg: (): TextUnit => { unit.bgColor = "violet"; return unit },
  *         khakiBg: (): TextUnit => { unit.bgColor = "khaki"; return unit },
  *         azureBg: (): TextUnit => { unit.bgColor = "azure"; return unit },
  *         beigeBg: (): TextUnit => { unit.bgColor = "beige"; return unit },
  *         whitesmokeBg: (): TextUnit => { unit.bgColor = "whitesmoke"; return unit },
  *         mintcreamBg: (): TextUnit => { unit.bgColor = "mintcream"; return unit },
  *         ghostwhiteBg: (): TextUnit => { unit.bgColor = "ghostwhite"; return unit },
  *         salmonBg: (): TextUnit => { unit.bgColor = "salmon"; return unit },
  *         sandybrownBg: (): TextUnit => { unit.bgColor = "sandybrown"; return unit },
  *         antiquewhiteBg: (): TextUnit => { unit.bgColor = "antiquewhite"; return unit },
  *         linenBg: (): TextUnit => { unit.bgColor = "linen"; return unit },
  *         lightgoldenrodyellowBg: (): TextUnit => { unit.bgColor = "lightgoldenrodyellow"; return unit },
  *         oldlaceBg: (): TextUnit => { unit.bgColor = "oldlace"; return unit },
  *         redBg: (): TextUnit => { unit.bgColor = "red"; return unit },
  *         magentaBg: (): TextUnit => { unit.bgColor = "magenta"; return unit },
  *         orangeredBg: (): TextUnit => { unit.bgColor = "orangered"; return unit },
  *         tomatoBg: (): TextUnit => { unit.bgColor = "tomato"; return unit },
  *         hotpinkBg: (): TextUnit => { unit.bgColor = "hotpink"; return unit },
  *         coralBg: (): TextUnit => { unit.bgColor = "coral"; return unit },
  *         lightsalmonBg: (): TextUnit => { unit.bgColor = "lightsalmon"; return unit },
  *         orangeBg: (): TextUnit => { unit.bgColor = "orange"; return unit },
  *         lightpinkBg: (): TextUnit => { unit.bgColor = "lightpink"; return unit },
  *         pinkBg: (): TextUnit => { unit.bgColor = "pink"; return unit },
  *         navajowhiteBg: (): TextUnit => { unit.bgColor = "navajowhite"; return unit },
  *         moccasinBg: (): TextUnit => { unit.bgColor = "moccasin"; return unit },
  *         bisqueBg: (): TextUnit => { unit.bgColor = "bisque"; return unit },
  *         mistyroseBg: (): TextUnit => { unit.bgColor = "mistyrose"; return unit },
  *         blanchedalmondBg: (): TextUnit => { unit.bgColor = "blanchedalmond"; return unit },
  *         lavenderblushBg: (): TextUnit => { unit.bgColor = "lavenderblush"; return unit },
  *         seashellBg: (): TextUnit => { unit.bgColor = "seashell"; return unit },
  *         cornsilkBg: (): TextUnit => { unit.bgColor = "cornsilk"; return unit },
  *         lemonchiffonBg: (): TextUnit => { unit.bgColor = "lemonchiffon"; return unit },
  *         floralwhiteBg: (): TextUnit => { unit.bgColor = "floralwhite"; return unit },
  *         snowBg: (): TextUnit => { unit.bgColor = "snow"; return unit },
  *         yellowBg: (): TextUnit => { unit.bgColor = "yellow"; return unit },
  *         lightyellowBg: (): TextUnit => { unit.bgColor = "lightyellow"; return unit },
  *         ivoryBg: (): TextUnit => { unit.bgColor = "ivory"; return unit },
  *         whiteBg: (): TextUnit => { unit.bgColor = "white"; return unit },
  *         bg: (color: RgbColorChannels | string) => {
  *           unit.bgColor = color;
  *           return unit
  *         },
  *         get _() {
  *           return unit;
  *         },
  *         print(){
  *           return unit.print()
  *         },
  *         __str__(){
  *           return str(unit)
  *         }
  *       }
  *     }
  * @private
  */
 function setBgColor(unit) { 
 }

 /**
  * @param {string} msg
  * @param {RgbColorChannels|string} foreColorName
  * @private
  */
 function unitFromName(msg, foreColorName) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function black(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function navy(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function darkblue(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function mediumblue(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function blue(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function darkgreen(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function green(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function teal(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function darkcyan(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function deepskyblue(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function darkturquoise(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function mediumspringgreen(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function lime(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function springgreen(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function aqua(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function cyan(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function midnightblue(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function dodgerblue(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function lightseagreen(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function forestgreen(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function seagreen(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function darkslategray(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function limegreen(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function mediumseagreen(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function turquoise(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function royalblue(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function steelblue(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function mediumturquoise(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function darkslateblue(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function indigo(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function darkolivegreen(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function cadetblue(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function cornflowerblue(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function mediumaquamarine(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function dimgray(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function slateblue(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function olivedrab(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function slategray(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function lightslategray(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function mediumslateblue(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function lawngreen(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function chartreuse(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function aquamarine(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function maroon(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function purple(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function olive(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function gray(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function lightskyblue(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function skyblue(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function blueviolet(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function darkred(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function darkmagenta(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function saddlebrown(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function darkseagreen(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function lightgreen(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function mediumpurple(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function darkviolet(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function palegreen(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function darkorchid(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function yellowgreen(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function sienna(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function brown(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function darkgray(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function lightblue(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function greenyellow(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function paleturquoise(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function lightsteelblue(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function firebrick(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function darkgoldenrod(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function mediumorchid(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function rosybrown(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function darkkhaki(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function indianred(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function goldenrod(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function palevioletred(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function crimson(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function lavender(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function darksalmon(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function palegoldenrod(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function lightcoral(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function aliceblue(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function honeydew(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function wheat(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function deeppink(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function darkorange(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function gold(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function peachpuff(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function papayawhip(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function powderblue(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function chocolate(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function tan(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function lightgray(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function silver(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function mediumvioletred(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function fuchsia(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function peru(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function thistle(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function orchid(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function gainsboro(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function plum(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function burlywood(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function lightcyan(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function violet(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function khaki(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function azure(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function beige(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function whitesmoke(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function mintcream(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function ghostwhite(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function salmon(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function sandybrown(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function antiquewhite(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function linen(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function lightgoldenrodyellow(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function oldlace(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function red(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function magenta(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function orangered(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function tomato(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function hotpink(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function coral(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function lightsalmon(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function orange(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function lightpink(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function pink(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function navajowhite(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function moccasin(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function bisque(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function mistyrose(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function blanchedalmond(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function lavenderblush(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function seashell(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function cornsilk(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function lemonchiffon(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function floralwhite(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function snow(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function yellow(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function lightyellow(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function ivory(msg) { 
 }

 /**
  * @param {string} msg
  * @public
  */
 function white(msg) { 
 }

 /**
  * @param {string} msg
  * @param {RgbColorChannels|string} color
  * @public
  */
 function fr(msg, color) { 
 }

 /**
  * @param {any[]} ...args
  * @public
  */
 function createUnit() { 
 }

 /**
  * @param {any[]} ...args
  * @public
  */
 function createText() { 
 }

