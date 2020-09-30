<template>
  <main class="main">
    <div class="main__inner">
      <slot />
    </div>
  </main>
</template>

<script lang="ts">
import { VueInitialize } from '@/types/'

export default VueInitialize.extend({
  name: 'ComponentMain'
})
</script>

<style lang="scss" scoped>
@use '@/assets/scss/common.scss';
@use 'sass:map';

.main {
  padding: 0 16px;

  &__inner {
    max-width: 800px;
    margin: 0 auto;
  }
}
</style>
