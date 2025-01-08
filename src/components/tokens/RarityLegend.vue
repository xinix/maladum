<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const props = defineProps<{
    tag: string
    value: string
}>()

const { t } = useI18n()
const text = computed(() => t(`rarity_${props.value}`))
</script>

<template>
    <component :is="tag" class="icon-description">
        <figure :class="value" class="rarity">&nbsp;</figure>
        <span v-html="text"></span>
    </component>
</template>

<style lang="scss" scoped>
.icon-description .rarity {
    overflow: hidden;

    &:before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        border-width: 0 1.5rem 1.5rem 0;
        border-style: solid;
        border-color: pink transparent;
    }

    &.common:before {
        border-color: #05e004 transparent;
    }

    &.uncommon:before {
        border-color: #f2e000 transparent;
    }

    &.rare:before {
        border-color: #43caff transparent;
    }

    &.exclusive:before {
        border-color: #fff transparent;
    }
}
</style>
