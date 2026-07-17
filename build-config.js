const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

const url = process.env.FEISHU_WEBHOOK_URL || '';
const content = `window.APP_CONFIG = ${JSON.stringify({ feishuWebhookUrl: url })};\n`;

fs.writeFileSync(path.join(__dirname, 'config.js'), content, 'utf8');

if (!url) {
  console.warn('警告: FEISHU_WEBHOOK_URL 未设置，通知功能将不可用');
} else {
  console.log('config.js 已生成');
}
