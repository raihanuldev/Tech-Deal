import NextAuth from "next-auth"
import GithubProvider, { GithubProfile } from "next-auth/providers/github"
import { signIn } from "next-auth/react"

interface gihtubProviderOptions{
  clientId:string;
  clientSecret:string;
}


export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider<GithubProfile>({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    } as gihtubProviderOptions),
    
    // ...add more providers here
  ],
  pages: {
    signIn:'/login'
  }
}

export default NextAuth(authOptions)