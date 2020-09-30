<template>
  <div class="button --flip">
    <button :type="type" @click="executeClick()">
      <span><slot /><font-awesome-icon :icon="['fas', 'copy']" class="button__icon" aria-label="コピーする" /></span>
    </button>
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue'
import { VueInitialize } from '@/types/'

export default VueInitialize.extend({
  name: 'ComponentButtonCopy',

  props: {
    type: {
      type: String,
      default: 'button'
    },
    click: {
      type: Function as PropType<() => void>
    }
  },

  methods: {
    executeClick () {
      if (this.click) this.click()
    }
  }
})
</script>

<style lang="scss" scoped>
  @use '@/assets/scss/common.scss';
  @use '@/assets/scss/components/button.scss';
  @use 'sass:map';

  @keyframes loading {
    0% {
      right: 100%;
    }

    70% {
      right: 0;
      opacity: 1;
    }

    80% {
      right: 0;
      opacity: 1;
    }

    100% {
      right: 0;
      opacity: 0;
    }
  }

  .button {
    > a,
    > button {
      position: relative;
      text-align: left;
      padding-right: 48px;

      &::before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        right: 100%;
        bottom: 0;
        left: 0;
        background: rgba(map.get(common.$COLOR, dark-purple), 0.2);
      }
    }

    &__icon {
      position: absolute;
      right: 16px;
      top: calc(50% - 8px);
    }

    &.is-loading {
      > a,
      > button {
        &::before {
          animation: loading 1.5s forwards;
        }
      }
    }
  }
</style>
