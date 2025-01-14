const LOCAL_STORAGE_KEYS = {
    LANGUAGE: 'lang',
    THEME: 'theme',
    COLLECTION: 'my-maladum-collection',
}

export function getUserLanguage() {
    return localStorage.getItem(LOCAL_STORAGE_KEYS.LANGUAGE) || 'en'
}

export function setUserLanguage(lang: string) {
    localStorage.setItem(LOCAL_STORAGE_KEYS.LANGUAGE, lang)
}

export function getUserCollection() {
    return localStorage.getItem(LOCAL_STORAGE_KEYS.COLLECTION)
}

export function setUserCollection(products: string) {
    localStorage.setItem(LOCAL_STORAGE_KEYS.COLLECTION, products)
}

type THEME_TYPE = 'dark' | 'light'

export function getUserTheme(): THEME_TYPE {
    const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)',
    ).matches
    const defaultTheme = prefersDark ? 'dark' : 'light'
    return (
        (localStorage.getItem(LOCAL_STORAGE_KEYS.THEME) as THEME_TYPE) ||
        defaultTheme
    )
}

export function setUserTheme(theme: string) {
    localStorage.setItem(LOCAL_STORAGE_KEYS.THEME, theme)
}
