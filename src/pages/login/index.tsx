import React from "react";
import { NextPage } from "next";
import { useSession, signIn, signOut } from "next-auth/react";
import { Session } from "inspector";
import Link from "next/link";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa6";
import Image from "next/image";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "@/firebase/firebase.auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserInfoInterface } from "@/interface/UserInfoInterface";
import { useRouter } from "next/router";
import Head from "next/head";

const Login: NextPage = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const notify = ()=> toast("login succefully")
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
  const handleSubmit = (e: { preventDefault: () => void; target: any }) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signInWithEmailAndPassword(email, password)
    notify()
    form.reset();
  };
  const handleGoogle = async () => {
    try {
      const result = await signInWithGoogle();
      if (result?.user) {
        const userInfo: UserInfoInterface = {
          name: result.user.displayName || '',
          email: result.user.email || '',
          role: 'seller',
          photoURL: result.user.photoURL || 'https://media.istockphoto.com/id/1393750072/vector/flat-white-icon-man-for-web-design-silhouette-flat-illustration-vector-illustration-stock.jpg?s=612x612&w=0&k=20&c=s9hO4SpyvrDIfELozPpiB_WtzQV9KhoMUP9R9gVohoU=',
        };

        const res = await fetch('https://tech-deal-backend-o5ta.vercel.app/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userInfo),
        });
        if (res.ok) {
          notify();
          console.log('User information saved to database');
        } else {
          console.error('Failed to save user information to database');
        }
      }
    } catch (e) {
      console.error(e);
    }
  };
  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <Head>
        <title>Login | Tech Deal</title>
        <meta name="description" content="Welcome to our home page. Discover our products and services." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="flex min-h-full w-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full p-6  bg-white rounded-lg border border-gray-200 shadow-md max-w-md space-y-8">
          <div>
            {/* <Image className="flex justify-center" src='https://png.pngtree.com/template/20190927/ourmid/pngtree-e-commerce-logo-template-image_311731.jpg' alt="Logo" width={200} height={100} unoptimized/> */}
            <h2 className="mt-1 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-6"
            action="#"
            method="POST"
          >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-[#382778] py-2 px-4 text-sm font-medium text-white hover:bg-[#260991] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Sign in
              </button>
            </div>
          </form>
          <div className="main-hr flex items-center  text-center">
            <hr className="hr-tag border-gray-300 border-1 w-full rounded-md" />
            <label className="hr-tag block font-medium text-sm text-gray-600 w-full">
              Or continue with
            </label>
            <hr className="hr-tag border-gray-300 border-1 w-full" />
          </div>
          <div className="social flex min-h-fit items-center justify-center py-1">
            <div className="glass mx-2 lg:w-28 btn btn-outline w-20 hover:bg-[#260991]">
              <button onClick={handleGoogle}>
                <FaGoogle />
              </button>
            </div>
            <div className="glass mx-2 btn btn-outline lg:w-28 w-20 hover:bg-[#260991]">
              <button>
                <FaFacebook />
              </button>
            </div>
            <div className="btn mx-2 lg:w-28 btn-outline glass w-20 hover:bg-[#260991]">
              <button>
                <FaGithub />
              </button>
            </div>
          </div>

          <div className="mt-7">
            <div className="flex justify-center items-center">
              <label className="mr-2">Don t have an account?</label>

              <Link
                className=" text-[#260991] transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
                href="/singup"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Login;
