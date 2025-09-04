import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import User from '@/models/User';
import dbConnect from '@/lib/db';
import Razorpay from "razorpay";

// import AppleProvider from "next-auth/providers/apple";
// import FacebookProvider from "next-auth/providers/facebook";
// import GoogleProvider from "next-auth/providers/google";
// import EmailProvider from "next-auth/providers/email";

// export const authOptions = NextAuth {

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // AppleProvider({
    //   clientId: process.env.APPLE_ID,
    //   clientSecret: process.env.APPLE_SECRET,
    // }),
    // FacebookProvider({
    //   clientId: process.env.FACEBOOK_ID,
    //   clientSecret: process.env.FACEBOOK_SECRET,
    // }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_ID,
    //   clientSecret: process.env.GOOGLE_SECRET,
    // }),
    // EmailProvider({
    //   server: process.env.EMAIL_SERVER,
    //   from: process.env.EMAIL_FROM,
    // }),
    // You can add more providers here...
  ],
  callbacks: {
  async signIn({ user, account, profile, email, credentials }) {
   if (account.provider == "github") {
    // connect to the database
    await dbConnect();
    // check if the user already exists in the database
    const currentUser = await User.findOne({email: user.email})
    if(!currentUser) {
      // Create a new User
      const newUser = new User({
        email: user.email,
        username: user.email.split("@")[0],
      })
      await newUser.save()
      user.name = newUser.username
    }
    else{
      user.name = currentUser.username
    }
    return true
   }
  }
}
  // secret: process.env.NEXTAUTH_SECRET,
  // Optional: Further options like callbacks, sessions, database adapter, etc.
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };