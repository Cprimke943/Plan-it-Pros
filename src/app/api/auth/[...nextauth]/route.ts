import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { authConfig } from "@/auth.config"; // Your auth config

const handler = NextAuth(authConfig);

export { handler as GET, handler as POST };
