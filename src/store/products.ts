import { defineStore } from 'pinia'
import { ProductType } from '@/tokens/types.ts'
import { computed, ref } from 'vue'
import {
    getUserCollection,
    setUserCollection,
} from '@/helpers/local-storage.ts'

export const useProducts = defineStore('products', () => {
    const productOptions: ProductType[] = ['maladum', 'beasts']

    const active = ref<ProductType[]>([])

    const hist = getUserCollection()
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
            beasts: 'https://battlesystems.co.uk/product/maladum-beasts-of-enveron-expansion/',
        }[product]
    }

    function save() {
        setUserCollection(active.value.join(';'))
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
