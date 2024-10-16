import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  theme: {
    colorScheme: 'light' as const,
    logo: '/fero-logo-letter.svg',
    brandColor: '#5eb282',
  },
  pages: {
    signIn: '/auth/signin',
  },
  callbacks: {
    async redirect() {
      return '/';
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
