

function calcColorChannels(c: string) {
  // 从字符串中移除前导空格和尾随空格以及行终止符，在将#号去掉，得到纯十六进制数字颜色值
  let rawColor = c.trim().replace('#', '')
  if (/^[0-9a-fA-F]{3}$/.test(rawColor)) {
    rawColor =
      rawColor[0].repeat(2) + rawColor[1].repeat(2) + rawColor[2].repeat(2)
  }
  if (/^[0-9a-fA-F]{6}$/.test(rawColor)) {
    return {
      red: parseInt(rawColor.slice(0, 2), 16),
      green: parseInt(rawColor.slice(2, 4), 16),
      blue: parseInt(rawColor.slice(4, 6), 16),
    }
  }
  return {
    red: 255,
    green: 255,
    blue: 255,
  }
}

function hexToRgb(hex: string): string {
  return ""
}

function rgbToHex(hex: string): string {
  return ""
}

export {
  hexToRgb,
  rgbToHex
}