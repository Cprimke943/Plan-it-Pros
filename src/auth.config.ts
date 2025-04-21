import CredentialsProvider from "next-auth/providers/credentials";
import { AuthOptions } from "next-auth";
import User from "@/models/UserSchema";
import bcrypt from "bcryptjs";
import dbConnect from "../config/mongodb";

export const authConfig: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { username, password } = credentials || {};

        if (!username || !password) {
          throw new Error("Username and password are required");
        }

        await dbConnect();

        const user = await User.findOne({ username });

        if (!user) {
          console.log("❌ User not found");
          return null;
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if (!isPasswordCorrect) {
          console.log("❌ Invalid password");
          return null;
        }

        // ✅ Return a plain object to avoid serialization issues
        return {
          id: user._id.toString(),
          name: user.username,
          email: user.email,
        };
      },
    }),
  ],
  pages: {
    signIn: "/login", // optional: custom login route
    error: "/login",  // optional: redirect back on error
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
};
