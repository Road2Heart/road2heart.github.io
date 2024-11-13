const canvas = document.getElementById('map');
const ctx = canvas.getContext('2d');

// 设置画布全屏
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 模拟地图数据 (网格)
const gridSize = 50; // 网格大小
const mapWidth = 2000; // 地图宽度
const mapHeight = 2000; // 地图高度

// 初始地图状态
let offsetX = -500; // 地图的初始偏移量 (x 轴)
let offsetY = -500; // 地图的初始偏移量 (y 轴)
let scale = 1; // 初始缩放

// 绘制地图
function drawMap() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // 清除画布
  ctx.save();

  // 平移和缩放
  ctx.translate(offsetX, offsetY); // 偏移
  ctx.scale(scale, scale); // 缩放

  // 绘制网格
  ctx.fillStyle = "#e9ecef"; // 背景色
  ctx.fillRect(0, 0, mapWidth, mapHeight); // 绘制地图背景
  ctx.strokeStyle = "#adb5bd"; // 网格颜色
  ctx.lineWidth = 1;

  // 绘制垂直网格线
  for (let x = 0; x <= mapWidth; x += gridSize) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, mapHeight);
    ctx.stroke();
  }

  // 绘制水平网格线
  for (let y = 0; y <= mapHeight; y += gridSize) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(mapWidth, y);
    ctx.stroke();
  }

  ctx.restore(); // 恢复上下文状态
}

// 动画更新函数
function animateMap() {
  // 模拟动画效果 (缩放和平移)
  scale += 0.01; // 每帧缩放比例增加
  offsetX -= 5 * scale; // x 偏移增加，模拟地图向左滑动
  offsetY -= 5 * scale; // y 偏移增加，模拟地图向上滑动

  if (scale > 2) {
    // 如果缩放超过2倍，重置
    scale = 1;
    offsetX = -500;
    offsetY = -500;
  }

  drawMap(); // 每帧绘制地图
  requestAnimationFrame(animateMap); // 循环调用下一帧
}

// 初始化动画
drawMap(); // 初次绘制地图
animateMap(); // 开始动画
