import { onMounted } from 'vue'

import * as Cesium from 'cesium'
import { useBaseMapConfigFn } from './useBaseMapConfigFn'
import {
  CesiumCameraConfig,
  CesiumLightSourceConfig,
  CesiumPerformanceConfig,
} from '../types/baseMapConfig'

let viewer: Cesium.Viewer

export const useIndexFn = () => {
  const { getMapUrl, getCesiumMapConfig, queryMapConfig } = useBaseMapConfigFn()

  const { viewerConfig, cameraConfig, lightSourceConfig, performanceConfig } = getCesiumMapConfig()
  // 初始化地图
  const initCesiumMap = (
    params?: {
      id?: string | Element // 地图容器
      mapUrl?: string // 底图url
    },
    config?: {
      viewerConfig?: Cesium.Viewer.ConstructorOptions
      cameraConfig?: CesiumCameraConfig
      lightSourceConfig?: CesiumLightSourceConfig
      performanceConfig?: CesiumPerformanceConfig
    },
  ) => {
    // 互联网使用的地图
    Cesium.Ion.defaultAccessToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJjZGU1ZTE1Yy01NWI5LTRjZWMtOTI2ZS0wMmE1NmJhM2YyMWUiLCJpZCI6MzQwOTQ5LCJpYXQiOjE3NTc3NDg1NzF9.7x7VeEgRwsLjk3tgaklEZkv7sL3hlpnp-Q9Ju5di0GQ'
    viewer = new Cesium.Viewer(
      params ? params.id : 'cesium-map',
      config.viewerConfig || viewerConfig,
    )

    //====================
    //     底图配置
    //====================
    //#region
    const urlTemplateImageryProvider = new Cesium.UrlTemplateImageryProvider({
      url: params ? params.mapUrl || getMapUrl() : getMapUrl(),
      tilingScheme: new Cesium.GeographicTilingScheme(),
    })
    // 加载底图
    viewer.imageryLayers.addImageryProvider(urlTemplateImageryProvider)
    //#endregion

    //====================
    //     相机配置
    //====================
    //#region
    const [lng, lat, height] = cameraConfig.destination
    viewer.camera.setView({
      destination: Cesium.Cartesian3.fromDegrees(lng, lat, height), // 经度, 纬度, 高度
      orientation: {
        heading: Cesium.Math.toRadians(cameraConfig.orientation.heading || 0.0), // 偏航角（东）
        pitch: Cesium.Math.toRadians(cameraConfig.orientation.pitch || -90.0), // 俯仰角（下）
        roll: cameraConfig.orientation.roll || 0.0, // 翻滚角（无）
      },
    })
    //#endregion

    //====================
    //     光源配置
    //====================
    //#region
    // 调整大气亮度
    viewer.scene.skyAtmosphere.brightnessShift = lightSourceConfig.brightnessShift || 0.125
    // 启用光照效果
    viewer.scene.globe.enableLighting = lightSourceConfig.enableLighting || false
    //#endregion

    //====================
    //    性能优化配置
    //====================
    //#region
    // 启用地形深度测试，提高渲染质量但可能影响性能
    viewer.scene.globe.depthTestAgainstTerrain = performanceConfig.depthTestAgainstTerrain || false
    // 设置最大渲染时间变化，避免长时间渲染导致的应用冻结或卡顿
    viewer.scene.maximumRenderTimeChange = performanceConfig.maximumRenderTimeChange || 0.01
    //#endregion
  }

  onMounted(() => {
    queryMapConfig()
  })

  return { initCesiumMap }
}
