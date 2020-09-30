<template>
  <div id="app">
    <component-header />
    <component-main><router-view /></component-main>
    <component-footer />
  </div>
</template>

<script lang="ts">
import { VueInitialize } from '@/types/'

export default VueInitialize.extend({
  name: 'App',
  components: {
    componentHeader: () => import('@/components/Header.vue'),
    componentMain: () => import('@/components/Main.vue'),
    componentFooter: () => import('@/components/Footer.vue')
  }
})
</script>

<style lang="scss">
@use '@/assets/scss/reset.scss';
</style>
