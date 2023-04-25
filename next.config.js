/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
}

module.exports = nextConfig

module.exports = {
    i18n: {
        locales: ['en', 'ru'],
        defaultLocale: 'ru',
    },
    react: { useSuspense: false },
    images: {
        domains: ['thumbs.dfs.ivi.ru', 'www.ivi.ru'],
    },
}