/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // env : {
    //     GOOGLE_CLIENT_ID : '814539564665-5dnl3htnkdq69nk44togcmcvj6jurq04.apps.googleusercontent.com',
    //     GOOGLE_CLIENT_SECRET : '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'
    // }
}

module.exports = nextConfig

module.exports = {
    i18n: {
        locales: ['en', 'ru'],
        defaultLocale: 'ru',
    },
    images: {
        domains: ['thumbs.dfs.ivi.ru', 'www.ivi.ru', 'localhost', 'images-ext-2.discordapp.net', 'static.thenounproject.com', 'kinopoiskapiunofficial.tech'],
    }
}