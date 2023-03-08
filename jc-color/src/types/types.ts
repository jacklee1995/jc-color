
declare type DisplatMode = 
  | 'bold'             // 亮白色，粗体
  | 'dark'             // 暗色
  | 'italic'           // 斜体
  | 'underline'        // 下划线
  | 'glimmer'          // 闪烁
  | 'reverse'          // 前景色和背景色反转（互换）
  | 'inverseFore'      // 前景色求反色，若反转，则在反转的基础上求反色
  | 'inverseBg'        // 背景色求反色，若反转，则在反转的基础上求反色
  | 'hidden'           // 隐藏
  | 'delete'           // 删除
  | 'underline_double' // 双下划线
  | 'overline'            // 上划线
  | 'clear'               // 清屏




export { DisplatMode };
