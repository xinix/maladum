<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function onBack(ev: MouseEvent) {
  if (router.currentRoute.value.name === 'trading-post') {
    return router.push({ name: 'trading-posts' })
  }

  router.push('/')
  return ev
}
</script>
<template>
  <button class="mbtn" type="button" v-bind="$attrs" @click="onBack">
    <span class="material-symbols-rounded icon">arrow_back</span>
    <span class="label">{{ $t('back') }}</span>
  </button>
</template>
<style lang="scss" scoped>
@media (max-width: 600px) {
  .label {
    display: none;
  }
}
</style>
