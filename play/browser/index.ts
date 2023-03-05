import { TextUnit, createUnit, fr, red, ColorText, createText, lime } from 'jc-color'

new TextUnit("I am a colored text.", "#FF7DA6", "rgb(6,43,253)").print();
createUnit("Hello JC Color", "#FFFF00", "rgb(142,243,157)").print();

red("JC Color")._.print();
red("JC Color").blueBg().print();
fr("JC Color","#FB6D04")._.print();
fr("JC Color","rgb(217,38,132)").chocolateBg().print();
fr("JC Color",{red: 113, green: 18, blue:237}).bg("#FFEC00").print();


createText(lime("lime")._, fr("JC Color","Red").goldenrodBg()).print();
