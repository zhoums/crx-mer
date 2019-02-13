let willbeServer='http://47.107.35.8:8281/spider';
if(process.env.NODE_ENV=="development"){
  willbeServer='http://spider.ittun.com/spider'
}else if(process.env.NODE_ENV=='local'){
  willbeServer='http://spider.ittun.com/spider'
}
let config = {
  backEndHost: willbeServer,
  //请求淘宝接口的时间间隔
  max_interval: 1000,
  min_interval: 350,
}



export const app_version = '1.2.3'; //全量数据 30天
export const app_vs = 5;

export default config;
