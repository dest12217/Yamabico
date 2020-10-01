<template>
  <div class="home">
    <ul class="index">
      <li class="index__item" v-for="(service, index) in services" :key="service.key">
        <router-link class="index__link" :to="{
          path: '/call',
          query: {
            service: index
          }
        }">
          <span class="index__text">
            <font-awesome-icon class="index__icon fa-fw" v-if="service.icon" :icon="service.icon" />
            {{ service.name }}
          </span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { VueInitialize } from '@/types/'

export default VueInitialize.extend({
  name: 'Home',

  computed: {
    services () {
      return this.$store.getters['services/items']
    }
  }
})
</script>

<style lang="scss" scoped>
@use '@/assets/scss/components/index.scss';
</style>
