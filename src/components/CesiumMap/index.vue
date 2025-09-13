<template>
  <div id="cesium-map" class="w-full h-full"></div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useIndexFn } from './hooks/useIndexFn'

const { initCesiumMap } = useIndexFn()

onMounted(() => {
  initCesiumMap()
})
</script>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CesiumMap',
})
</script>

<style scoped lang="scss">
#cesium-map {
  background: #ff0000;
}
</style>
