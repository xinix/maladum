export type ProductType = 'maladum'

export type TokenColor = 'blue' | 'red' | 'yellow' | 'purple' | 'black'

export type TokenSize = 'md' | 'lg' | 'xl' | 'xxl' | 'sm' | 'xs' | 'xxs'

export type AttributeType = 'forceful' | 'melee' | 'rest' | 'sharp'

export type ItemDescription = 'flame-fuel'

export type TokenRarity =
    | 'tutorial'
    | 'common'
    | 'uncommon'
    | 'rare'
    | 'exclusive'

export const SIZE_NUMBERS = {
    xxs: 0,
    xs: 1,
    sm: 2,
    md: 3,
    lg: 4,
    xl: 5,
    xxl: 6,
}

export const SIZE_ENUM: any = {
    0: 'xxs',
    1: 'xs',
    2: 'sm',
    3: 'md',
    4: 'lg',
    5: 'xl',
    6: 'xxl',
}

type BaseToken = {
    slug: string
    name: string
    count: number
    product: ProductType
    rarity: TokenRarity
    color: TokenColor
    buy?: number | number[]
    sell?: number | number[]
    description?: ItemDescription[]
    attributes?: AttributeType[]
    restore_health?: number
}

export type TokenType = BaseToken & {
    size: TokenSize
}

export type MaladumToken = BaseToken & {
    key: string
    size: number
}
