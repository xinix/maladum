import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { db } from '@/db'
import {
    FilterFormType,
    MaladumToken,
    ProductType,
    SIZE_ENUM,
    SIZE_NUMBERS,
    TokenColor,
    TokenRarity,
    TokenSize,
    TokenType,
} from '@/tokens/types.ts'
import { loadDataJson } from '@/helpers/data-loader.ts'

export const useTokens = defineStore('tokens', () => {
    const changed = ref(true)
    const loading = ref(false)
    const rawItems = ref<any[]>([])

    const active = ref('')

    // filter
    const q = ref('')
    const tutorial = ref(false)
    const colors = ref<TokenColor[]>([])
    const rarities = ref<TokenRarity[]>([])
    const sizes = ref<TokenSize[]>([])

    function convertToken(token: TokenType): MaladumToken {
        return {
            ...token,
            key: `${token.product}-${token.slug}`,
            size: SIZE_NUMBERS[token.size],
        }
    }

    function sortTokens(a: MaladumToken, b: MaladumToken) {
        return (
            a.color.localeCompare(b.color) ||
            a.size - b.size ||
            a.rarity.localeCompare(b.rarity) ||
            a.name.localeCompare(b.name)
        )
    }

    function setQ(value: string) {
        q.value = value
    }

    const items = computed(() => {
        const src: string = q.value.toLowerCase().trim()
        let result = [...rawItems.value]
        if (src != '') {
            const qs = q.value
                .toLowerCase()
                .split(',')
                .map((term) => term.trim())
                .filter((term) => term != '')
            result = result.filter((a) =>
                qs.some((q) => {
                    if (q.startsWith('"') && q.endsWith('"') && q.length > 1) {
                        return (
                            a.name.toLowerCase() ==
                            q.toLocaleLowerCase().replace(/"/g, '')
                        )
                    } else {
                        return a.name.toLowerCase().indexOf(q) >= 0
                    }
                }),
            )
        }
        if (tutorial.value) {
            result = result.filter((a) => a.description != undefined && a.description.indexOf('tutorial') >= 0)
        }
        if (colors.value.length > 0) {
            result = result.filter((a) => colors.value.indexOf(a.color) >= 0)
        }
        if (rarities.value.length > 0) {
            result = result.filter((a) => rarities.value.indexOf(a.rarity) >= 0)
        }
        if (sizes.value.length > 0) {
            result = result.filter(
                (a) => sizes.value.indexOf(SIZE_ENUM[a.size]) >= 0,
            )
        }
        return result
    })

    function getItemByKey(key: string) {
        return db.tokens.get({ key })
    }

    async function load(products: ProductType[]) {
        loading.value = true
        changed.value = false
        rawItems.value.splice(0, rawItems.value.length)
        for (const product of products) {
            const total = await db.tokens.where({ product }).count()
            if (total > 0) continue

            try {
                const data = (await loadDataJson(product)) as TokenType[]
                await db.tokens.bulkAdd(data.map(convertToken))
            } catch (error) {
                console.error(`Could not fetch "${product}"`, error)
            }
        }
        rawItems.value.push(
            ...(
                await db.tokens.where('product').anyOf(products).toArray()
            ).sort(sortTokens),
        )
        loading.value = false
    }

    function setChanged() {
        changed.value = true
    }

    function filter(form: FilterFormType) {
        tutorial.value = form.tutorial.length > 0
        colors.value.splice(0, colors.value.length, ...form.colors)
        rarities.value.splice(0, rarities.value.length, ...form.rarities)
        sizes.value.splice(0, sizes.value.length, ...form.sizes)
    }

    return {
        active,
        q,
        changed,
        loading,
        items,
        colors,
        rarities,
        sizes,
        load,
        setQ,
        getItemByKey,
        setChanged,
        filter,
    }
})
