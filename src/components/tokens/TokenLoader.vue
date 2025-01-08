<template>
    <TokenDetails v-if="item" :item="item" active class="item" />
</template>
<script lang="ts" setup>
import TokenDetails from '@/components/tokens/TokenDetails.vue'

import { ref } from 'vue'
import { useTokens } from '@/store/tokens'
import { MaladumToken } from '@/tokens/types.ts'

const tokens = useTokens()
const props = defineProps<{ slug: string }>()

const item = ref<MaladumToken>()

item.value = await tokens.getItemByKey(props.slug)
</script>
