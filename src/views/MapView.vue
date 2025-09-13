<template>
  <div class="map w-full">
    <CesiumMap></CesiumMap>
  </div>
</template>

<script lang="ts" setup>
import CesiumMap from '@/components/CesiumMap/index.vue'
</script>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MapView',
})
</script>

<style lang="scss" scoped>
.map {
  height: 0px;
  flex: 1;
}
</style>
