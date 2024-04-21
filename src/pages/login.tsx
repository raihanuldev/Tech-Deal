import React from "react";
import { NextPage } from "next";
import { useSession, signIn, signOut } from "next-auth/react";
import { Session } from "inspector";

const Login: NextPage = () => {
    
  const { data: session } = useSession<boolean>();
  console.log(session)
  if (session) {
    return (
      <>
        Signed in as {session.user?.email}  <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn("github")}>Sign in</button>
    </>
  );
};

export default Login;
