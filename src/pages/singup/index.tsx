import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useSignInWithFacebook,
  useSignInWithGithub,
} from "react-firebase-hooks/auth";
import { NextPage } from "next";
import Link from "next/link";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { UserInfoInterface } from "@/interface/UserInfoInterface";
import auth from "@/firebase/firebase.auth";
import { UserCredential } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  
const SignUp: NextPage = () => {
  const notify = () => toast("Login Succesfully");
  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
  const [signInWithFacebook, facebookUser, facebookLoading, facebookError] = useSignInWithFacebook(auth);
  const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);

  const handleGoogle = async () => {
    try {
      const result = await signInWithGoogle();
      if (result?.user) {
        const userInfo: UserInfoInterface = {
          name: result.user.displayName || '',
          email: result.user.email || '',
          role: 'seller', // by defult google account create will be count as a se;ller
          photoURL: result.user.photoURL || 'https://media.istockphoto.com/id/1393750072/vector/flat-white-icon-man-for-web-design-silhouette-flat-illustration-vector-illustration-stock.jpg?s=612x612&w=0&k=20&c=s9hO4SpyvrDIfELozPpiB_WtzQV9KhoMUP9R9gVohoU=',
        };

        const res = await fetch('http://localhost:5000/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userInfo),
        });
        if (res.ok) {
          notify()
          console.log('User information saved to database');
        } else {
          console.error('Failed to save user information to database');
        }
      }
    } catch (e) {
      console.error(e);
    }
  };

  const register = async (event: { preventDefault: () => void; target: any }) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photoUrl.value;
    const role = form.dropdown.value;

    const userInfo: UserInfoInterface = {
      name,
      email,
      role,
      photoURL: photo,
    };

    try {
      const response = await createUserWithEmailAndPassword(email, password);
      if (response?.user) {
        const res = await fetch('http://localhost:5000/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userInfo),
        });
        if (res.ok) {

          console.log(res,'User information saved to database');
          notify()
        } else {
          console.error('Failed to save user information to database');
        }
      }
    } catch (e) {
      console.error('Error registering user: ', e);
    }

    form.reset();
  };

  return (
    <div>
      <div className="flex min-h-full w-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full p-6 bg-white rounded-lg border border-gray-200 shadow-md max-w-md space-y-8">
          <div>
            <h2 className="mt-1 text-center text-2xl font-bold tracking-tight text-gray-900">
              Sign Up to your account
            </h2>
          </div>
          <form onSubmit={register} className="mt-8 space-y-6">
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label className="sr-only">Full Name</label>
                <input
                  name="name"
                  type="text"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Full Name"
                />
              </div>
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
              <div>
                <input
                  type="text"
                  name="photoUrl"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Photo Url"
                />
              </div>
              <select
                id="dropdown"
                name="dropdown"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                <option value="buyer">Buyer</option>
                <option value="seller">Seller</option>
              </select>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-[#19065d] py-2 px-4 text-sm font-medium text-white hover:bg-[#382778] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Sign Up
              </button>
            </div>
          </form>
          <div className="main-hr flex items-center text-center">
            <hr className="hr-tag border-gray-300 border-1 w-full rounded-md" />
            <label className="hr-tag block font-medium text-sm text-gray-600 w-full">
              Or continue with
            </label>
            <hr className="hr-tag border-gray-300 border-1 w-full" />
          </div>
          <div className="social flex min-h-fit items-center justify-center py-1">
            <div className="glass mx-2 btn btn-outline w-20 lg:w-28 hover:bg-[#382778]">
              <button onClick={handleGoogle}>
                <FaGoogle />
              </button>
            </div>
            <div className="glass mx-2 btn btn-outline w-20 lg:w-28 hover:bg-[#382778]">
              <button onClick={async () => {
                try {
                  await signInWithFacebook();
                } catch (e) {
                  console.error(e);
                }
              }}>
                <FaFacebook />
              </button>
            </div>
            <div className="btn mx-2 btn-outline glass w-20 lg:w-28 hover:bg-[#382778]">
              <button onClick={async () => {
                try {
                  await signInWithGithub();
                } catch (e) {
                  console.error(e);
                }
              }}>
                <FaGithub />
              </button>
            </div>
          </div>

          <div className="mt-7">
            <div className="flex justify-center items-center">
              <label className="mr-2">Already have an account?</label>
              <Link
                className="text-[#382778] transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"
                href="/login"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default SignUp;
