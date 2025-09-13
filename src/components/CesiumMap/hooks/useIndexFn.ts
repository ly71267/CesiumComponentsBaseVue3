import * as Cesium from 'cesium'

let viewer: Cesium.Viewer

export const useIndexFn = () => {
  // 初始化地图
  const initCesiumMap = () => {
    Cesium.Ion.defaultAccessToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJjZGU1ZTE1Yy01NWI5LTRjZWMtOTI2ZS0wMmE1NmJhM2YyMWUiLCJpZCI6MzQwOTQ5LCJpYXQiOjE3NTc3NDg1NzF9.7x7VeEgRwsLjk3tgaklEZkv7sL3hlpnp-Q9Ju5di0GQ'
    viewer = new Cesium.Viewer('cesium-map', {
      // 主页按钮
      homeButton: false,
    })
  }

  return { initCesiumMap }
}
