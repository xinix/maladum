import Dexie, { Table } from 'dexie'
import { MaladumToken } from '@/tokens/types.ts'

export class MaladumDB extends Dexie {
    tokens!: Table<MaladumToken>

    constructor() {
        super('maladum')

        this.version(1).stores({
            tokens: '&key, product, name, color, size, rarity, [rarity+color+size+name], buy, sell',
        })

        this.version(2).upgrade((tx) => {
            tx.table('tokens').clear()
        })

        // e.g. CLEAR tokens table on upgrade
        // this.version(2).upgrade((tx) => tx.table('tokens').clear())
    }
}

export const db = new MaladumDB()
