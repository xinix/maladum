const resource: any = {
    S: 'steel',
    W: 'wood',
    T: 'textiles',
    R: 'riches',
    H: 'herbs',
    F: 'fungus',
    M: 'minerals',
    K: 'keltic_steel',
    G: 'graam_ore',
    B: 'powdered_drakon_bone',
    I: 'issen_oil',
    V: 'serpent_venom',
    A: 'alary_carapace',
    E: 'extract_of_maladite',
    N: 'necrotic_fluids'
}

export function resolveCraftingResources(crafting: string[], description: string[] = []) {
    const result: string[] = []
    const keys = Object.keys(resource)
    for (const c of crafting) {
        if (keys.includes(c)) {
            const d = resource[c]
            if (!description.includes(d) && !result.includes(d)) {
                result.push(d)
            }
        }
    }
    return result
}