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
  callbacks: {
    async signIn({ user }) {
      if (!user || !user.name || !user.email) {
        return false;
      }
      
      try {
        const response = await fetch('http://localhost:8000/user', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({first_name: user.name.split(" ")[0], last_name: user.name.split(" ")[1], email: user.email}),
        });
        return response.ok;
      } catch (error) {
        console.error('Error during user creation:', error);
        return false;
      }
    }
  },
  pages: {
    error: '/',    // Redirect to home page on error
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };