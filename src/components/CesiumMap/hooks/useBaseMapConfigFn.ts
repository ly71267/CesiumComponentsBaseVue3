import axios from 'axios'

import type { BaseMapConfig } from '../types/baseMapConfig'

let mapConfig: BaseMapConfig

export const useBaseMapConfigFn = () => {
  // 获取地图底图url地址
  const getMapUrl = () => {
    return mapConfig.mapUrl
  }

  // 获取 cesium地图的配置项
  const getCesiumMapConfig = () => {
    return mapConfig.cesiumConfig
  }

  // 获取 leaflet的配置项 目前暂不支持
  const getLeafletMapConfig = () => {
    return mapConfig.leafletConfig
  }

  //查询地图配置 (读取public/json/maoConfig.json)
  const queryMapConfig = async () => {
    await axios.get('/json/mapConfig.json').then((res) => {
      mapConfig = res.data
    })
  }

  return {
    getMapUrl, // 获取地图底图url地址
    getCesiumMapConfig, // 获取 cesium地图的配置项
    getLeafletMapConfig, // 获取 leaflet的配置项 目前暂不支持

    queryMapConfig, //查询地图底图url地址 (读取public/json/maoConfig.json)
  }
}
