import { isDevelopmentEnvironment } from '@/lib/constants';

export const authConfig = {
  pages: {
    signIn: '/login',
    newUser: '/',
  },
  providers: [
    // added later in auth.ts since it requires bcrypt which is only compatible with Node.js
    // while this file is also used in non-Node.js environments
  ],
  callbacks: {},
  cookies: {
    sessionToken: {
      name: `next-auth.session-token`,
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: !isDevelopmentEnvironment,
      },
    },
  },
  secret:
    process.env.AUTH_SECRET || 'default-dev-secret-at-least-32-characters',
  debug: isDevelopmentEnvironment,
};
