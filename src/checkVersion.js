import config from './config'
export const versionObj = () => {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: `${moli_host}/spider/checkUpdate.wb?vs=1`,
      success(res) {
        resolve(res);
      },
      faile(err) {
        reject(err)
      }
    })
  })
}
let moli_host, frontEndHost;
moli_host = config.backEndHost
frontEndHost = config.tbPlatform;

export {
  moli_host,
  // frontEndHost
}
