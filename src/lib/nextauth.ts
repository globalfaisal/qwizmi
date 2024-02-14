import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { DefaultSession, NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { prisma } from '@/lib/db'

declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: {
      id: string
    } & DefaultSession['user']
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string
  }
}

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    jwt: async ({ token }) => {
      const db_user = await prisma.user.findFirst({
        where: { email: token?.email },
      })

      if (db_user) {
        token.id = db_user.id.toString()
      }

      return token
    },
    session: ({ session, token }) => {
      const { id, name, email, picture } = token

      session.user.id = id
      session.user.name = name
      session.user.email = email
      session.user.image = picture

      return session
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
}
