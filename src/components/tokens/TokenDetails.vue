<script lang="ts" setup>
import { computed } from 'vue'
import { MaladumToken, SIZE_ENUM } from '@/tokens/types.ts'
import JustText from '@/components/tokens/JustText.vue'
import IconLegend from '@/components/tokens/IconLegend.vue'
import RangeLegend from '@/components/tokens/RangeLegend.vue'
import RarityLegend from '@/components/tokens/RarityLegend.vue'

const props = withDefaults(
    defineProps<{ item: MaladumToken; active?: boolean }>(),
    { active: false },
)

const tag = computed(() => (props.active ? 'div' : 'router-link'))

const wrapperClass = computed(() => {
    const cls: any = {
        active: props.active,
    }
    const size = SIZE_ENUM[props.item.size]
    cls[size] = true
    cls[props.item.color] = true
    return cls
})

const tokenClass = computed(() => {
    const cls: any = {}
    const size = SIZE_ENUM[props.item.size]
    cls[props.item.product] = true
    cls[size] = true
    cls[props.item.slug] = true
    return cls
})

const rarity = computed(() => {
    if (props.item.rarity) {
        return `${props.item.rarity}`
    }
    return ''
})
</script>
<template>
    <component
        :is="tag"
        :class="wrapperClass"
        :to="{ name: 'token', params: { slug: item.key } }"
        class="token-details"
        tabindex="-1"
    >
        <figure :class="tokenClass" class="token"></figure>
        <header class="title">
            <h3>{{ item.name }}</h3>
            <dl v-if="active" class="dl">
                <dt v-if="item.buy">{{ $t('buy') }}:</dt>
                <dd v-if="item.buy">{{ item.buy }}</dd>
                <dt v-if="item.sell">{{ $t('sell') }}:</dt>
                <dd v-if="item.sell">{{ item.sell }}</dd>
            </dl>
            <div v-else class="prices">
                <div v-if="item.buy">
                    <small :title="$t('buy')" class="material-symbols-rounded"
                        >arrow_downward</small
                    >
                    <span>{{ item.buy }}</span>
                </div>
                <div v-if="item.sell">
                    <small :title="$t('sell')" class="material-symbols-rounded"
                        >arrow_upward</small
                    >
                    <span>{{ item.sell }}</span>
                </div>
            </div>
        </header>
        <section v-if="active" class="more">
            <ul class="list">
                <JustText
                    v-for="attr in item.description"
                    :key="attr"
                    :attribute="attr"
                    tag="li"
                />
                <RarityLegend :value="rarity" tag="li" />
            </ul>
            <ul v-if="item.attributes" class="list">
                <RangeLegend v-if="item.range" :range="item.range" tag="li" />
                <IconLegend
                    v-for="attr in item.attributes"
                    :key="attr"
                    :icon="attr"
                    tag="li"
                />
            </ul>
        </section>
    </component>
</template>
<style lang="scss" scoped>
.token-details {
    display: grid;
    margin: 0.5em;
    padding: 0.75em;
    transition:
        transform 0.2s ease-out,
        background-color 0.2s ease,
        box-shadow 0.2s ease-in;
    text-decoration: none;
    color: inherit;
    grid-row-gap: 0.5em;

    &:not(.active) {
        justify-content: center;
        min-width: 7rem;
        cursor: pointer;
        border-radius: 0.5em;
        background-color: var(--transparent-bg);
        box-shadow: var(--shadow-md);

        &:active,
        &:hover {
            transform: scale(1.05);
            color: var(--primary-contrast);
            background-color: var(--primary-transparent);
        }
    }

    &.active {
        position: relative;
        flex: 1;
        max-width: 900px;
        grid-template-columns: auto 1fr;
        grid-gap: 1rem 1rem;
        grid-template-areas:
            'token title'
            'more  more';

        header {
            font-size: 1.25em;
        }

        .token {
            grid-area: token;
        }

        .title {
            grid-area: title;
        }

        .more {
            grid-area: more;
        }

        h3 {
            font-size: 1.25em;
            max-width: fit-content;
            margin-bottom: 0.125em;
            text-align: left;
        }
    }

    &:not(.active) {
        h3 {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            display: inline-block;
        }
    }

    h3 {
        font-family: var(--font-main), sans-serif;
        font-size: 1.125em;
        font-weight: bold;
    }

    .prices,
    .prices > div {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
    }
}

.more {
    align-self: flex-start;
    border-radius: 0.5em;
    background-color: var(--transparent-bg);
    box-shadow: var(--shadow-md);
    backdrop-filter: blur(5px);
}

.list {
    font-size: 1.25em;
    margin: 1em;
    list-style: none;
}

.list + .list,
.list li + li {
    margin-top: 1em;
    padding-top: 1em;
    border-top: inset 3px var(--primary-transparent);
}

@media (max-width: 600px) {
    .token-details.active {
        margin: 0;
        padding: 0.325em;

        .more {
            padding: 0.5em;
            background-color: transparent;

            .list {
                margin: 0;
            }
        }

        &.blue .more,
        &.red .more,
        &.yellow .more,
        &.purple .more,
        &.black .more {
            box-shadow: none;
        }
    }
    .token-details.active.md,
    .token-details.active.lg,
    .token-details.active.xl,
    .token-details.active.xxl {
        grid-template-columns: 1fr;
        grid-template-areas:
            'token'
            'title'
            'more';

        .token {
            justify-self: center;
        }
    }
}

@media (min-width: 1000px) {
    .token-details.active {
        max-width: 1400px;
        grid-template-columns: minmax(5em, 1fr) 3fr;
        grid-template-rows: min-content 1fr;

        grid-template-areas:
            'title more'
            'token more';

        .token.xl,
        .token .xxl {
            position: absolute;
            transform: scale(0.65) translateX(-25%);
        }
    }
}
</style>
