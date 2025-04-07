import { ProductType } from '@/tokens/types.ts'

const maladum = () => import('@/assets/data/maladum.json')
const beasts = () => import('@/assets/data/beasts.json')
const adventure = () => import('@/assets/data/adventure.json')

export function loadDataJson(product: ProductType) {
    return { maladum, beasts, adventure }
        [product]()
        .then((module: any) => module.default)
}
