<template>
  <div class="button">
    <button :type="type">
      <span><slot /></span>
    </button>
  </div>
</template>

<script lang="ts">
import { VueInitialize } from '@/types/'

export default VueInitialize.extend({
  name: 'ComponentButton',
  props: {
    type: {
      type: String,
      default: 'button'
    }
  }
})
</script>

<style lang="scss" scoped>
  @use '@/assets/scss/components/button.scss';
</style>
