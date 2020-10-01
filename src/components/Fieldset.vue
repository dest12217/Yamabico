<template>
  <fieldset>
    <legend class="fieldset__title">{{ title }}</legend>
    <div class="fieldset__content"><slot /></div>
  </fieldset>
</template>

<script lang="ts">
import { VueInitialize } from '@/types/'

export default VueInitialize.extend({
  name: 'ComponentFieldset',

  props: {
    title: {
      type: String,
      default: ''
    }
  }
})
</script>

<style lang="scss" scoped>
.fieldset {
  &__title {
    font-size: 2rem;
    margin-bottom: 16px;
  }
}
</style>
