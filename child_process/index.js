// child_process 子进程
const {
  exec,
  execSync,
  spawn,
  spawnSync,
  execFile,
  execFileSync,
  fork,
} = require("child_process");
const path = require("path");
// 在node.js中 异步方法的回调函数返回的是一个 buffer
// exec 可以帮我们执行shell命令 或者软件交互 有字节上限 超过200kb 报错
exec("node -v", (err, stdout, stderr) => {
  console.log(stdout.toString());
  console.log(stderr);
});

// execSync
const nodeVersion = execSync("node -v");
console.log(nodeVersion.toString());
// execSync("mkdir test");
// execSync("start chrome http://wwww.baidu.com");

// spawn 没有字节上线 返回的是流 实时返回
// const { stdout } = spawn("netstat");
// console.log(stdout);
// stdout.on("data", (e) => {
//   console.log(e.toString());
// });

// execFile 执行可执行的文件
// execFile(path.resolve(__dirname, "./test.cmd"), null, (err, stdout) => {
//   console.log(stdout.toString());
// });

// fork 创建子进程
// sonFork 是返回的子进程
const sonFork = fork("./son.js");
sonFork.send("我是主进程");
