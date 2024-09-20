const { execSync } = require("child_process");
// 视频转gif
execSync("ffmpeg -i test.mp4 test.gif");

// 视频转mp3
execSync("ffmpeg -i test.mp4 test.mp3");

// 视频裁剪
execSync("ffmpeg -i test.mp4 -ss 00:00:00 -to 00:00:10 test.mp4");

// 添加水印
execSync(
  "ffmpeg -i test.mp4 -vf drawtext=text='zh':fontsize=20:x=10:y=20:fontcolor=yellow test3.mp4"
);

// 删除水印
execSync("ffmepg -i test.mp4 -vf delogo=width120:height120:x=0:y=0 test2.mp4");
