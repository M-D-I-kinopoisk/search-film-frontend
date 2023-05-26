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
    images: {
        domains: ['thumbs.dfs.ivi.ru', 'www.ivi.ru', 'localhost', 'images-ext-2.discordapp.net'],
    }
}