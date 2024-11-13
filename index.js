// 获取画布和上下文
const canvas = document.getElementById('map');
const ctx = canvas.getContext('2d');

// 设置画布尺寸为全屏
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 模拟地图数据 (网格)
const gridSize = 50; // 网格的大小
const mapWidth = 2000; // 地图的宽度
const mapHeight = 2000; // 地图的高度

// 偏移量 (地图初始位置)
const offsetX = -500; // x 轴偏移
const offsetY = -500; // y 轴偏移
const scale = 1; // 地图缩放比例

// 路线数据 (在网格中的坐标点)
const route = [
  { x: 100, y: 100 },
  { x: 300, y: 150 },
  { x: 500, y: 400 },
  { x: 800, y: 600 },
  { x: 1000, y: 800 },
];

// 绘制地图
function drawMap() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // 清除画布
  ctx.save();

  // 平移和缩放
  ctx.translate(offsetX, offsetY);
  ctx.scale(scale, scale);

  // 绘制地图背景
  ctx.fillStyle = "#e9ecef";
  ctx.fillRect(0, 0, mapWidth, mapHeight);

  // 绘制网格线
  ctx.strokeStyle = "#adb5bd";
  ctx.lineWidth = 1;

  for (let x = 0; x <= mapWidth; x += gridSize) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, mapHeight);
    ctx.stroke();
  }

  for (let y = 0; y <= mapHeight; y += gridSize) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(mapWidth, y);
    ctx.stroke();
  }

  // 绘制路线
  drawRoute();

  ctx.restore();
}

// 绘制路线函数
function drawRoute() {
  ctx.beginPath();
  ctx.strokeStyle = "#ff6b6b"; // 路线颜色
  ctx.lineWidth = 3;
  ctx.lineJoin = "round";
  ctx.lineCap = "round";

  // 遍历路线点，绘制曲线路径
  for (let i = 0; i < route.length; i++) {
    const point = route[i];
    if (i === 0) {
      ctx.moveTo(point.x, point.y); // 路径起点
    } else {
      ctx.lineTo(point.x, point.y); // 连线到下一个点
    }
  }
  ctx.stroke();

  // 在每个路径点绘制标记
  ctx.fillStyle = "#1c7ed6"; // 路径点颜色
  for (const point of route) {
    ctx.beginPath();
    ctx.arc(point.x, point.y, 5, 0, Math.PI * 2); // 路径点圆形
    ctx.fill();
  }
}

// 调用绘制地图函数
drawMap();