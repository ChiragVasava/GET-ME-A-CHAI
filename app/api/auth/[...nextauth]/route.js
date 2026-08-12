import NextAuth from "next-auth";
import User from '@/models/User';
import dbConnect from '@/lib/db';
import GithubProvider from "next-auth/providers/github";

// Build providers array — only include providers with real credentials
const providers = [];

// GitHub — primary provider
if (process.env.GITHUB_ID && process.env.GITHUB_SECRET) {
  const GithubProvider = require("next-auth/providers/github").default;
  providers.push(GithubProvider({
    clientId: process.env.GITHUB_ID,
    clientSecret: process.env.GITHUB_SECRET,
  }));
}

// Google — add credentials in Vercel env vars to enable
if (process.env.GOOGLE_ID && process.env.GOOGLE_SECRET) {
  const GoogleProvider = require("next-auth/providers/google").default;
  providers.push(GoogleProvider({
    clientId: process.env.GOOGLE_ID,
    clientSecret: process.env.GOOGLE_SECRET,
  }));
}

// LinkedIn — add credentials in Vercel env vars to enable
if (process.env.LINKEDIN_ID && process.env.LINKEDIN_SECRET) {
  const LinkedInProvider = require("next-auth/providers/linkedin").default;
  providers.push(LinkedInProvider({
    clientId: process.env.LINKEDIN_ID,
    clientSecret: process.env.LINKEDIN_SECRET,
  }));
}

// Twitter — add credentials in Vercel env vars to enable
if (process.env.TWITTER_ID && process.env.TWITTER_SECRET) {
  const TwitterProvider = require("next-auth/providers/twitter").default;
  providers.push(TwitterProvider({
    clientId: process.env.TWITTER_ID,
    clientSecret: process.env.TWITTER_SECRET,
  }));
}

// Facebook — add credentials in Vercel env vars to enable
if (process.env.FACEBOOK_ID && process.env.FACEBOOK_SECRET) {
  const FacebookProvider = require("next-auth/providers/facebook").default;
  providers.push(FacebookProvider({
    clientId: process.env.FACEBOOK_ID,
    clientSecret: process.env.FACEBOOK_SECRET,
  }));
}

// Email — add SMTP credentials in Vercel env vars to enable
if (process.env.EMAIL_SERVER_HOST && process.env.EMAIL_FROM) {
  const EmailProvider = require("next-auth/providers/email").default;
  providers.push(EmailProvider({
    server: {
      host: process.env.EMAIL_SERVER_HOST,
      port: process.env.EMAIL_SERVER_PORT,
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
    },
    from: process.env.EMAIL_FROM,
  }));
}

export const authOptions = {
  providers,
  callbacks: {
    async signIn({ user, account }) {
      await dbConnect();
      const currentUser = await User.findOne({ email: user.email });
      if (!currentUser) {
        const newUser = new User({
          email: user.email,
          username: user.email.split("@")[0],
        });
        await newUser.save();
        user.name = newUser.username;
      } else {
        user.name = currentUser.username;
      }
      return true;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };