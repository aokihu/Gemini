/**
 * Gemini ESHOP API Beckend
 *
 * [中文说明]
 *
 * 这是本人开发用于电子商务的后台系统，整套后台通过API形式交换数据
 */

// Import third libs
// 第三方库引用
import * as Koa from 'koa';

// Main entrypoint
async function main() {

  // #1
  // Load config file
  // 加载配置文件
  //

  // #2
  // Load data models
  // 加载数据模型
  //

  // #3
  // Load Koa routers
  // 加载Koa的路由配置
  //

  //
  // #4
  // Start Koa http server
  // 启动Koa http服务器
  //
  const httpServer:Koa = new Koa()
  httpServer.listen(/*port*/)

}



main();
