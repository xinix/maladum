<script lang="ts" setup>
import RangeIcon from '@/components/icons/RangeIcon.vue'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps<{
    tag: string
    range: number[]
}>()

const { t } = useI18n()
const text = computed(() => {
    const result = [t('ranged')]
    let distance = 1
    for (const range of props.range) {
        result.push(t(`ranged_${distance}`, range))
        distance++
    }
    return result.join('<br><br>')
})
</script>

<template>
    <component :is="tag" class="icon-description">
        <figure>
            <RangeIcon />
        </figure>
        <span v-html="text"></span>
    </component>
</template>
