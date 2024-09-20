const path = require("path");
// path.basename() 方法返回的是给定路径中的最后一部分
console.log(path.basename("/a/b/c.js"));
// dirname API 返回 /aaaa/bbbb/cccc 除了最后一个路径的其他路径。
console.log(path.dirname("/aaaa/bbbb/cccc/index.html"));
// 返回当前的工作目录
console.log(process.cwd());
console.log(__dirname);
// 内存信息
console.log(process.memoryUsage());
// 退出进程
// console.log(process.exit(0));
process.on("exit", () => {
  console.log("进程退出了");
});
// setTimeout(() => {
//   process.exit();
// }, 2000);
// 杀死进程
// setTimeout(() => {
//   process.kill(process.pid);
// }, 2000);
// 环境变量 获取操作系统所有的环境变量
console.log(process.env);
