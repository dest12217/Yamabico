<template>
  <div class="call">
    <c-box>
        <form class="form" autocomplete="off" @submit.prevent="submit()" novalidate>
          <input type="hidden" :value="service.key">
          <c-fieldset title="合言葉をどうぞ">
            <c-input :data="formData.aikotoba" />
          </c-fieldset>
          <c-button type="submit">表示</c-button>
        </form>
    </c-box>
    <c-box v-show="phrase.length">
      <div class="output">
        <c-button-copy type="button" :class="{
          'is-loading': copyLoading
        }" :click="copy">
          <output>{{ createPhrase(phrase) }}</output>
        </c-button-copy>
      </div>
    </c-box>
    <p><router-link to="/">戻る</router-link></p>
  </div>
</template>

<script lang="ts">
import axios from 'axios'
import { CallData, ServicesItem, VueInitialize } from '@/types/'

export default VueInitialize.extend({
  name: 'Call',

  components: {
    cBox: () => import('@/components/Box.vue'),
    cButton: () => import('@/components/Button.vue'),
    cButtonCopy: () => import('@/components/Button--copy.vue'),
    cFieldset: () => import('@/components/Fieldset.vue'),
    cInput: () => import('@/components/Input.vue')
  },

  data (): CallData {
    return {
      formData: {
        aikotoba: {
          value: '',
          error: false
        }
      },
      phrase: '',
      copyLoading: false
    }
  },

  computed: {
    service (): ServicesItem {
      return this.$store.getters['services/items'][this.$route.query.service.toString()]
    }
  },

  created () {
    if (!this.$route.query.service || !this.service) this.$router.push('/')
  },

  methods: {
    validation (): boolean {
      let correct = true

      for (const key in this.formData) {
        if ({}.hasOwnProperty.call(this.formData, key)) {
          if (this.formData[key].value.length < 2 || this.formData[key].value.length > 16) {
            this.formData[key].error = true
            correct = false
          } else {
            this.formData[key].error = false
          }
        }
      }

      return correct
    },

    createPhrase (phrase: string): string {
      const characters = phrase.split('')
      const symbol = () => {
        characters[this.service.key.length] = '-'
      }
      const upperCase = () => {
        characters.forEach((character, index) => {
          if ((index % 2) === 0) characters[index] = character.toUpperCase()
        })
      }

      switch (this.service.type) {
        case 'aA0':
          upperCase()
          break

        case 'a@':
        case 'a0@':
          symbol()
          break

        case 'aA0@':
          symbol()
          upperCase()
          break

        default: // 'a0'
      }

      return characters.join('')
    },

    submit () {
      const parameters = new URLSearchParams()

      if (!this.validation()) return

      parameters.append('service', this.service.key)
      parameters.append('aikotoba', this.formData.aikotoba.value)

      axios.post<string>('/yamabico/api/index.php', parameters).then(({ data }) => {
        this.phrase = data
      })
    },

    copy () {
      if (this.copyLoading) return

      this.copyLoading = true

      navigator.clipboard.writeText(this.createPhrase(this.phrase))

      // TODO: CSSアニメーションが終わり次第.is-loadingを外す
      setTimeout(() => {
        this.copyLoading = false
      }, 1500)
    }
  }
})
</script>

<style lang="scss" scoped>
@use '@/assets/scss/common.scss';

.form {
  @include common.mq-min(common.$SIZE_PC) {
    max-width: 500px;
    margin: 0 auto;
  }

  &__title {
    font-size: 2rem;
    margin-bottom: 16px;
  }
}

.output {
  @include common.mq-min(common.$SIZE_PC) {
    max-width: 500px;
    margin: 0 auto;
  }
}
</style>
