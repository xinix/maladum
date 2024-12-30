import { defineStore } from 'pinia'
import { ProductType } from '@/tokens/types.ts'
import { computed, ref } from 'vue'

export const useProducts = defineStore('products', () => {
    const productOptions: ProductType[] = ['maladum']

    const active = ref<ProductType[]>([])

    const hist = window.localStorage.getItem('my-collection')
    if (hist != null) {
        const products: ProductType[] = hist.split(';') as ProductType[]
        active.value.push(...products)
    } else {
        active.value.push('maladum')
    }

    const inCollectionCount = computed(() => active.value.length)
    const totalCount = computed(() => productOptions.length)
    const options = computed(() => productOptions)

    function getBuyNowLink(product: ProductType) {
        return {
            maladum:
                'https://battlesystems.co.uk/product/maladum-dungeons-of-enveron-starter-set/',
        }[product]
    }

    function save() {
        window.localStorage.setItem('my-collection', active.value.join(';'))
    }

    return {
        active,
        inCollectionCount,
        totalCount,
        options,
        getBuyNowLink,
        save,
    }
})
