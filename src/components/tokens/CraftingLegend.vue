<script lang="ts" setup>
import { resolveCraftingResources } from '@/helpers/crafting'
import { MaladumToken } from '@/tokens/types'
import { computed } from 'vue'
import IconLegend from '@/components/tokens/IconLegend.vue'

const props = withDefaults(
    defineProps<{ token: MaladumToken; tag?: string }>(),
    { tag: 'div' },
)

const icons = computed(() =>
    resolveCraftingResources(
        props.token.crafting ?? [],
        props.token.description,
    ),
)
</script>
<template>
    <IconLegend
        v-for="icon in icons"
        :key="icon"
        :legend="icon"
        :tag="tag"
        icon="crafting"
    />
</template>
