// import {withAuth} from 'next-auth/middleware'
// import {NextResponse} from 'next/server'
// import type {NextRequest} from 'next/server'
// import createMiddleware from 'next-intl/middleware'
// import createIntlMiddleware from 'next-intl/middleware'


// export default withAuth(
//     function middleware(request: NextRequest) {
//
//         // @ts-ignore
//         if (request.nextUrl.pathname.startsWith('/admin') && request.nextauth.token?.role?.name !== 'ADMIN') {
//             return NextResponse.rewrite(new URL('/', request.url))
//         }
//     },
//     {
//         callbacks: {
//             authorized: ({token}) => !!token
//         },
//     }
// )

// export const config = {
//     matcher: ['/admin/:path*', '/((?!_next|.*\\..*).*)'],
// }

// import {withAuth} from 'next-auth/middleware'
// import createIntlMiddleware from 'next-intl/middleware'
// import {NextRequest} from 'next/server'
//
// const locales = ['en', 'ru']
// // const publicPages = ['/', '/login']
//
// const intlMiddleware = createIntlMiddleware({
//     locales,
//     defaultLocale: 'ru'
// })
//
// const authMiddleware = withAuth(
//     // Note that this callback is only invoked if
//     // the `authorized` callback has returned `true`
//     // and not for pages listed in `pages`.
//     function onSuccess(req) {
//         return intlMiddleware(req)
//     },
//     //         if (request.nextUrl.pathname.startsWith('/admin') && request.nextauth.token?.role?.name !== 'ADMIN') {
// //             return NextResponse.rewrite(new URL('/', request.url))
// //         }
// //     },
// //     {
// //         callbacks: {
// //             authorized: ({token}) => !!token
// //         },
//     {
//         callbacks: {
//             authorized: ({token}) => !!token
//         },
//     }
// )
//
// export default function middleware(request: NextRequest) {
//
//             if (request.nextUrl.pathname.startsWith('/admin') && request.nextauth.token?.role?.name !== 'ADMIN') {
//             return NextResponse.rewrite(new URL('/', request.url))
//         }
//     // const publicPathnameRegex = RegExp(
//     //     `^(/(${locales.join('|')}))?(${publicPages.join('|')})?/?$`,
//     //     'i'
//     // )
//     // const isPublicPage = publicPathnameRegex.test(req.nextUrl.pathname)
//
//     // if (isPublicPage) {
//     //     return intlMiddleware(req)
//     // } else {
//         return (authMiddleware as any)(req)
//     // }
// }
//
// export const config = {
//     // Skip all paths that should not be internationalized
//     matcher: ['/((?!api|_next|.*\\..*).*)', '/admin/:path*']
// }
import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
    // A list of all locales that are supported
    locales: ['ru', 'en'],

    // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
    defaultLocale: 'ru'
})

export const config = {
    // Skip all paths that should not be internationalized
    matcher: ['/((?!api|_next|.*\\..*).*)']
}