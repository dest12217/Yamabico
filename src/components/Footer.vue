<template>
  <footer class="footer">
    <div class="footer__inner">
      <p class="footer__copy"><small>&copy; 2020 desto.me</small></p>
    </div>
  </footer>
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

.footer {
  padding: 0 16px;

  &__inner {
    max-width: 800px;
    padding: 32px 0;
    margin: 0 auto;
  }

  &__copy {
    font-size: 1.4rem;
    text-align: center;
  }
}
</style>
