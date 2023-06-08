import {User} from '@/types/interface'
import {DefaultSession} from 'next-auth'

declare module 'next-auth'{

    interface Session {
        user: User
            // & DefaultSession['user']
    }
}