<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const props = defineProps<{
    tag: string
    value: string
}>()

const { t } = useI18n()
const text = computed(() => t(`rarity_${props.value}`))
const icon = computed(() => {
    switch (props.value) {
        case 'common':
            return 'change_history'
        case 'uncommon':
            return 'square'
        case 'rare':
            return 'circle'
        case 'exclusive':
            return 'star'
        default:
            return ''
    }
})
</script>

<template>
    <component :is="tag" class="icon-description">
        <span :class="value" class="rarity material-symbols-rounded">{{
            icon
        }}</span>
        <span v-html="text"></span>
    </component>
</template>

<style lang="scss" scoped>
.icon-description .rarity {
    text-align: center;
    font-weight: bold;
    font-size: 150%;

    &.common {
        color: #05e004;
    }

    &.uncommon {
        color: #f2e000;
    }

    &.rare {
        color: #43caff;
    }

    &.exclusive {
        color: var(--white-icon);
    }
}
</style>
