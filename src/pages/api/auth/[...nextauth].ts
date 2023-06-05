import NextAuth, {NextAuthOptions} from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
import VkProvider from 'next-auth/providers/vk'


export const authOptions: NextAuthOptions = {
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        VkProvider({
            clientId: process.env.VK_CLIENT_ID,
            clientSecret: process.env.VK_CLIENT_SECRET
        })
        // CredentialsProvider({
        //     name: 'Credentials',
        //     credentials: {
        //         email: {label: 'Username', type: 'text', placeholder: 'jsmith'},
        //         password: {label: 'Password', type: 'password'}
        //     },
        //     async authorize(credentials, req) {
        //
        //         const res = await fetch('http://localhost:12120/api/users/login', {
        //             method: 'POST',
        //             body: JSON.stringify({
        //                 email: credentials?.email,
        //                 password:  credentials?.password,
        //             }),
        //             headers: {
        //                 'Content-Type': 'application/json'
        //             }
        //         })
        //         const user = await res.json()
        //
        //         if (user) {
        //             // Any object returned will be saved in `user` property of the JWT
        //             return user
        //         } else {
        //             // If you return null then an error will be displayed advising the user to check their details.
        //             return null
        //
        //             // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        //         }
        //     }
        // }),
    ],
    pages : {
        signIn : '/',
        signOut : '/',
        // error : '/'
    },
    session : {
      strategy : 'jwt'
    },
    callbacks : {
        async jwt({token, user}) {
            return { ...token, ...user}
        },
        async session({session, token, user}) {
            session.user = token
            return session
        }
    }

}

export default NextAuth(authOptions)