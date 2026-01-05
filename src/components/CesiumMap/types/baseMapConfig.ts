// 地图基础配置
export interface BaseMapConfig {
  mapUrl: string // 地图底图的url地址
  //cesium地图的配置项
  cesiumConfig: CesiumMapConfig
  // leaflet的配置项 目前暂不支持
  leafletConfig: {}
}

//====================
// cesium地图的配置项
//====================
//#region
// 总体配置
export interface CesiumMapConfig {
  // 视图配置
  viewerConfig: CesiumViewerConfig
  // 相机配置
  cameraConfig: CesiumCameraConfig
  // 光源配置
  lightSourceConfig: CesiumLightSourceConfig
  // 性能配置
  performanceConfig: CesiumPerformanceConfig
}

// cesium viewer 配置
export interface CesiumViewerConfig {
  // 是否显示基础图层选择器
  baseLayerPicker: boolean
  // 是否显示时间轴组件
  timeline: boolean
  // 是否显示动画组件
  animation: boolean
  // 是否显示场景模式选择组件 （2D/3D/哥伦布视图）
  sceneModePicker: boolean
  // 是否显示选择指示器
  selectionIndicator: boolean
  // 是否显示全屏按钮
  fullscreenButton: boolean
  // 是否显示VR按钮
  vrButton: boolean
  // 是否显示地名查找组件
  geocoder: boolean
  // 是否显示投影切换组件
  projectionPicker: boolean
  // 是否显示导航帮助按钮
  navigationHelpButton: boolean
  // 是否显示主页按钮
  homeButton: boolean
  // 是否显示信息框
  infoBox: boolean
}

// cesium camera相机配置
export interface CesiumCameraConfig {
  destination: [number, number, number] // 经度, 纬度, 高度
  orientation: {
    heading: number // 偏航角（东）
    pitch: number // 俯仰角（下）
    roll: number // 翻滚角（无）
  }
}

// cesium 光源配置
export interface CesiumLightSourceConfig {
  // 调整大气亮度
  brightnessShift: number
  // 是否启用光照效果
  enableLighting: boolean
}

// cesium 性能配置
export interface CesiumPerformanceConfig {
  // 启用地形深度测试，提高渲染质量但可能影响性能
  depthTestAgainstTerrain: boolean
  // 设置最大渲染时间变化，避免长时间渲染导致的应用冻结或卡顿
  maximumRenderTimeChange: number
}

//#endregion
