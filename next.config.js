/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['thumbs.dfs.ivi.ru', 'www.ivi.ru', 'localhost', 'images-ext-2.discordapp.net', 'static.thenounproject.com', 'kinopoiskapiunofficial.tech'],
    }
}

const withNextIntl = require('next-intl/plugin')(
    'src/i18n.ts'
)

module.exports = withNextIntl(nextConfig)

