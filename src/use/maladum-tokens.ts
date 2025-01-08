import { useTokens } from '@/store/tokens.ts'
import { useProducts } from '@/store/products.ts'
import { computed } from 'vue'

export function useMaladumTokens() {
    const tokens = useTokens()
    const products = useProducts()

    if (tokens.changed) {
        tokens.load(products.active).then()
    }

    const qSummary = computed(() =>
        tokens.q.length > 0
            ? `Search results for: <strong>${tokens.q}</strong>`
            : '',
    )

    const containerClass = computed(() => ({
        'with-q': tokens.q !== '',
    }))

    function onClear(ev: any) {
        tokens.setQ('')
        return ev
    }

    const items = computed(() => tokens.items)
    const loading = computed(() => tokens.loading)

    return { qSummary, containerClass, items, loading, onClear }
}
