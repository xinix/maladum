<script lang="ts" setup>
import { MinMaxValue } from '@/tokens/types.ts'
import { computed } from 'vue'
import BaseCheckbox from '@/components/forms/BaseCheckbox.vue'

const props = defineProps<{
    modelValue: MinMaxValue
    placeholder: string
}>()

const emit = defineEmits(['update:modelValue'])

const isActive = computed({
    get: () =>
        props.modelValue.min > 0 || props.modelValue.max > 0 ? ['on'] : [],
    set: (value) => {
        if (value.length > 0) {
            emit('update:modelValue', { min: 0, max: 999 })
            return
        }
        emit('update:modelValue', { min: 0, max: 0 })
    },
})

const min = computed({
    get: () => props.modelValue.min,
    set: (value) => {
        emit('update:modelValue', { ...props.modelValue, min: value })
    },
})

const max = computed({
    get: () => props.modelValue.max,
    set: (value) => {
        emit('update:modelValue', { ...props.modelValue, max: value })
    },
})
</script>

<template>
    <div class="min-max-input">
        <BaseCheckbox v-model="isActive" label="" value="on" />
        <template v-if="isActive.length">
            <input v-model="min" min="0" step="1" type="number" />
            <span>..</span>
            <input v-model="max" min="0" step="1" type="number" />
        </template>
        <span v-else>{{ $t(placeholder) }}</span>
    </div>
</template>

<style lang="scss">
.min-max-input {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5em;
    align-items: center;
    justify-items: center;

    input {
        color: var(--input-color);
        border: solid 1px var(--input-border);
        border-radius: var(--input-radius);
        background-color: var(--input-bg);
        box-shadow: var(--glow);
        padding: 0.325rem 0.5rem;
        max-width: 100px;
    }
}
</style>
