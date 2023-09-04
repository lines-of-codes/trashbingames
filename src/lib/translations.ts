import i18n from 'sveltekit-i18n';
import type { Config } from 'sveltekit-i18n';

const config: Config = {
    loaders: [
        {
            locale: 'en',
            key: 'common',
            loader: async () => (await import('./en/common.json')).default,
        },
        {
            locale: 'en',
            key: 'games',
            loader: async () => (await import('./en/games.json')).default,
        },
        {
            locale: 'en',
            key: 'softwares',
            loader: async () => (await import('./en/softwares.json')).default,
        },
        {
            locale: 'en',
            key: 'contact',
            loader: async () => (await import('./en/contact.json')).default,
        },
        {
            locale: 'th',
            key: 'common',
            loader: async () => (await import('./th/common.json')).default,
        },
        {
            locale: 'th',
            key: 'games',
            loader: async () => (await import('./th/games.json')).default,
        },
        {
            locale: 'th',
            key: 'contact',
            loader: async () => (await import('./th/contact.json')).default,
        },
        {
            locale: 'th',
            key: 'softwares',
            loader: async () => (await import('./th/softwares.json')).default,
        },
    ]
};

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);
