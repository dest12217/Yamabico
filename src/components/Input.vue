<template>
  <div class="input">
    <input type="text" :class="{ 'is-error': data.error }" v-model="data.value" required>
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue'
import { VueInitialize } from '@/types/'

export type PropDataType = {
  value: string;
  error: boolean;
}

export default VueInitialize.extend({
  name: 'ComponentInput',
  props: {
    data: {
      type: Object as PropType<PropDataType>,
      default: () => ({
        value: '',
        error: false
      })
    }
  }
})
</script>

<style lang="scss" scoped>
  @use '@/assets/scss/common.scss';
  @use 'sass:map';

  .input {
    margin-bottom: 16px;

    > input {
      border: solid 1px common.$C_BORDER;
      border-radius: 4px;
      width: 100%;
      height: 2.5em;
      padding: 0.5em 16px;
      outline: 0;

      &.is-error {
        border-color: map.get(common.$COLOR, red);
      }
    }
  }
</style>
