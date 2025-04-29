<script lang="ts" setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const props = withDefaults(
    defineProps<{
        icon: string
        tag?: string
        mustache?: number | number[] | null
        legend?: string
    }>(),
    {
        tag: 'div',
        mustache: null,
        legend: '',
    },
)
const { t } = useI18n()
const leIcon = computed(() => props.icon.replaceAll('-', '_'))

const imgSrc = computed(() => `/maladum/icons/${leIcon.value}.png`)

const pivot: any = {
    ammo_arrow: 'ammunition',
    ammo_blade: 'ammunition',
    ammo_bullet: 'ammunition',
    ammo_dart: 'ammunition',
    ammo_shuriken: 'ammunition',
    bludgeoning_immunity: 'immunity',
}

const text = computed(() => {
    const icon = leIcon.value
    let legend = props.legend === '' ? icon : props.legend
    if (pivot[icon] != null) {
        legend = pivot[icon]
    }
    if (props.mustache != null) {
        return t(
            legend,
            Array.isArray(props.mustache) ? props.mustache : [props.mustache],
        )
    }
    return t(legend)
})
</script>
<template>
    <component :is="tag" class="icon-description">
        <figure>
            <img :alt="leIcon" :src="imgSrc" class="attribute-icon" />
        </figure>
        <span v-html="text" />
    </component>
</template>
