import { ProductType } from '@/tokens/types.ts'

export function loadDataJson(product: ProductType) {
    return {
        maladum: require('@/assets/data/maladum.json'),
    }[product].then((module: any) => module.default)
}
