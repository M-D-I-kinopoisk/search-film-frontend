import {withAuth} from 'next-auth/middleware'
import {NextResponse} from 'next/server'
import type {NextRequest} from 'next/server'

export default withAuth(
    function middleware(request: NextRequest) {

        console.log(request)

        if (request.nextUrl.pathname.startsWith('/admin') && request.nextauth.token?.role?.name !== 'ADMIN') {
            return NextResponse.rewrite(new URL('/', request.url))
        }
    },
    {
        callbacks: {
            authorized: ({token}) => !!token
        },
    }
)

export const config = {
    matcher: ['/admin/:path*'],
}