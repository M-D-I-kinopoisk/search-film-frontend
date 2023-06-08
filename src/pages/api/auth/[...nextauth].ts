import NextAuth, {NextAuthOptions} from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
import VkProvider from 'next-auth/providers/vk'
import {User} from '@/types/interface'


export const authOptions: NextAuthOptions = {
    
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        }),
        VkProvider({
            clientId: process.env.VK_CLIENT_ID as string,
            clientSecret: process.env.VK_CLIENT_SECRET as string
        }),
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: {label: 'Username', type: 'text', placeholder: 'jsmith'},
                password: {label: 'Password', type: 'password'}
            },
            async authorize(credentials, req) {

                const res = await fetch('http://localhost:12120/api/users/login', {
                    method: 'POST',
                    body: JSON.stringify({
                        email: credentials?.email,
                        password: credentials?.password,
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                const user = await res.json()

                if (user.token || user.name) {
                  
                    return user
                } else {
           
                    return null
                    
                }
            }
        }),
    ],
    pages: {
        signIn: '/',
        signOut: '/',
    },
    session: {
        strategy: 'jwt'
    },
    callbacks: {
        async jwt({token, user}) {
            return {...token, ...user}
        },
        async session({session, token, user}) {
                session.user = token as User
            return session
        }
    }

}

export default NextAuth(authOptions)