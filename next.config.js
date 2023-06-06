/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['thumbs.dfs.ivi.ru', 'www.ivi.ru', 'localhost', 'images-ext-2.discordapp.net', 'static.thenounproject.com', 'kinopoiskapiunofficial.tech'],
    }
}

const withNextIntl = require('next-intl/plugin')(
    // This is the default (also the `src` folder is supported out of the box)
    'src/i18n.ts'
)

module.exports = withNextIntl(nextConfig)

// module.exports = {
//     // i18n: {
//     //     locales: ['en', 'ru'],
//     //     defaultLocale: 'ru',
//     // },
//
// }