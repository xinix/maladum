import { ProductType } from '@/tokens/types.ts'

const maladum = () => import('@/assets/data/maladum.json')

export function loadDataJson(product: ProductType) {
    return { maladum }[product]().then((module: any) => module.default)
}
