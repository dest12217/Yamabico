<template>
  <div class="box"><slot /></div>
</template>

<script lang="ts">
import { VueInitialize } from '@/types/'

export default VueInitialize.extend({
  name: 'ComponentFooter'
})
</script>

<style lang="scss" scoped>
@use '@/assets/scss/common.scss';
@use 'sass:map';

.box {
  background: common.$C_BACKGROUND;
  box-shadow: common.$SHADOW;
  padding: 16px;
  margin-bottom: 24px;

  @include common.mq-min(common.$SIZE_PC) {
    padding: 24px 16px;
  }
}
</style>
