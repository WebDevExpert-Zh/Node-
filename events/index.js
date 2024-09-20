// Node.js的核心API都是采用异步事件驱动架构，简单来说就是通过有效的方法来监听事件状态的变化，并在变化的时候做出响应
// Node.js 事件模型采用了发布订阅者模式
const eventEmitter = require("events");

// 发布订阅模式 off on emit once
const emit = new eventEmitter();
const getName = (name) => {
  console.log(name,'once');
  
}
// 订阅
emit.on("test", getName);
// 只订阅一次
emit.once("test", getName);
// 取消订阅
// emit.off("test", getName);
// 发布
emit.emit("test", "zh");
emit.emit("test", "zh1");
emit.emit("test", "zh2");