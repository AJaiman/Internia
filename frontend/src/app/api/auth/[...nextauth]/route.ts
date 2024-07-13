import NextAuth from "next-auth";
import type { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId:"437138515775-un9okqhoinqjrubir4bpi9c60782sve2.apps.googleusercontent.com",
      clientSecret:"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",
      authorization: {
        params: {
          redirect_uri: "http://localhost:3000/api/auth/callback/google",
        }
      }
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
