<template>
  <header class="header">
    <div class="header__inner">
      <h1 class="header__title"><router-link to="/">Yamabico</router-link></h1>
    </div>
  </header>
</template>

<script lang="ts">
import { VueInitialize } from '@/types/'

export default VueInitialize.extend({
  name: 'ComponentHeader'
})
</script>

<style lang="scss" scoped>
@use '@/assets/scss/common.scss';
@use 'sass:map';

.header {
  padding: 0 16px;

  &__inner {
    max-width: 800px;
    padding: 32px 0 16px;
    margin: 0 auto;
  }

  &__title {
    font-size: 2.4rem;
    font-weight: bold;
    margin-bottom: 16px;

    > a {
      text-decoration: none;
    }

    @include common.mq-min(common.$SIZE_PC) {
      font-size: 3.2rem;
    }
  }
}
</style>
