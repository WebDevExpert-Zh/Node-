// pngquant 是一个用于压缩 PNG 图像文件的工具。它可以显著减小 PNG 文件的大小，
// 同时保持图像质量和透明度。通过减小文件大小，可以提高网页加载速度，并节省存储空间。
// pngquant 提供命令行接口和库，可轻松集成到各种应用程序和脚本中。
const { exec } = require('child_process')
// const { pngquant } = require('./pngquant')

exec(`pngquant spokesSucc.png  --speed=1 --quality=82 --output test4.png` )